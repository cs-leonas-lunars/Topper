const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const crypto = require('crypto')
const RedditStrategy = require('passport-reddit').Strategy

module.exports = router

// reddit strategy
// http://www.passportjs.org/packages/passport-reddit/
// https://github.com/Slotos/passport-reddit/blob/master/examples/login/app.js

passport.use(
  new RedditStrategy(
    {
      clientID: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      callbackURL: process.env.REDDIT_CALLBACK
    },
    async function(accessToken, refreshToken, profile, done) {
      const redditId = profile.id
      const username = profile.name
      // also could get user image also to make it look all nice -> add imageUrl to models

      // User.findOrCreate({
      //   where: {redditId},
      //   defaults: {redditHandle: username},
      // })
      global.localStorage.setItem('username', username)
      done(null)

      // await axios.put('/api/users/update/reddit', {
      //   redditHandle: username,
      // })
      // console.log('USER AFTER AXIOS')
      // .then(([user]) => done(null, user))
      // .catch(done)
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

router.get('/callback', (req, res, next) => {
  // Check for origin via state token
  if (req.query.state === req.session.state) {
    passport.authenticate('reddit', {
      failureRedirect: '/',
      successRedirect: '/updateReddit'
    })(req, res, next)
  } else {
    next(new Error(403))
  }
})
