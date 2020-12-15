const router = require('express').Router()
const {Transaction} = require('../db/models')
module.exports = router

// NEW TRANSACTION
router.post('/', async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body)
    res.send(newTransaction)
  } catch (err) {
    console.error(err)
  }
})
