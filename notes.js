const responseFromAddToSlack = {
  ok: true,
  app_id: 'A010J44C7P1',
  authed_user: {
    id: 'U0118154RKL',
    scope: 'chat:write,identity.basic,identity.avatar',
    access_token:
      'xoxp-1042039161298-1042039161666-1072057366484-db84d64051aef6ecb79d7af29ce14c28',
    token_type: 'user',
  },
  scope: 'chat:write,commands,incoming-webhook,users:read',
  token_type: 'bot',
  access_token: 'xoxb-1042039161298-1052589386260-hbT3V9Hneh7poNCSG7aLE9cc',
  bot_user_id: 'U011JHBBC7N',
  team: {
    id: 'T0118154R8S',
    name: 'rundleco',
  },
  enterprise: null,
  incoming_webhook: {
    channel: '#rundleco-investments',
    channel_id: 'C011815652N',
    configuration_url: 'https://rundleco.slack.com/services/B012GUJFBDX',
    url:
      'https://hooks.slack.com/services/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',
  },
}

const reponseFromSlackLogin = {
  ok: true,
  access_token:
    'xoxp-1042039161298-1042039161666-1072057366484-db84d64051aef6ecb79d7af29ce14c28',
  scope: 'identify,chat:write,identity.basic,identity.email,identity.avatar',
  user_id: 'U0118154RKL',
  team_id: 'T0118154R8S',
  enterprise_id: null,
  user: {
    name: 'ryan',
    id: 'U0118154RKL',
    email: 'ryan.rundle@icloud.com',
    image_24:
      'https://avatars.slack-edge.com/2020-04-07/1049739007190_5e07851c4666874b5881_24.jpg',
    image_32:
      'https://avatars.slack-edge.com/2020-04-07/1049739007190_5e07851c4666874b5881_32.jpg',
    image_48:
      'https://avatars.slack-edge.com/2020-04-07/1049739007190_5e07851c4666874b5881_48.jpg',
    image_72:
      'https://avatars.slack-edge.com/2020-04-07/1049739007190_5e07851c4666874b5881_72.jpg',
    image_192:
      'https://avatars.slack-edge.com/2020-04-07/1049739007190_5e07851c4666874b5881_192.jpg',
    image_512:
      'https://avatars.slack-edge.com/2020-04-07/1049739007190_5e07851c4666874b5881_512.jpg',
    image_1024:
      'https://avatars.slack-edge.com/2020-04-07/1049739007190_5e07851c4666874b5881_1024.jpg',
  },
  team: {
    id: 'T0118154R8S',
  },
}

module.exports = {
  responseFromAddToSlack,
  reponseFromSlackLogin,
}
