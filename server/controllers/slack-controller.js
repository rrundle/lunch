const rp = require('request-promise')

const { mongoClient, options, triggerSlackPoll } = require('../slack/helpers')
const launchSearchSpots = require('../slack/searchSpots')
const searchYelp = require('../slack/searchYelp')
const votingBlock = require('../slack/votingBlock')
const buildInteractiveMessage = require('../slack/buildInteractiveMessage')
const buildHelpBlock = require('../slack/buildHelpBlock')

const slackLunchCommand = async (req, res) => {
  const {
    channel_id: channelId,
    response_url: webhookUrl,
    team_id: teamId,
    text = '',
    token,
    trigger_id: triggerId,
    user_id: userId,
  } = req.body

  if (text === 'add') {
    res.sendStatus(200)
    return launchSearchSpots({ teamId, triggerId, token })
  }

  if (text === 'help') {
    res.sendStatus(200)
    return buildHelpBlock(req.body)
  }

  res.status(200).json({
    response_type: 'ephemeral',
    text: 'Thanks! Hang tight...',
  })

  const lunchData = await triggerSlackPoll(teamId, text)
  let data = {
    bearerToken: process.env.SLACK_TOKEN,
    callback_id: 'poll_creator',
    channel: channelId,
    response_type: 'in_channel',
    token,
    trigger_id: triggerId,
    user: userId,
  }

  if (!Object.keys(lunchData).length) {
    data.text =
      ':exclamation: You don\'t have enough lunch spots saved to create a poll. You can do so by typing "/lunch add"'
  } else {
    data.text = 'Thanks!'
    data.blocks = await votingBlock({ lunchData, user: null, vote: null })
  }
  try {
    rp(options({ data, uri: webhookUrl }))
  } catch (err) {
    console.error('error from creating poll: ', err)
  }
}

const slackInteractiveCommand = async (req, res) => {
  if (req.body.payload) {
    const request = JSON.parse(req.body.payload)
    const { callback_id, type } = request

    if (type === 'dialog_submission') {
      if (callback_id === 'search_spot') {
        res.status(204).json({
          body: '',
          isBase64Encoded: true,
        })
        try {
          const { submission: { lunchSpot, location } = {} } = request
          const yelpResults = await searchYelp(lunchSpot, location)
          const {
            results: { businesses },
          } = yelpResults
          await buildInteractiveMessage(businesses, request)
        } catch (err) {
          console.error('uh oh problem with yelp search: ', err)
        }
      }
    }
    if (type === 'block_actions') {
      res.sendStatus(200)
      const [submission] = request.actions
      const { team: { id: teamId } = {} } = request
      // check if its a spot addition request
      if (submission.text.text === 'Choose') {
        // spot addition request
        const selectedSpot = JSON.parse(submission.value)
        const collection = await mongoClient(teamId)
        // insert in the database if it doesn't already exist
        const data = await collection.updateOne(
          selectedSpot,
          { $set: selectedSpot },
          { upsert: true },
        )
        // send back message saying successful, failure, or already added
        const options = {
          method: 'POST',
          uri: request.response_url,
          body: JSON.stringify({
            channel: request.channel.id,
            token: request.token,
            user: request.user.id,
            type: 'section',
            text: data.upsertedCount
              ? `:tada: ${selectedSpot.name} has been added to the list!`
              : ':dancer: Great minds think alike! This spot has already been added. Try another place.',
          }),
          headers: {
            Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
        try {
          await rp(options)
        } catch (err) {
          console.error('err: ', err)
        }
      } else {
        // its a vote or new poll request
        const { value: voteValue } = submission
        const vote = voteValue === 'newPoll' ? 'newPoll' : JSON.parse(voteValue)

        try {
          let data = {
            bearerToken: process.env.SLACK_TOKEN,
            callback_id: 'poll_creator',
            channel: request.channel.id,
            replace_original: true,
            token: request.token,
            trigger_id: request.trigger_id,
          }

          data.blocks = await votingBlock({
            lunchData: request,
            user: req.body,
            vote,
          })

          await rp(options({ data, uri: request.response_url }))
        } catch (err) {
          console.error('err: ', err)
        }
      }
    }
  }
}

module.exports = {
  slackLunchCommand,
  slackInteractiveCommand,
}
