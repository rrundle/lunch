const { v4: uuidv4 } = require('uuid')
const qs = require('qs')
const rp = require('request-promise')

const { mongoClient, triggerSlackPoll } = require('./helpers')
require('dotenv').config()

const votingBlock = async ({ lunchData, vote: voteValue }) => {
  console.log('lunchData in votes: ', lunchData);
  console.log('voteValue: ', voteValue);
  const { team: { id: teamId } = {}, user } = lunchData
  const refreshedData = voteValue === 'newPoll' ? await triggerSlackPoll(teamId, '') : lunchData
  if (voteValue && voteValue !== 'newPoll') {
    // its a vote not the initial block creation
    const existingBlocks = lunchData.message.blocks
    const [action] = lunchData.actions
    const matchingBlockIndex = existingBlocks.findIndex(block => {
      return block.block_id === action.block_id
    })
    if (matchingBlockIndex !== -1) {
      // we found the match for the vote
      //
      // Check if this is the first vote, if so, remove the ability to refresh
      // the poll (make a new one in place)
      const firstVote = existingBlocks.find(block => {
        return (((block || {}).elements || [])[0] || {}).value === 'newPoll'
      })
      if (firstVote) existingBlocks.pop()
      /*
       * Theres a lot of mutation here but thats on purpose, we need to change the block in place
       * Slack requires you replace the entire block, you cant edit individual sections
       */
      // Check if we already have a voting results block for this spot
      if (existingBlocks[matchingBlockIndex + 1] && `${existingBlocks[matchingBlockIndex].block_id}1` === existingBlocks[matchingBlockIndex + 1].block_id) {
        // we already have a voting results block
        // check if user already selected this vote, if so, remove their vote, only one per location
        const votesSection = existingBlocks[matchingBlockIndex + 1].elements
        const existingVotes = existingBlocks[matchingBlockIndex + 1].elements.find(element => element.alt_text.includes(user.name))
        if (existingVotes) {
          // user already clicked on this, remove their vote or remove the whole section
          // if they are the only voter
          if (Object.keys(existingVotes).length) {
            // user is the only voter, remove the section
            existingBlocks.splice(matchingBlockIndex + 1, 1)
          } else {
            // just remove the voter from the array
            const index = votesSection.findIndex(vote => vote.alt_text === user.name)
            if (index > -1) {
              votesSection.splice(index, 1)
            }

            existingBlocks[matchingBlockIndex + 1].elements = votesSection
            // re-calculate the number of votes
            const numVotes = votesSection.length - 1
            existingBlocks[matchingBlockIndex + 1].elements[numVotes].text = `_Total Votes: *${numVotes}*_`
          }
        } else {
          // user has not voted yet, add new markdown to the context section
          const collection = await mongoClient(teamId)
          const data = await collection.find().toArray()
          const client = data.find(element => element.name === 'newClient')

          const body = qs.stringify({
            token: client.access_token,
            user: user.id,
          })

          const options = {
            method: 'GET',
            uri: `https://slack.com/api/users.info?${body}`,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
          const request = await rp(options)
          const profile = JSON.parse(request)
          const {
            name: userName,
            profile: {
              image_24: userAvatar,
            } = {},
          } = profile.user


          existingBlocks[matchingBlockIndex + 1].elements.unshift({
            type: 'image',
            image_url: userAvatar,
            alt_text: userName,
          })
          const numVotes = existingBlocks[matchingBlockIndex + 1].elements.length - 1
          existingBlocks[matchingBlockIndex + 1].elements[numVotes].text = `_Total Votes: *${numVotes}*_`
        }
      } else {
        console.log('STARTING A NEW VOTING BLOCK');
        // no match, start a new voting results block
        // user has not voted yet, add new markdown to the context section
        const collection = await mongoClient(teamId)
        const data = await collection.find().toArray()
        const client = data.find(element => element.name === 'newClient')

        const body = qs.stringify({
          token: client.access_token,
          user: user.id,
        })

        const options = {
          method: 'GET',
          uri: `https://slack.com/api/users.info?${body}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
        const request = await rp(options)
        const profile = JSON.parse(request)
        const {
          name: userName,
          profile: {
            image_24: userAvatar,
          } = {},
        } = profile.user
        existingBlocks.splice(matchingBlockIndex + 1, 0, {
          type: 'context',
          block_id: existingBlocks[matchingBlockIndex].block_id.concat('', '1'),
          elements: [
            {
              type: 'image',
              image_url: userAvatar,
              alt_text: userName,
            },
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
        text: `1. ${refreshedData.spot1.name} - ${refreshedData.spot1.url}`
      },
      block_id: uuidv4(),
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Vote',
          emoji: true
        },
        value: refreshedData.spot1.value
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `2. ${refreshedData.spot2.name} - ${refreshedData.spot2.url}`
      },
      block_id: uuidv4(),
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Vote',
          emoji: true
        },
        value: refreshedData.spot2.value
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `3. ${refreshedData.spot3.name} - ${refreshedData.spot3.url}`
      },
      block_id: uuidv4(),
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Vote',
          emoji: true
        },
        value: refreshedData.spot3.value
      }
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'New Set of Lunch Spots',
          },
          action_id: 'fresh_poll',
          value: 'newPoll',
        }
      ]
    }
  ]
}

module.exports = votingBlock
