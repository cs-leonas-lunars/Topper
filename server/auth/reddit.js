const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const crypto = require('crypto')
const RedditStrategy = require('passport-reddit').Strategy

module.exports = router
/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

// if (!process.env.REDDIT_CLIENT_ID || !process.env.REDDIT_CLIENT_SECRET) {
//   console.log('Reddit client ID / secret not found')
// } else {

// function logThis() {
//   console.log('WE SHOULD SEE THIS')
// }

passport.use(
  new RedditStrategy(
    {
      clientID: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/reddit/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      // logThis()
      console.log('PROFILE INFO ', profile)
      const redditId = profile.id
      // const email = profile.emails[0].value
      const username = profile.name
      // also could get user image also to make it look all nice -> add imageUrl to models

      User.findOrCreate({
        where: {redditId},
        defaults: {username}
      })

        .then(([user]) => done(null, user))
        .catch(done)
    }
    // const [user] = await User.findOrCreate({
    //   where: {redditId},
    //   defaults: {email, username},
    // })
    // console.log(user, 'USER')
    // process.nextTick(function () {
    // To keep the example simple, the user's Reddit profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Reddit account with a user record in your database,
    // and return that user instead.
    //   return done(null, profile)
    // })
    // function (accessToken, refreshToken, profile, done) {
    //   User.findOrCreate({redditId: profile.id}, function (err, user) {
    //     return done(err, user)
    //   })
    // }
  )
)

router.get('/', (req, res, next) => {
  req.session.state = crypto.randomBytes(32).toString('hex')
  console.log('got hereeeeere on state', req.session.state)
  passport.authenticate('reddit', {
    state: req.session.state
  })(req, res, next)
})

router.get('/callback', (req, res, next) => {
  // Check for origin via state token
  console.log('calll got heeeeere')
  if (req.query.state === req.session.state) {
    console.log('got inside the comparison')
    passport.authenticate('reddit', {
      failureRedirect: '/login',
      successRedirect: '/'
    })(req, res, next)
  } else {
    next(new Error(403))
  }
})

// router.get('/', passport.authenticate('reddit', {state: req.session.state}))

// router.get(
//   '/callback',
//   passport.authenticate('reddit', {
//     successRedirect: '/home',
//     failureRedirect: '/login',
//   })
// )
// }
