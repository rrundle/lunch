const { v4: uuidv4 } = require('uuid')

const votingBlock = ({ lunchData, userId, vote: voteValue }) => {
  // some logic
  console.log('lunchData in helper: ', lunchData);
  console.log('userId: ', userId);
  console.log('voteValue: ', voteValue);
  if (voteValue) {
    console.log('vote value!!');
    const existingBlocks = lunchData.message.blocks
    const [action] = lunchData.actions
    console.log('action: ', action);
    const matchingBlock = existingBlocks.findIndex(block => {
      console.log('blockid: ', block.block_id);
      console.log('actionid: ', action.block_id);
      return block.block_id === action.block_id
    })
    console.log('matchingBlock index!: ', matchingBlock);
    if (matchingBlock !== -1) {
      // TODO redo need to concat to existing section if one exists otherwise
      // create a new one.
      existingBlocks.splice(matchingBlock + 1, 0, {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `<@${userId}>`
        }
      })
    }
    return existingBlocks
  }
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
      block_id: uuidv4(),
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':one:',
          emoji: true
        },
        value: lunchData.spot1.value
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
      block_id: uuidv4(),
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':two:',
          emoji: true
        },
        value: lunchData.spot2.value
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
      block_id: uuidv4(),
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: ':three:',
          emoji: true
        },
        value: lunchData.spot3.value
      }
    }
  ]
}

module.exports = votingBlock
