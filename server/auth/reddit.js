const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const crypto = require('crypto')
var CryptoJS = require('crypto-js')
const axios = require('axios')
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
      const redditId = profile.id
      const username = profile.name
      //var cryptic = crypto.createCipher('aes-128-cbc', 'g3tth3n4m3')
      //var userCode = cryptic.update(username, 'utf8', 'hex')
      //userCode += cryptic.final('hex')
      //console.log('USER CODE: ', userCode)
      //console.log('TYPE OF ', typeof userCode)
      //usernames['reddit'] = userCode

      // usernames.reddit = await username
      async function addToArr() {
        usernames.reddit = username
      }
      // also could get user image also to make it look all nice -> add imageUrl to models

      // User.findOrCreate({
      //   where: {redditId},
      //   defaults: {redditHandle: username},
      // })
      // .then(([user]) => done(null, user))
      // .catch(done)

      /*
      const user = await axios.put('/api/users/update/reddit', {
        redditHandle: username
      })
      */

      /*
      const user = await axios.get('/api/users/singleUser', {
        redditHandle: username,
      })
      console.log(user)
      */
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
  var ciphertext = CryptoJS.AES.encrypt(username, 'g3tth3n4m3').toString()
  console.log(ciphertext)
  // Check for origin via state token
  if (req.query.state === req.session.state) {
    await passport.authenticate('reddit', {
      failureRedirect: `/updateRedditUsername?${ciphertext}`,
      successRedirect: '/updateRedditUsername'
    })(req, res, next)
  } else {
    next(new Error(403))
  }
})
