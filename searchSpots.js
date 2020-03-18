const rp = require('request-promise')
const { options } = require('./helpers')

require('dotenv').config()

const dialog = {
  dialog: {
    callback_id: 'search_spot',
    title: 'Search for a lunch spot',
    submit_label: 'Find',
    elements: [
      {
        type: 'text',
        label: 'Restaurant Name',
        name: 'lunchSpot',
        placeholder: 'e.g. In-N-Out',
      },
      {
        type: 'text',
        label: 'Location',
        name: 'location',
        placeholder: 'e.g. Los Angeles, CA',
      },
    ],
  },
}

const launchSearchSpots = async (triggerId) => {
  const data = {
  bearerToken: process.env.SLACK_TOKEN_VERYS,
  ...dialog,
  token: process.env.SLACK_TOKEN_VERYS,
  trigger_id: triggerId,
}
try {
  const response = await rp(options({ data, uri: 'https://slack.com/api/dialog.open' }))
  return response
} catch (err) {
  return err
}
}

module.exports = launchSearchSpots
