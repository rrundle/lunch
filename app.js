const express = require('express')
const request = require('request')
const cors = require('cors')
const bodyParser = require('body-parser')
const { tiny } = require('tiny-shortener')
const rp = require('request-promise')
const MongoClient = require('mongodb').MongoClient

const { getRandomInt, getRandomSpot, getSpecificLunchSpots, options, shuffle, triggerSlackPoll } = require('./helpers')
const launchSearchSpots = require('./searchSpots')
const searchYelp = require('./searchYelp')
const votingBlock = require('./votingBlock')
const buildInteractiveMessage = require('./buildInteractiveMessage')

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

/* HANDLE SLASH COMMANDS */
app.post('/lunch', async (req, res) => {
  console.log('req.body in /lunch: ', req.body);
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
    text: 'Thanks for sending the request!'
  })

  if (text === 'add') {
    return launchSearchSpots(triggerId)
  }

  const lunchData = await triggerSlackPoll('test', text)
  console.log('lunchData: ', lunchData);
  let data = {
    bearerToken: process.env.SLACK_TOKEN_VERYS_BOT,
    callback_id: 'poll_creator',
    channel: channelId,
    token: slackOptions[teamDomain].token,
    trigger_id: triggerId,
    user: userId,
  }
  let uri
  if (!Object.keys(lunchData).length) {
    data.text = ':exclamation: You don\'t have enough lunch spots saved to create a poll. You can do so by typing "/lunch add"'
    // uri = webhookUrl
  } else {
    // uri = 'https://slack.com/api/chat.postMessage'
    data.text = 'Thanks!'
    data.blocks = votingBlock(lunchSpot)
  }
  console.log('data: ', data);
  const response = await rp(options({ data, uri: webhookUrl }))
  console.log('response: ', response);
})

/* HANDLE THE INTERACTIVE COMPONENTS */
app.post('/lunch/interactive', async (req, res) => {
  console.log('req.body in addSpot: ', req.body);
  res.sendStatus(200)
  if (req.body.payload) {
    const request = JSON.parse(req.body.payload)
    console.log();
    const { callback_id, type } = request

    if (type === 'dialog_submission') {
      console.log('search or add');
      console.log('callback_id: ', callback_id);
      switch(callback_id) {
        case 'search_spot':
          console.log('search yelp!');
          let {
            submission: {
              lunchSpot,
              location,
            } = {},
          } = request
          try {
            const yelpResults = await searchYelp(lunchSpot, location)
            const {
              results: {
                businesses
              }
            } = yelpResults
            const interactiveMessage = await buildInteractiveMessage(businesses, request)
            console.log('interactiveMessage: ', interactiveMessage);

          } catch(err) {
            console.log('uh oh problem with yelp search: ', err);
          }
          break
        case 'add_spot':
          console.log('its an add spot submission');
          break
        case 'poll_creator':
          console.log('create a poll');
          break
        default:
          console.log('default, do nothing?');
          break
          // const {
          //   actions,
          //   channel: {
          //     id: channelId,
          //   } = {},
          //   response_url: webhookUrl,
          //   team: { domain: teamDomain } = {},
          //   trigger_id: triggerId,
          //   type,
          //   user: {
          //     id: userId,
          //     username,
          //   } = {},
          // } = request
      }
    }
    //
    // const [{ block_id: blockId, text: blockText, value: voteValue }] = actions
    // console.log('blockText: ', blockText);
    // console.log('voteValue: ', voteValue);
    //
    // // Repalace original with user's vote
    // let data = {
    //   bearerToken: process.env.SLACK_TOKEN_VERYS_BOT,
    //   callback_id: 'poll_creator',
    //   channel: channelId,
    //   replace_original: true,
    //   token: slackOptions[teamDomain].token,
    //   trigger_id: triggerId,
    //   user: userId,
    // }
    // TODO IM HERE!!! lunchSpot is not defined
    // data.blocks = votingBlock({ lunchSpot, user: username, vote: voteValue})
    // console.log('data: ', data);
    // const response = await rp(options({ data, uri: webhookUrl }))
    // console.log('response: ', response);
  } else {
    // user adding a spot
    console.log('searching yelp!: ', req.body);
    // const yelpResults = await seachYelp()


    // const {
    //   submission: {
    //     lunchSpot,
    //   } = {},
    //   response_url: responseUrl,
    // } = JSON.parse(req.body.payload)
    // console.log('lunchSpot: ', lunchSpot);
    // MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    //   const db = client.db('lunch')
    //   const collection = db.collection('test') // TODO CHANGE TO DYNAMIC COLLECTION
    //
    //   collection.insertOne({ item: lunchSpot })
    //   .then(data => {
    //     const insertedSpot = data.ops[0]
    //     console.log('data from db: ', insertedSpot);
    //     console.log('responseUrl: ', responseUrl);
    //     res.set({
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
    //       'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    //     })
    //     res.send()
    //     rp(options({ data: { text: 'The restaurant has been added!' }, uri: responseUrl }))
    //   })
    //
    //   client.close()
    // })
  }
})

/* CLEAR THE DATABASE */ // TODO PROTECT THIS!!
app.post('/clear', (req, res) => {
  console.log('body: ', req.body);
  const appId = req.body.appId
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db('lunch')
    const collection = db.collection(appId)

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
