const express = require('express')
const request = require('request')
const cors = require('cors')
const bodyParser = require('body-parser')
const { tiny } = require('tiny-shortener')
const rp = require('request-promise')
const MongoClient = require('mongodb').MongoClient

const {
  getRandomInt,
  getRandomSpot,
  getSpecificLunchSpots,
  options,
  shuffle,
  triggerSlackPoll
} = require('./helpers')
const {
  slackOptions,
  mongoUrl,
  YELP_TOKEN
} = require('./config')
const launchSearchSpots = require('./searchSpots')
const searchYelp = require('./searchYelp')
const votingBlock = require('./votingBlock')
const buildInteractiveMessage = require('./buildInteractiveMessage')
const buildHelpBlock = require('./buildHelpBlock')

require('dotenv').config()

const app = express()
const jsonParser = bodyParser.json()

const PORT = process.env.PORT || 2999

app.use(bodyParser.urlencoded({ extended: false }))
app.use(jsonParser)
app.use(cors())

/* ROUTES */

/* HANDLE SLASH COMMANDS */
app.post('/lunch', async (req, res) => {
  const {
    channel_id: channelId,
    response_url: webhookUrl,
    team_domain: teamDomain,
    text = '',
    token,
    trigger_id: triggerId,
    user_id: userId,
  } = req.body
  res.status(200).json({
    response_type: 'in_channel',
    text: 'Thanks! Hang tight...'
  })

  if (text === 'add') {
    console.log('text = add');
    return launchSearchSpots(triggerId, token)
  }

  if (text === 'help') {
    console.log('text = help');
    return buildHelpBlock(req.body)
  }

  const lunchData = await triggerSlackPoll('test', text)
  let data = {
    bearerToken: process.env.SLACK_TOKEN_VERYS,
    callback_id: 'poll_creator',
    channel: channelId,
    response_type: 'in_channel',
    token: slackOptions[teamDomain].token,
    trigger_id: triggerId,
    user: userId,
  }

  if (!Object.keys(lunchData).length) {
    data.text = ':exclamation: You don\'t have enough lunch spots saved to create a poll. You can do so by typing "/lunch add"'
  } else {
    data.text = 'Thanks!'
    data.blocks = await votingBlock({ lunchData, userId: null, vote: null })
  }
  console.log('data: for poll: ', data);
  try {
    rp(options({ data, uri: webhookUrl }))
  } catch(err) {
    console.log('error from creating poll: ', err);
  }
})

/* HANDLE THE INTERACTIVE COMPONENTS */
app.post('/lunch/interactive', async (req, res) => {
  if (req.body.payload) {
    const request = JSON.parse(req.body.payload)
    const {
      callback_id,
      type
    } = request

    if (type === 'dialog_submission') {
      if (callback_id === 'search_spot') {
        console.log('returning a success, close the dialog');
        res.status(204).json({
          body: '',
          isBase64Encoded: true,
        })
        try {
          const {
            submission: {
              lunchSpot,
              location,
            } = {},
          } = request
          const yelpResults = await searchYelp(lunchSpot, location)
          const {
            results: {
              businesses
            }
          } = yelpResults
          const interactiveMessage = await buildInteractiveMessage(businesses, request)
        } catch(err) {
          console.log('uh oh problem with yelp search: ', err);
        }
      }
    }
    if (type === 'block_actions') {
      res.sendStatus(200)
      const [submission] = request.actions
      console.log('submission: ', submission);
      // check if its a spot addition request
      if (submission.text.text === 'Choose') {
        // spot addition request
        const selectedSpot = JSON.parse(submission.value)
        MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
          const db = client.db('lunch')
          const collection = db.collection('test')
          // insert in the database, but not if another spot with the same name
          // already exists
          collection.updateOne(selectedSpot, { $set: selectedSpot }, { upsert: true })
            .then(async data => {
              // send back message saying successful, failure, or already added
              const options = {
                method: 'POST',
                uri: 'https://slack.com/api/chat.postEphemeral',
                body: JSON.stringify({
                  channel: request.channel.id,
                  token: request.token,
                  user: request.user.id,
                  type: 'section',
                  text: data.upsertedCount ?
                    `:tada: ${selectedSpot.name} has been added to the list!` :
                    ':dancer: Great minds think alike! This spot has already been added. Try another place.',
                }),
                headers: {
                  Authorization: `Bearer ${process.env.SLACK_TOKEN_VERYS}`,
                  'Content-Type': 'application/json',
                },
              }
              try {
                const response = await rp(options)
              } catch (err) {
                console.log('err: ', err);
              }

            })
            .catch(err => {
              console.log('err from db: ', err);
            })

          client.close()
        })
      } else {
        // its a vote or new poll request
        const { value: voteValue } = submission
        const vote = voteValue === 'newPoll' ? 'newPoll' : JSON.parse(voteValue)
        const userId = voteValue === 'newPoll' ? req.body : request.user.id

        try {
          // Repalace original with user's vote
          let data = {
            bearerToken: process.env.SLACK_TOKEN_VERYS,
            callback_id: 'poll_creator',
            channel: request.channel.id,
            replace_original: true,
            token: slackOptions.verys.token,
            trigger_id: request.trigger_id,
          }

          data.blocks = await votingBlock({ lunchData: request, userId, vote })

          const response = await rp(options({ data, uri: request.response_url }))
          console.log('response from votingBlock: ', response);
        } catch(err) {
          console.log('err: ', err);
        }
      }
    }
  }
})

/* CLEAR THE DATABASE */
// WARNING proceed with caution
app.get('/clear', (req, res) => {
  const { appId, password } = req.body
  if (password !== process.env.MONGO_PASSWORD) {
    res.sendStatus(404)
  } else {
    MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
      const db = client.db('lunch')
      const collection = db.collection('test')

      collection.deleteMany({})
      .then(data => {
        console.log('data from delete: ', data);
        res.set({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
          'Access-Control-Allow-Headers': 'Content-Type,Authorization'
        })
        res.status(200).json(data)
      })

      client.close()
    })
  }
})

// eslint-disable-next-line no-console
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
