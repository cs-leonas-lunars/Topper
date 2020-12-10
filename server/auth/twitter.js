const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const TwitterStrategy = require('passport-twitter').Strategy
const CryptoJS = require('crypto-js')
const usernames = require('./usernames')

module.exports = router

// twitter passport strategy
// http://www.passportjs.org/packages/passport-twitter/

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK
    },
    async function(accessToken, refreshToken, profile, done) {
      const username = profile.username
      async function addToArr() {
        usernames.twitter = username
      }
      await addToArr()
      done()
    }
  )
)

//might need to add scope here similar to google auth
router.get('/', passport.authenticate('twitter'))

router.get('/callback', async (req, res, next) => {
  let username = usernames.twitter
  let ciphertext = CryptoJS.AES.encrypt(username, 'g3tth3n4m3').toString()

  await passport.authenticate('twitter', {
    failureRedirect: `/updateSocialUsername?twitter?${ciphertext}`,
    successRedirect: '/updateSocialUsername'
  })(req, res, next)
})
