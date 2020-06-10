const jwtDecode = require('jwt-decode')
const rp = require('request-promise')
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_API_KEY)

const { mongoClient } = require('../slack/helpers')
const { refreshJwt, verifyJwt } = require('../jwt')
const { daysLeftInTrial } = require('../helpers/trial-calculations')

const checkAuth = async (req, res) => {
  const body = req.body
  console.log('body: ', body)
  const { authToken } = body
  const jwtStatus = verifyJwt(authToken)
  if (!jwtStatus.valid) {
    return res.send('401').send({
      authed: false,
      message: 'invalid jwt',
    })
  }
  const refreshedJwt = refreshJwt(jwtStatus)
  console.log('refreshedJwt: ', refreshedJwt)
  res.status('200').send({
    authed: true,
    token: refreshedJwt,
  })
}

const createSubscription = async (req, res) => {
  console.log('req.body: ', req.body)
  const {
    customerId = '',
    paymentMethodId = '',
    priceId = '',
    status = '',
    teamId = '',
    trialPeriodStart = null,
  } = req.body
  if (status !== 'trial')
    throw new Error("not on trial, can't create subscription")
  try {
    // Attach the payment method to the customer
    const paymentMethod = await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    })
    console.log('paymentMethod: ', paymentMethod)

    // Change the default invoice settings on the customer to the new payment method
    const paymentSettings = await stripe.customers.update(customerId, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    })
    console.log('paymentSettings: ', paymentSettings)

    // Create the subscription
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      expand: ['latest_invoice.payment_intent'],
      trial_period_days: daysLeftInTrial(trialPeriodStart),
    })
    console.log('subscription: ', subscription)

    // Save the subscription info in the db
    const collection = await mongoClient(teamId)
    await collection.insertOne({
      name: 'subscription',
      ...subscription,
    })

    res.status('200').send(subscription)
  } catch (err) {
    return res.status('402').send({ error: { message: err.message } })
  }
}

const getCompany = async (req, res) => {
  const { code = '' } = req.body
  const decodedJwt = jwtDecode(code)
  console.log('decodedJwt: ', decodedJwt)
  const { teamId = '' } = decodedJwt
  const collection = await mongoClient(teamId)
  collection.find({}).toArray((err, result) => {
    console.log('err: ', err)
    console.log('result: ', result)
    const companyInfo = result.find((company) => company.name === 'newClient')
    console.log('companyInfo: ', companyInfo)
    res.status(200).send(companyInfo)
  })
}

const welcome = async (req, res) => {
  const body = req.body
  console.log('body: ', body)
  const { accessToken, channelId } = body

  const data = {
    channel: channelId,
    text: 'Welcome to Lunch Poll, use `/lunch help` for a list of commands',
  }
  console.log('data: ', data)

  try {
    const options = {
      method: 'POST',
      uri: 'https://slack.com/api/conversations.invite',
      data: JSON.stringify({
        channel: channelId,
        users: ['U011JHBBC7N'],
      }),
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${accessToken}`,
        Authorization: `Bearer xoxp-1042039161298-1042039161666-1112595634929-7375ba3880a3db3698dda6a465fbd9e8`,
      },
    }
    console.log('options: ', options)
    const request = await rp(options)
    console.log('request to add user: ', request)
    const response = JSON.parse(request)
    console.log('resposne: ', response)
  } catch (err) {
    console.log('err: ', err)
  }

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
}

module.exports = {
  checkAuth,
  createSubscription,
  getCompany,
  welcome,
}
