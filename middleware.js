const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require("passport")
const { validationResult } = require('express-validator')

const generateJwt = require('./jwt')

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

const authenticate = (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) return next(err)

    if (!user) return res.status(401).json({message: "Unauthorized Access - No Token Provided!"})

    req.user = user

    next()

  })(req, res, next)
}

const jwtMiddleware = passport => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      User.findById(jwtPayload.id)
        .then(user => {
            if (user) return done(null, user)
            return done(null, false)
        })
        .catch(err => {
            return done(err, false, {message: 'Server Error'})
        })
    })
  )
}


const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    let error = {}
    errors.array().map((err) => error[err.param] = err.msg)
    return res.status(422).json({ error })
  }

  next()
}

module.exports = {
  authenticate,
  jwtMiddleware,
  validate,
}
