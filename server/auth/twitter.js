const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const TwitterStrategy = require('passport-twitter').Strategy

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
    function(token, tokenSecret, profile, cb) {
      User.findOrCreate({twitterId: profile.id}, function(err, user) {
        return cb(err, user)
      })
    }
  )
)

//might need to add scope here similar to google auth
router.get('/', passport.authenticate('twitter'))

router.get(
  '/callback',
  passport.authenticate('twitter', {failureRedirect: '/login'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
  }
)
