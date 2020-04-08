const rp = require('request-promise')
const { mongoClient } = require('./helpers')

const buildHelpBlock = (body) => {
  return new Promise(async (resolve, reject) => {
    const message = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'Here are some helpful commands:',
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '_*/lunch*_  Creates a random poll of lunches to be voted on',
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '_*/lunch <type>*_  Creates a random poll with that type of food as a priority',
          }
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: 'i.e. _*/lunch noodles*_'
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '_*/lunch add*_  Launches a dialog to search for a new lunch spot',
          }
        },
      ]
    }

    const collection = await mongoClient(body.team_id)
    const user = await collection.findOne()

    const options = {
      method: 'POST',
      uri: user.incoming_webhook.url, // 'https://slack.com/api/chat.postEphemeral',
      body: JSON.stringify({
        channel: user.incoming_webhook.channel_id,
        token: body.token,
        user: body.user_id,
        ...message,
      }),
      headers: {
        Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await rp(options)
      resolve(response)
    } catch (err) {
      console.error('err ', err);
      reject(err)
    }
  })
}

module.exports = buildHelpBlock
