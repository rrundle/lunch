const express = require('express')
const path = require('path')
const cors = require('cors')
const favicon = require('express-favicon')
const bodyParser = require('body-parser')
const rp = require('request-promise')
const qs = require('qs')

const { mongoClient, options, triggerSlackPoll } = require('./slack/helpers')
const launchSearchSpots = require('./slack/searchSpots')
const searchYelp = require('./slack/searchYelp')
const votingBlock = require('./slack/votingBlock')
const buildInteractiveMessage = require('./slack/buildInteractiveMessage')
const buildHelpBlock = require('./slack/buildHelpBlock')

require('dotenv').config()

const app = express()
const jsonParser = bodyParser.json()

const PORT = process.env.PORT || 2999

app.use(bodyParser.urlencoded({ extended: false }))
app.use(jsonParser)
app.use(cors())
app.use(favicon(__dirname + '/build/favicon.ico'))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

// Production dev
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

/* ROUTES */

/* HANDLE SLASH COMMANDS */
app.post('/lunch', async (req, res) => {
  const {
    channel_id: channelId,
    response_url: webhookUrl,
    team_id: teamId,
    text = '',
    token,
    trigger_id: triggerId,
    user_id: userId,
  } = req.body

  if (text === 'add') {
    res.sendStatus(200)
    return launchSearchSpots({ teamId, triggerId, token })
  }

  if (text === 'help') {
    res.sendStatus(200)
    return buildHelpBlock(req.body)
  }

  res.status(200).json({
    response_type: 'ephemeral',
    text: 'Thanks! Hang tight...',
  })

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
    data.text =
      ':exclamation: You don\'t have enough lunch spots saved to create a poll. You can do so by typing "/lunch add"'
  } else {
    data.text = 'Thanks!'
    data.blocks = await votingBlock({ lunchData, user: null, vote: null })
  }
  try {
    rp(options({ data, uri: webhookUrl }))
  } catch (err) {
    console.error('error from creating poll: ', err)
  }
})

/* HANDLE THE INTERACTIVE COMPONENTS */
app.post('/lunch/interactive', async (req, res) => {
  if (req.body.payload) {
    const request = JSON.parse(req.body.payload)
    const { callback_id, type } = request

    if (type === 'dialog_submission') {
      if (callback_id === 'search_spot') {
        res.status(204).json({
          body: '',
          isBase64Encoded: true,
        })
        try {
          const { submission: { lunchSpot, location } = {} } = request
          const yelpResults = await searchYelp(lunchSpot, location)
          const {
            results: { businesses },
          } = yelpResults
          await buildInteractiveMessage(businesses, request)
        } catch (err) {
          console.error('uh oh problem with yelp search: ', err)
        }
      }
    }
    if (type === 'block_actions') {
      res.sendStatus(200)
      const [submission] = request.actions
      const { team: { id: teamId } = {} } = request
      // check if its a spot addition request
      if (submission.text.text === 'Choose') {
        // spot addition request
        const selectedSpot = JSON.parse(submission.value)
        const collection = await mongoClient(teamId)
        // insert in the database if it doesn't already exist
        const data = await collection.updateOne(
          selectedSpot,
          { $set: selectedSpot },
          { upsert: true },
        )
        // send back message saying successful, failure, or already added
        const options = {
          method: 'POST',
          uri: request.response_url,
          body: JSON.stringify({
            channel: request.channel.id,
            token: request.token,
            user: request.user.id,
            type: 'section',
            text: data.upsertedCount
              ? `:tada: ${selectedSpot.name} has been added to the list!`
              : ':dancer: Great minds think alike! This spot has already been added. Try another place.',
          }),
          headers: {
            Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
        try {
          await rp(options)
        } catch (err) {
          console.error('err: ', err)
        }
      } else {
        // its a vote or new poll request
        const { value: voteValue } = submission
        const vote = voteValue === 'newPoll' ? 'newPoll' : JSON.parse(voteValue)

        try {
          let data = {
            bearerToken: process.env.SLACK_TOKEN,
            callback_id: 'poll_creator',
            channel: request.channel.id,
            replace_original: true,
            token: request.token,
            trigger_id: request.trigger_id,
          }

          data.blocks = await votingBlock({
            lunchData: request,
            user: req.body,
            vote,
          })

          await rp(options({ data, uri: request.response_url }))
        } catch (err) {
          console.error('err: ', err)
        }
      }
    }
  }
})

// Send welcome message when user isntalls the app
app.put('/welcome', async (req, res) => {
  const body = req.body
  console.log('body: ', body)
  const { accessToken, channelId } = body

  const data = {
    channel: channelId,
    text: 'Welcome to Lunch Poll, use `/lunch help` for a list of commands',
  }
  console.log('data: ', data)

  const options = {
    method: 'POST',
    uri: 'https://slack.com/api/chat.postMessage',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }
  const request = await rp(options)
  const response = JSON.parse(request)
  console.log('response: ', response)
  if (!response.ok) res.sendStatus(400)
  else res.sendStatus(200)
})

// /* Oauth endpoint for new users */
app.post('/oauth', async (req, res) => {
  const { code } = req.body
  console.log('code: ', code)

  const body = qs.stringify({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
  })
  console.log('body: ', body)

  const options = {
    method: 'POST',
    uri: 'https://slack.com/api/oauth.v2.access',
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ',
    },
  }
  const request = await rp(options)
  const response = JSON.parse(request)
  console.log('response: ', response)
  if (response.ok) {
    // insert the new client into the database
    const { team: { id: teamId } = {} } = response
    if (teamId) {
      const collection = await mongoClient(teamId)
      try {
        const matches = await collection.findOne()

        if (matches._id) {
          return res.status(200).json({
            message: 'existing user',
            ...response,
          })
        }
        // new client, insert
        await collection.insertOne({
          name: 'newClient',
          ...response,
        })
        return res.send(200).json({
          message: 'user added to db',
          ...response,
        })
      } catch (err) {
        return res.send(400).json({
          message: err,
        })
      }
    }
  } else {
    res.sendStatus(400)
  }
})

/* CLEAR THE DATABASE */
// WARNING proceed with caution
app.get('/clear', async (req, res) => {
  const { teamId, password } = req.body
  if (password !== process.env.MONGO_PASSWORD) {
    res.sendStatus(404)
  } else {
    const collection = await mongoClient(teamId)
    const user = await collection.deleteMany({})
    console.info('data from delete: ', user)
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    })
    res.status(200).json(user)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
