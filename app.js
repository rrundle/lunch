const express = require('express')
const request = require('request')
const cors = require('cors')
const bodyParser = require('body-parser')
const { tiny } = require('tiny-shortener')
const rp = require('request-promise')
const MongoClient = require('mongodb').MongoClient

const { getRandomInt, getRandomSpot, getSpecificLunchSpots, options, shuffle, triggerSlackPoll } = require('./helpers')
const launchAddSpot = require('./addSpots')

require('dotenv').config()

const app = express()
const jsonParser = bodyParser.json()

const PORT = process.env.PORT || 2999

app.use(bodyParser.urlencoded({ extended: false }))
app.use(jsonParser)
app.use(cors())

// Connection URL - local
// const url = 'mongodb://localhost:27017'

// Connecttion URL - production
const url = `mongodb+srv://slotdp02:${process.env.MONGO_PASSWORD}@cluster0-8cwp7.mongodb.net/test?retryWrites=true`

const YELP_TOKEN = process.env.YELP_TOKEN

const slackOptions = {
  verys: {
    channel: 'C9GE4DFTL',
    token: process.env.SLACK_TOKEN_VERYS,
  }
}

/* ROUTES */

app.post('/lunch', async (req, res) => {
  console.log('req.body: ', req.body);
  const {
    channel_id: channelId,
    team_domain: teamDomain,
    text = '',
    token,
    trigger_id: triggerId,
    user_id: userId,
  } = req.body
  res.status(200).json({
    response_type: 'in_channel',
    text: 'Thanks for sending the request!'
  })

  if (text === 'add') {
    return launchAddSpot(triggerId)
  }

  const lunchData = await triggerSlackPoll('verys', text)

  const data = {
    bearerToken: process.env.SLACK_TOKEN_VERYS_BOT,
    callback_id: 'poll_creator',
    channel: channelId,
    token: slackOptions[teamDomain].token,
    trigger_id: triggerId,
    user: userId,
    text: 'Thanks!',
    blocks: [
  		{
  			type: 'section',
  			text: {
  				type: 'plain_text',
  				text: 'What would you like for lunch today?'
  			}
  		},
      {
  			type: 'divider'
  		},
  		{
  			type: 'section',
  			text: {
  				type: 'mrkdwn',
  				text: `1. ${lunchData.spot1.name}`
  			},
  			accessory: {
  				type: 'button',
  				text: {
  					type: 'plain_text',
  					text: ':one:',
  					emoji: true
  				},
  				value: 'one'
  			}
  		},
      {
  			type: 'divider'
  		},
  		{
  			type: 'section',
  			text: {
  				type: 'mrkdwn',
  				text: `2. ${lunchData.spot2.name}`
  			},
  			accessory: {
  				type: 'button',
  				text: {
  					type: 'plain_text',
  					text: ':two:',
  					emoji: true
  				},
  				value: 'two'
  			}
  		},
      {
  			type: 'divider'
  		},
  		{
  			type: 'section',
  			text: {
  				type: 'mrkdwn',
  				text: `3. ${lunchData.spot3.name}`
  			},
  			accessory: {
  				type: 'button',
  				text: {
  					type: 'plain_text',
  					text: ':three:',
  					emoji: true
  				},
  				value: 'three'
  			}
  		}
  	]
  }
  console.log('data: ', data);
  const response = await rp(options({ data, uri: 'https://slack.com/api/chat.postMessage' }))
  console.log('response: ', response);
})

app.post('/clear', (req, res) => {
  const appId = req.body.appId
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db('lunch')
    const collection = db.collection(appId)

    collection.deleteMany({})
    .then(data => {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
      })
      res.status(200).json(data)
    })

    client.close()
  })
})

app.post('/lunch/addSpot', (req, res) => {
  console.log('req.body: ', req.body);
  const {
    submission: {
      lunchSpot,
    } = {},
    response_url: responseUrl,
  } = JSON.parse(req.body.payload)
  console.log('lunchSpot: ', lunchSpot);
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db('lunch')
    const collection = db.collection('verys')

    collection.insertOne({ item: lunchSpot })
    .then(data => {
      const insertedSpot = data.ops[0]
      console.log('data from db: ', insertedSpot);
      console.log('responseUrl: ', responseUrl);
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
      })
      res.send()
      rp(options({ data: { text: 'The restaurant has been added!' }, uri: responseUrl }))
    })

    client.close()
  })
})

app.post('/lunch/results', (req, res) => {
  console.log('got the request: ', req.body)
  const appId = req.body.appId
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log('error connecting to the db: ', err)
    } else {
      const db = client.db('lunch')
      const collection = db.collection(appId)

      collection.find().toArray()
      .then(data => {
        res.set({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
          'Access-Control-Allow-Headers': 'Content-Type,Authorization'
        })
        const sortedData = data.sort((a, b) => {
          const textA = a.name.toLowerCase()
          const textB = b.name.toLowerCase()
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        console.log('data sorted: ', sortedData);
        const response = {
          slackEnabled: slackOptions[appId].channel ? true : false,
          list: sortedData
        }
        res.status(200).json(response)
      })

      client.close()
    }
  })
})

app.post('/search/yelp', (req, res) => {

  const url =
    req.body.latitude ?
    `https://api.yelp.com/v3/businesses/search?term=${req.body.term}&latitude=${req.body.latitude}&longitude=${req.body.longitude}` :
    `https://api.yelp.com/v3/businesses/search?term=${req.body.term}&location=${req.body.location}`

  const options = {
    method: 'GET',
    url,
    headers: {
      Authorization: `Bearer ${YELP_TOKEN}`,
      content: 'application/json',
    },
  }

  request(options, function (error, response, body) {
    if (error) {
      res.status(403).json({ message: 'error getting yelp results'})
    } else {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
      })
      res.status(200).json(body)
    }
  })
})

// eslint-disable-next-line no-console
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
