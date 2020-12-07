const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const TwitterStrategy = require('passport-twitter').Strategy

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK
    },
    function(token, tokenSecret, profile, cb) {
      User.findOrCreate({twitterId: profile.id}, function(err, user) {
        return cb(err, user)
      })
    }
  )
)

router.get('/', passport.authenticate('twitter'))

app.get(
  '/callback',
  passport.authenticate('twitter', {failureRedirect: '/login'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
  }
)
