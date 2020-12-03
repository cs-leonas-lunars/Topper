const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const crypto = require('crypto')
const RedditStrategy = require('passport-reddit').Strategy

module.exports = router

passport.use(
  new RedditStrategy(
    {
      clientID: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/reddit/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      const redditId = profile.id
      // i would like to be able to get the email for sure somehow
      // figure out how to add email and 2FA verification
      const username = profile.name
      // also could get user image also to make it look all nice -> add imageUrl to models

      User.findOrCreate({
        where: {redditId},
        defaults: {username}
      })

        .then(([user]) => done(null, user))
        .catch(done)
    }
  )
)

router.get('/', (req, res, next) => {
  req.session.state = crypto.randomBytes(32).toString('hex')
  passport.authenticate('reddit', {
    state: req.session.state
  })(req, res, next)
})

router.get('/callback', (req, res, next) => {
  // Check for origin via state token
  if (req.query.state === req.session.state) {
    passport.authenticate('reddit', {
      failureRedirect: '/',
      successRedirect: '/signup'
    })(req, res, next)
  } else {
    next(new Error(403))
  }
})
