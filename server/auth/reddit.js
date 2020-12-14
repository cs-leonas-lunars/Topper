const passport = require('passport')
const router = require('express').Router()
const crypto = require('crypto')
const RedditStrategy = require('passport-reddit').Strategy
const {User} = require('../db/models')

module.exports = router

let userId = null
// reddit strategy
// http://www.passportjs.org/packages/passport-reddit/
// https://github.com/Slotos/passport-reddit/blob/master/examples/login/app.js

if (!process.env.REDDIT_CLIENT_ID || !process.env.REDDIT_CLIENT_SECRET) {
  console.log('Reddit client ID / secret not found. Skipping Reddit OAuth.')
} else {
  passport.use(
    new RedditStrategy(
      {
        clientID: process.env.REDDIT_CLIENT_ID,
        clientSecret: process.env.REDDIT_CLIENT_SECRET,
        callbackURL: process.env.REDDIT_CALLBACK
      },
      async function(accessToken, refreshToken, profile, done) {
        const username = profile.name
        let user = await User.findByPk(userId)
        await user.update({reddit: username})
        done(null, user)
      }
    )
  )

  // crypto package generates hex to send to reddit for verification
  // its a reddit-specific requirement in terms of oauth strategies
  router.get('/', (req, res, next) => {
    req.session.state = crypto.randomBytes(32).toString('hex')
    passport.authenticate('reddit', {
      state: req.session.state
    })(req, res, next)
  })

  router.get('/callback', async (req, res, next) => {
    userId = req.user.id
    if (req.query.state === req.session.state) {
      await passport.authenticate('reddit', {
        failureRedirect: '/',
        successRedirect: '/'
      })(req, res, next)
    } else {
      next(new Error(403))
    }
  })
}
