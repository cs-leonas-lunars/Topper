const router = require('express').Router()
const {User, Transaction} = require('../db/models')
// const isLoggedIn = require("./middleware/isLoggedIn");
// const isAdminUser = require("./middleware/isAdminUser");
module.exports = router

//GET USER TRANSACTION HISTORY
//is it necessary to send the user id?
router.get('/:id', async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.send(transactions)
  } catch (err) {
    console.error(err)
    next(err) // <-- do we need that
  }
})

//NEW TRANSACTION

router.post('/', async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body)
    res.send(newTransaction)
  } catch (err) {
    console.error(err)
  }
})
