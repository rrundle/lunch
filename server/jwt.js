const jwt = require('jsonwebtoken')

const generateJWT = (userData) => {
  console.log('userData: ', userData)
  const today = new Date()
  const expirationDate = new Date(today)
  expirationDate.setDate(today.getDate() + 60)

  const {
    access_token: accessToken,
    user: {
      email,
      id: uid,
      name,
      image_72: avatarSmall,
      image_512: avatarLarge,
    } = {},
    stripeId,
    team: { id: teamId } = {},
    trial,
    trialPeriodStart,
  } = userData

  let payload = {
    accessToken,
    avatarLarge,
    avatarSmall,
    email,
    isAdmin: true,
    name,
    stripeId,
    teamId,
    trial,
    trialPeriodStart,
    uid,
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  })
}

const refreshJwt = (jwtStatus) => {
  console.log('jwtSTatus: ', jwtStatus)
  // TODO we should be getting updated data from the database
  // instead of just refreshing the data from the cookie
  const today = new Date()
  const expirationDate = new Date(today)
  expirationDate.setDate(today.getDate() + 60)

  const {
    decoded: {
      avatarLarge,
      avatarSmall,
      email,
      isAdmin,
      name,
      teamId,
      uid,
    } = {},
  } = jwtStatus

  let payload = {
    avatarLarge,
    avatarSmall,
    email,
    isAdmin,
    name,
    teamId,
    uid,
  }

  console.log('payload: ', payload)

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  })
}

const verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log('err: ', err)
    if (err) return { valid: false, decoded: null }
    console.log('decoded: ', decoded)
    return { valid: true, decoded }
  })
}

module.exports = { generateJWT, refreshJwt, verifyJwt }
