const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const crypto = require('crypto')
const RedditStrategy = require('passport-reddit').Strategy

module.exports = router
/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

if (!process.env.REDDIT_CLIENT_ID || !process.env.REDDIT_CLIENT_SECRET) {
  console.log('Reddit client ID / secret not found')
} else {
  passport.use(
    new RedditStrategy(
      {
        clientID: process.env.REDDIT_CLIENT_ID,
        clientSecret: process.env.REDDIT_CLIENT_SECRET,
        callbackURL: '/auth/reddit/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        const redditId = profile.id
        const email = profile.emails[0].value
        const username = profile.username
        // also could get user image also to make it look all nice -> add imageUrl to models

        User.findOrCreate({
          where: {redditId},
          defaults: {email, username}
        })
          .then(([user]) => done(null, user))
          .catch(done)
      }
    )
  )

  router.get('/', (req, res, next) => {
    console.log('SHOULD BE SEEING THIS')
    req.session.state = crypto.randomBytes(32).toString('hex')
    passport.authenticate('reddit', {
      state: req.session.state
    })(req, res, next)
  })

  router.get(
    ('/callback',
    (req, res, next) => {
      // Check for origin via state token
      if (req.query.state === req.session.state) {
        passport.authenticate('reddit', {
          failureRedirect: '/login',
          successRedirect: '/'
        })
      } else {
        next(new Error(403))
      }
    })
  )
}
