const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

//FIND USERS ROUTE
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/update', async (req, res, next) => {
  try {
    console.log(req.user.id, 'USER ID')
    console.log(req.body, 'REQ.BODY')
    const user = await User.findByPk(req.user.id)
    console.log(user, 'DB USER')
    await user.update({address: req.body.address, email: req.body.email})

    res.sendStatus(200)
  } catch (err) {
    console.error(err)
  }
})
