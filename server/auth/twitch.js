const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy
const request = require('request')

module.exports = router
let userId = null

OAuth2Strategy.prototype.userProfile = function(accessToken, done) {
  var options = {
    url: 'https://api.twitch.tv/helix/users',
    method: 'GET',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: 'Bearer ' + accessToken
    }
  }

  request(options, function(error, response, body) {
    if (response && response.statusCode == 200) {
      done(null, JSON.parse(body))
    } else {
      done(JSON.parse(body))
    }
  })
}

passport.use(
  'twitch',
  new OAuth2Strategy(
    {
      authorizationURL: 'https://id.twitch.tv/oauth2/authorize',
      tokenURL: 'https://id.twitch.tv/oauth2/token',
      clientID: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
      callbackURL: process.env.TWITCH_CALLBACK,
      state: true
    },
    async function(accessToken, refreshToken, profile, done) {
      profile.accessToken = accessToken
      profile.refreshToken = refreshToken
      console.log(profile.data[0].login, 'PROFILE')
      const username = profile.data[0].login
      let user = await User.findByPk(userId)
      await user.update({twitch: username})
      done(null, user)
    }
  )
)

// Set route to start OAuth link, this is where you define scopes to request
router.get(
  '/',
  passport.authenticate('twitch', {scope: 'user_read', forceVerify: true})
)

// Set route for OAuth redirect
router.get('/callback', async (req, res, next) => {
  userId = req.user.id

  await passport.authenticate('twitch', {
    failureRedirect: '/',
    successRedirect: '/'
  })(req, res, next)
})
