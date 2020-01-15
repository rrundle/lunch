const rp = require('request-promise')
const { options } = require('./helpers')

require('dotenv').config()

const dialog = {
  dialog: {
    callback_id: 'add_spot',
    title: 'Add a new lunch spot',
    submit_label: 'Add',
    elements: [
      {
        type: 'text',
        label: 'Restaurant Name',
        name: 'lunchSpot',
        placeholder: 'e.g. In-N-Out',
      },
    ],
  },
}

const launchAddSpot = async (triggerId) => {
  const data = {
  bearerToken: process.env.SLACK_TOKEN_VERYS,
  ...dialog,
  token: process.env.SLACK_TOKEN_VERYS,
  trigger_id: triggerId,
}
console.log('data: ', data);
try {
  const response = await rp(options({ data, uri: 'https://slack.com/api/dialog.open' }))
  console.log('response: ', response);
  return response
} catch (err) {
  return err
}
}

module.exports = launchAddSpot
