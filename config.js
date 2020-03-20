// Connection URL - local
// const mongoUrl = 'mongodb://localhost:27017'

// Connecttion URL - production
const mongoUrl = `mongodb+srv://slotdp02:${process.env.MONGO_PASSWORD}@cluster0-8cwp7.mongodb.net/test?retryWrites=true`

const YELP_TOKEN = process.env.YELP_TOKEN

const slackOptions = {
  verys: {
    channel: 'C9GE4DFTL',
    token: process.env.SLACK_TOKEN_VERYS,
  }
}

module.exports = {
  mongoUrl,
  slackOptions,
  YELP_TOKEN
}
