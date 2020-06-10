const express = require('express')
const path = require('path')
const cors = require('cors')
const favicon = require('express-favicon')
const bodyParser = require('body-parser')

const { mongoClient } = require('./server/slack/helpers')
const {
  slackLunchCommand,
  slackInteractiveCommand,
} = require('./server/controllers/slack-controller')
const {
  checkAuth,
  createSubscription,
  getCompany,
  welcome,
} = require('./server/controllers/web-controller')
const { oauth } = require('./server/controllers/install-controller')

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

/* TODO Uncomment when ready to run build version with app on same baseUri */
// Production dev
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

/* ROUTES */

/* HANDLE SLASH COMMANDS */
app.post('/lunch', slackLunchCommand)

/* HANDLE THE INTERACTIVE COMPONENTS */
app.post('/lunch/interactive', slackInteractiveCommand)

/* Oauth endpoint for new users */
app.post('/oauth', oauth)

/* Check user's auth status and refresh if valid jwt */
app.put('/check-auth', checkAuth)

/* Get company that was added on signup */
app.post('/company/get', getCompany)

/* Send welcome message when user isntalls the app */
app.put('/welcome', welcome)

/* Create subscription for paying client */
app.post('/payment/create-subscription', createSubscription)

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
    res.status('200').send(user)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
