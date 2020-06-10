require('dotenv').config()

// dev
const baseUri = 'http://localhost:2999'

//production
// const baseURi = 'https://63c31503.ngrok.io'

const cookieExpiration = 7

// TODO add { sameSite: 'lax' } as cookie option to prevent CSRF attacks

const config = new Map()

config.set('environment', process.env.REACT_APP_ENV)
config.set('stripeKey', process.env.REACT_APP_STRIPE_API_KEY)
config.set('stripeProductId', process.env.REACT_APP_STRIPE_PRODUCT_ID)

export { baseUri, config, cookieExpiration }
