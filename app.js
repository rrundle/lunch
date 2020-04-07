const express = require('express')
const request = require('request')
const cors = require('cors')
const bodyParser = require('body-parser')
const qs = require('qs')
const { tiny } = require('tiny-shortener')
const rp = require('request-promise')

const { mongoClient } = require('./helpers')

const {
  getRandomInt,
  getRandomSpot,
  options,
  shuffle,
  triggerSlackPoll
} = require('./helpers')
const {
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
    team_id: teamId,
    text = '',
    token,
    trigger_id: triggerId,
    user_id: userId,
  } = req.body
  console.log('req.body: ', req.body);

  console.log('req.body from /: ', req.body);
  res.status(200).json({
    response_type: 'in_channel',
    text: 'Thanks! Hang tight...'
  })

  if (text === 'add') {
    console.log('text = add');
    return launchSearchSpots({ teamId, triggerId, token })
  }

  if (text === 'help') {
    console.log('text = help');
    return buildHelpBlock(req.body)
  }

  const lunchData = await triggerSlackPoll(teamId, text)
  let data = {
    bearerToken: process.env.SLACK_TOKEN,
    callback_id: 'poll_creator',
    channel: channelId,
    response_type: 'in_channel',
    token,
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
      const { team: { id: teamId } = {} } = request
      console.log('submission: ', submission);
      // check if its a spot addition request
      if (submission.text.text === 'Choose') {
        // spot addition request
        const selectedSpot = JSON.parse(submission.value)
        console.log('selectedSpot: ', selectedSpot);
        console.log('teamId: ', teamId);
        const collection = await mongoClient(teamId)
        // insert in the database, but not if another spot with the same name
        // already exists
        const data = await collection.updateOne(selectedSpot, { $set: selectedSpot }, { upsert: true })
        console.log('data from insertion: ', data);
        // send back message saying successful, failure, or already added
        const options = {
          method: 'POST',
          uri: request.response_url,
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
            Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
        try {
          const response = await rp(options)
        } catch (err) {
          console.log('err: ', err);
        }
      } else {
        // its a vote or new poll request
        const { value: voteValue } = submission
        const vote = voteValue === 'newPoll' ? 'newPoll' : JSON.parse(voteValue)
        const userId = voteValue === 'newPoll' ? req.body : request.user.id
        console.log('request: ', request);

        try {
          // Repalace original with user's vote
          let data = {
            bearerToken: process.env.SLACK_TOKEN,
            callback_id: 'poll_creator',
            channel: request.channel.id,
            replace_original: true,
            token: request.token,
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

/* Oauth endpoint for new users */
app.get('/oauth', async (req, res) => {
  console.log('req.url: ', req.url);
  console.log('req.query: ', req.query);
  const { code } = req.query
  console.log('code: ', code);

  const body = qs.stringify({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
  })
  console.log('body: ', body);

  const options = {
    method: 'POST',
    uri: 'https://slack.com/api/oauth.v2.access',
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  console.log('options: ', options);
  const request = await rp(options)
  console.log('request: ', request);
  const response = JSON.parse(request)
  console.log('response: ', response);
  if (response.ok) {
    // insert the new client into the database
    const { team: { id: teamId } = {} } = response
    if (teamId) {
      const collection = await mongoClient(teamId)
      try {
        const matches = await collection.findOne()

        console.log('matches: ', matches);
        if (matches._id) {
          console.log('found a match, not inserting');
          res.sendStatus(200)
        }
        // new client, insert
        const inserted = await collection.insertOne({
          name: 'newClient',
          ...response
        })
        console.log('data from insertion: ', inserted);
        res.sendStatus(200)
      } catch(err) {
        console.log('no good: ', err);
        res.sendStatus(400)
      }
    }
  } else {
    res.sendStatus(400)
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
