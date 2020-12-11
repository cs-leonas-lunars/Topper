const InstagramStrategy = require('passport-instagram').Strategy
const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')

let userId = null
module.exports = router

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      callbackURL: process.env.INSTAGRAM_CALLBACK
    },
    async function(accessToken, refreshToken, profile, done) {
      console.log(profile, 'profile')
      done(null)
    }
  )
)

router.get('/', passport.authenticate('instagram'))

router.get('/callback', async (req, res, next) => {
  userId = req.user.id

  await passport.authenticate('instagram', {
    failureRedirect: '/',
    successRedirect: '/'
  })(req, res, next)
})
