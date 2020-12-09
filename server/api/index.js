const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/transactions', require('./transactions'))

// error that is thrown if route is undefined
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
