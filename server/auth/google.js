const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../db/models')
const CryptoJS = require('crypto-js')
const usernames = require('./usernames')

module.exports = router

// from FS boilermaker

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }

  const strategy = new GoogleStrategy(
    googleConfig,
    async (token, refreshToken, profile, done) => {
      const username = profile.emails[0].value

      async function addToArr() {
        usernames.google = username
      }
      await addToArr()
      done()
    }
  )

  passport.use(strategy)

  router.get(
    '/',
    passport.authenticate('google', {scope: ['email', 'profile']})
  )

  router.get('/callback', async (req, res, next) => {
    let username = usernames.google
    let ciphertext = CryptoJS.AES.encrypt(username, 'g3tth3n4m3').toString()

    await passport.authenticate('google', {
      failureRedirect: `/updateSocialUsername?google?${ciphertext}`,
      successRedirect: '/updateSocialUsername'
    })(req, res, next)
  })
}
