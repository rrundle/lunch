import React from 'react'

const SlackSignIn = () => (
  <a href="https://slack.com/oauth/v2/authorize?scope=identity.basic,identity.avatar&client_id=224182028598.1018140415783">
    <img
      alt="Sign in with Slack"
      height="40"
      width="172"
      src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
      srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
    />
  </a>
)

export default SlackSignIn
