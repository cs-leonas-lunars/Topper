const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const TwitterStrategy = require('passport-twitter').Strategy

module.exports = router
let userId = null

// twitter passport strategy
// http://www.passportjs.org/packages/passport-twitter/
if (!process.env.TWITTER_CONSUMER_KEY || !process.env.TWITTER_CONSUMER_SECRET) {
  console.log('Twitter client ID / secret not found. Skipping Twitter OAuth.')
} else {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: process.env.TWITTER_CALLBACK
      },
      async function(accessToken, refreshToken, profile, done) {
        const username = profile.username
        let user = await User.findByPk(userId)
        await user.update({twitter: username})
        done(null, user)
      }
    )
  )

  //might need to add scope here similar to google auth
  router.get('/', passport.authenticate('twitter'))

  router.get('/callback', async (req, res, next) => {
    userId = req.user.id

    await passport.authenticate('twitter', {
      failureRedirect: '/',
      successRedirect: '/'
    })(req, res, next)
  })
}
