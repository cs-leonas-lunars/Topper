const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

// FIND USERS ROUTE
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// for extension auth functionality
router.get('/:username', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.params.username
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// was initially for for user to manually update db with their address and email
// no longer necessary
router.put('/update', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const {address} = req.body

    await user.update({address})
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
  }
})

// create user route
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    console.log(user, 'NEW USER')
    res.send(user)
  } catch (err) {
    console.error(err)
  }
})
