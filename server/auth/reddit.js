const passport = require('passport')
const router = require('express').Router()
const crypto = require('crypto')
const CryptoJS = require('crypto-js')
const RedditStrategy = require('passport-reddit').Strategy
const usernames = require('./usernames')

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
      const username = profile.name
      async function addToArr() {
        usernames.reddit = username
      }
      await addToArr()
      setTimeout(() => {
        done()
      }, 2000)
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
  let username = usernames.reddit
  let ciphertext = CryptoJS.AES.encrypt(username, 'g3tth3n4m3').toString()
  // Check for origin via state token
  if (req.query.state === req.session.state) {
    await passport.authenticate('reddit', {
      failureRedirect: `/updateSocialUsername?reddit?${ciphertext}`,
      successRedirect: '/updateSocialUsername'
    })(req, res, next)
  } else {
    next(new Error(403))
  }
})
