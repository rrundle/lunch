const votingBlock = ({ lunchData, user: username, vote: voteValue }) => {
  // some logic
  console.log('lunchData in helper: ', lunchData);
  console.log('username: ', username);
  console.log('voteValue: ', voteValue);
  return [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'What would you like for lunch today?'
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `1. ${lunchData.spot1.name}`
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':one:',
          emoji: true
        },
        value: 'one'
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `2. ${lunchData.spot2.name}`
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':two:',
          emoji: true
        },
        value: 'two'
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `3. ${lunchData.spot3.name}`
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':three:',
          emoji: true
        },
        value: 'three'
      }
    }
  ]
}

module.exports = votingBlock
