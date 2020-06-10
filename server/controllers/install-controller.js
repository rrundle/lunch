const qs = require('qs')
const rp = require('request-promise')
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_API_KEY)

const { generateJWT } = require('../jwt')
const { mongoClient } = require('../slack/helpers')

const oauth = async (req, res) => {
  console.log('req.body: ', req.body)
  const { code, state } = req.body
  console.log('code: ', code)
  console.log('state: ', state)
  // For some reason I get an error with v2 on users.idenity (login) calls
  // and an error if I dont use v2 with the signup call
  // TODO check on API updates in case this might break.
  const uri = state.includes('login')
    ? 'https://slack.com/api/oauth.access'
    : 'https://slack.com/api/oauth.v2.access'

  const body = qs.stringify({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
  })
  console.log('body: ', body)

  const options = {
    method: 'POST',
    uri,
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  try {
    const request = await rp(options)
    const response = JSON.parse(request)
    console.log('response from oauth: ', response)
    if (!response.ok) throw new Error(response.error)
    // insert the new client into the database
    const {
      team: { id: teamId } = {},
      user: { email: userEmail = '', id: userSlackId = '' } = {},
    } = response
    if (!teamId) throw new Error('no team Id')
    const collection = await mongoClient(teamId)
    const matches = await collection.findOne()
    console.log('matches: ', matches)
    if (state === 'login.signup') {
      console.log('login.signup')
      // create the user in stripe
      console.log('userEmail: ', userEmail)
      stripe.setApiKey(process.env.REACT_APP_STRIPE_SECRET_KEY)
      const customer = await stripe.customers.create({
        email: userEmail,
        description: `slack UserId: ${userSlackId}`,
      })
      console.log('created user in stripe: ', customer)
      const trialPeriodStart = Date.now()
      // new client, insert
      await collection.insertOne({
        name: 'admin',
        ...response,
        stripeId: customer.id,
        status: 'trial',
        trialPeriodStart,
      })

      // Auth user
      const authedUser = await generateJWT({
        ...response,
        ...matches,
        stripeId: customer.id,
        status: 'trial',
        trialPeriodStart,
      })
      console.log('authedUser: ', authedUser)

      return res.status('200').send({
        message: 'authed new user',
        token: authedUser,
      })
    }

    if (matches._id) {
      console.log('found match!')
      // TODO we shouldnt just return a message
      // should try to auth them, if no cookie log them in with slack creds
      return res.status('200').send({
        message: 'existing user',
        ...response,
      })
    }
    console.log('new customer!')
    // new customer, insert
    await collection.insertOne({
      name: 'newClient',
      ...response,
    })
    return res.status('200').send({
      message: 'user verified add app to slack',
      ...response,
    })
  } catch (err) {
    console.log('err: ', err)
    return res.status('400').send({
      message: err,
    })
  }
}

module.exports = {
  oauth,
}
