const jwt = require('jsonwebtoken')

const generateJWT = () => {
  const today = new Date()
  const expirationDate = new Date(today)
  expirationDate.setDate(today.getDate() + 60)

  let payload = {
    id,
    email,
    username,
    firstName,
    lastName,
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  })
}

module.exports = { generateJWT }
