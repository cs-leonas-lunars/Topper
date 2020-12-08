const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const crypto = require('crypto')
const {access} = require('fs')
const RedditStrategy = require('passport-reddit').Strategy

module.exports = router

passport.use(
  new RedditStrategy(
    {
      clientID: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      callbackURL: process.env.REDDIT_CALLBACK
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(accessToken, refreshToken, 'TOKENS')
      const redditId = profile.id
      const username = profile.name
      // also could get user image also to make it look all nice -> add imageUrl to models

      User.findOrCreate({
        where: {redditId},
        defaults: {redditHandle: username}
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
    // duration: 'permanent',
  })(req, res, next)
})

router.get('/callback', (req, res, next) => {
  // Check for origin via state token
  if (req.query.state === req.session.state) {
    passport.authenticate('reddit', {
      failureRedirect: '/',
      successRedirect: '/'
    })(req, res, next)
  } else {
    next(new Error(403))
  }
})
