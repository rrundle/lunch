const rp = require('request-promise')
const { tiny } = require('tiny-shortener')

const createMessage = async (sectionData) => {
  const messageArray = [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'Which spot would you like to add?',
      }
    },
    {
      type: 'divider'
    }
  ]
  const loopLength = sectionData.length < 5 ? sectionData.length : 5
  for (let i = 0; i < loopLength; i++) {
    const {
      location: {
        address1,
        city,
        state,
        zip_code
      },
      name,
      url,
    } = sectionData[i]
    const tinyUrl = await tiny(url)
    messageArray.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `${name}, ${address1}, ${city}, ${state} ${zip_code} - ${tinyUrl}`,
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Choose',
        },
        value: JSON.stringify(sectionData[i])
      }
    })
    if (i !== loopLength - 1) {
      messageArray.push({
        type: 'divider'
      })
    }
  }
  return messageArray
}

const interactiveMessageData = async (lunchData, request) => {
  const data = await createMessage(lunchData)
  return {
    channel: request.channel.id,
    blocks: data,
  }
}


const buildInteractiveMessage = (body, request) => {
  return new Promise(async (resolve, reject) => {

    const message = await interactiveMessageData(body, request)

    const options = {
      method: 'POST',
      uri: 'https://slack.com/api/chat.postEphemeral',
      body: JSON.stringify({
        channel: request.channel.id,
        token: request.token,
        user: request.user.id,
        ...message,
      }),
      headers: {
        Authorization: `Bearer ${process.env.SLACK_TOKEN_VERYS}`,
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await rp(options)
      resolve(response)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = buildInteractiveMessage
