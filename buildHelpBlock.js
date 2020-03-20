const rp = require('request-promise')

const buildHelpBlock = (body) => {
  return new Promise(async (resolve, reject) => {
    console.log('body: ', body);
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

    const options = {
      method: 'POST',
      uri: 'https://slack.com/api/chat.postEphemeral',
      body: JSON.stringify({
        channel: body.channel_id,
        token: body.token,
        user: body.user_id,
        ...message,
      }),
      headers: {
        Authorization: `Bearer ${process.env.SLACK_TOKEN_VERYS}`,
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await rp(options)
      console.log('response: ', response);
      resolve(response)
    } catch (err) {
      console.log('err ', err);
      reject(err)
    }
  })
}

module.exports = buildHelpBlock
