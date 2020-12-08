const router = require('express').Router()
module.exports = router

router.use(function(req, res, next) {
  if (req.secure) {
    // request was via https, so do no special handling
    next()
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url)
  }
})
router.use('/users', require('./users'))
router.use('/transactions', require('./transactions'))

// error that is thrown if route is undefined
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
