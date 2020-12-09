const router = require('express').Router()
const {Transaction} = require('../db/models')
module.exports = router

// GET USER TRANSACTION HISTORY
// is it necessary to send the user id?
// router.get('/', async (req, res, next) => {
//   try {
//     const transactions = await Transaction.findAll({
//       where: {
//         userId: req.user.id,
//       },
//     })
//     res.send(transactions)
//   } catch (err) {
//     console.error(err)
//     next(err) // <-- do we need that
//   }
// })

// NEW TRANSACTION
router.post('/', async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body)
    res.send(newTransaction)
  } catch (err) {
    console.error(err)
  }
})
