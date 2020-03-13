const rp = require('request-promise')
const { tiny } = require('tiny-shortener')

const interactiveMessageData = async lunchData => {
  console.log('lunchData: ', lunchData);
  const {
    location: {
      address1,
      city,
      state,
      zip_code
    },
    name,
    url,
  } = lunchData
  console.log('tiny: ', tiny);
  console.log('url: ', url);
  const tinyUrl = await tiny(url)
  console.log('tinyUrl: ', tinyUrl);
  return {
    ok: true,
    text: 'Add this lunch spot?',
    attachments: [
      {
        callback_id: 'add_spot',
        text: `${name}, ${address1}, ${city}, ${state} ${zip_code} - ${tinyUrl}`,
        actions: [
          {
            type: 'button',
            text: 'Yep',
            name: 'yes',
            value: 'yesAdd',
          },
          {
            type: 'button',
            text: 'No not this one',
            name: 'no',
            value: 'noAdd',
          },
        ],
      },
    ],
  }
}


const buildInteractiveMessage = async (body, request) => {
  console.log('body in interactive builder: ', body);
  const [firstResult] = body
  const message = await interactiveMessageData(firstResult)
  console.log('message: ', message);
  console.log('request in build: ', request);

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
  console.log('options: ', options);
  try {
    const response = await rp(options)
    console.log('response: ', response);
    return response
  } catch (err) {
    return err
  }
}

module.exports = buildInteractiveMessage
