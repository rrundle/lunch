import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/button'
import { baseUri } from '../config'

const Welcome = ({ accessToken, channelId }) => {
  console.log('accessToken: ', accessToken)
  console.log('channelId: ', channelId)
  const yesClick = async (e) => {
    console.log('say hello')
    // TODO WE NEED TO ADD THE APP AS A USER FIRST TO THE CHANNEL

    const options = {
      method: 'PUT',
      body: JSON.stringify({
        accessToken,
        channelId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await fetch(`${baseUri}/welcome`, options)
      console.log('response: ', response)
      if (!response.ok) throw new Error('No slack Auth')
      const body = await response.json()
      console.log('body: ', body)
    } catch (err) {
      console.error(err)
    }
  }

  const noClick = () => {
    console.log('no problem lets move on')
  }

  return (
    <>
      <div>Welcome!!</div>
      <div>Can we say hello to the team</div>
      <Button label="Yes" onClick={() => yesClick()} />
      <Button label="No" onClick={() => noClick()} />
    </>
  )
}

const mapStateToProps = ({
  LunchPollAdmin: {
    user: {
      access_token: accessToken,
      incoming_webhook: { channel_id: channelId } = {},
    } = {},
  } = {},
}) => ({
  accessToken,
  channelId,
})

export default connect(mapStateToProps)(Welcome)
