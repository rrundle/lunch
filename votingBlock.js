const { v4: uuidv4 } = require('uuid')

const votingBlock = ({ lunchData, userId, vote: voteValue }) => {
  if (voteValue) {
    // its a vote not the initial block creation
    const existingBlocks = lunchData.message.blocks
    const [action] = lunchData.actions
    const matchingBlockIndex = existingBlocks.findIndex(block => {
      return block.block_id === action.block_id
    })
    if (matchingBlockIndex !== -1) {
      // we found the match for the vote
      /*
       * Theres a lot of mutation here but thats on purpose, we need to change the block in place
       * Slack requires you replace the entire block, you cant edit individual sections
       */
      if (existingBlocks[matchingBlockIndex + 1] && `${existingBlocks[matchingBlockIndex].block_id}1` === existingBlocks[matchingBlockIndex + 1].block_id) {
        // we already have a voting results block
        // check if user already selected this vote, if so, remove their vote, only one per location
        const existingVotes = existingBlocks[matchingBlockIndex + 1].text.text.split(' ')
        if (existingVotes.includes(`<@${userId}>`)) {
          // user already clicked on this, remove their vote or remove the whole section
          // if they are the only voter
          if (existingVotes.length === 1) {
            // user is the only voter, remove the section
            existingBlocks.splice(matchingBlockIndex + 1, 1)
          } else {
            // just remove the voter from the array then re-concatenate
            const index = existingVotes.indexOf(userId)
            existingVotes.splice(index, 1)
            const newVotesText = existingVotes.join(' ')

            existingBlocks[matchingBlockIndex + 1].text.text = newVotesText
            // re-calculate the number of votes
            const allVotes = existingBlocks[matchingBlockIndex + 1].text.text.split(' ')
            const numVotes = allVotes.length
            existingBlocks[matchingBlockIndex + 1].fields[0].text = `_Total Votes: *${numVotes}*_`
          }
        } else {
          // user has not voted yet, just concat them onto the block
          const newText = existingBlocks[matchingBlockIndex + 1].text.text.concat(' ', `<@${userId}>`)
          existingBlocks[matchingBlockIndex + 1].text.text = newText

          const allVotes = existingBlocks[matchingBlockIndex + 1].text.text.split(' ')
          const numVotes = allVotes.length
          existingBlocks[matchingBlockIndex + 1].fields[0].text = `_Total Votes: *${numVotes}*_`
        }
      } else {
        // no match, start a new voting results block
        existingBlocks.splice(matchingBlockIndex + 1, 0, {
          type: 'section',
          block_id: existingBlocks[matchingBlockIndex].block_id.concat('', '1'),
          text: {
            type: 'mrkdwn',
            text: `<@${userId}>`,
          },
          fields: [
            {
              type: 'mrkdwn',
              text: '_Total Votes: *1*_',
            }
          ]
        })
      }
    }
    return existingBlocks
  }
  // this is not a vote, its a request for a new poll
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
