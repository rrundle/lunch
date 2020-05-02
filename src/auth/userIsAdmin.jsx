import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../components/button'
/* global window */

const UserIsAdmin = ({ accessToken, channelId }) => {
  const [notAdmin, setNotAdmin] = useState(false)

  const yesClick = async (e) => {
    console.log('say hello')
    window.location =
      'https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email&client_id=224182028598.1018140415783&state=login.signup'
  }

  const noClick = () => {
    console.log('no Admin')
    setNotAdmin(true)
  }

  return notAdmin ? (
    <>
      <div>
        Please have someone who will administer the account install the app to
        your workspace
      </div>
    </>
  ) : (
    <>
      <div>UserIsAdmin!!</div>
      <div>Will you be the admin for the account?</div>
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

export default connect(mapStateToProps)(UserIsAdmin)
