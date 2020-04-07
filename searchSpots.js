const rp = require('request-promise')
const { mongoClient, options } = require('./helpers')

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

const launchSearchSpots = async ({ teamId, triggerId, token }) => {
  const collection = await mongoClient(teamId)
  const data = await collection.findOne()
  console.log('data: ', data);
  const requestData = {
    bearerToken: data.access_token,
    ...dialog,
    token: token,
    trigger_id: triggerId,
  }
  console.log('dialog open data: ', data);
  try {
    const response = await rp(options({ data: requestData, uri: 'https://slack.com/api/dialog.open' }))
    console.log('response from dialog open: ', response);
    return response
  } catch (err) {
    return err
  }
}

module.exports = launchSearchSpots
