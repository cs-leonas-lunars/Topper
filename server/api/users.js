const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

//FIND USERS ROUTE
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

router.put('/update', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const {address, email} = req.body

    await user.update({address, email})
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const { username, address } = req.body
    const user = await User.create(req.body)
    console.log(user, 'NEW USER')
    res.send(user)
  } catch (err) {
    console.error(err)
  }
})
