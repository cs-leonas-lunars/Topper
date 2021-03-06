const router = require('express').Router()
const {User, Transaction} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = router

// to use oauth strategies
// mostly from FS boilermaker
router.use('/reddit', require('./reddit'))
router.use('/google', require('./google'))
router.use('/twitter', require('./twitter'))
router.use('/twitch', require('./twitch'))
router.use('/instagram', require('./instagram'))

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        [Op.or]: [{email: req.body.username}, {username: req.body.username}]
      }
    })
    if (!user) {
      console.log('No such user found:', req.body.username)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.username)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', async (req, res) => {
  user = null // to remove 404 error when '/auth/me' runs each time site is reloaded
  if (req.user) {
    user = await User.findByPk(req.user.id)
    const transactions = await Transaction.findAll({
      where: {
        [Op.or]: [{recipientId: req.user.id}, {senderId: req.user.id}]
      }
    })
    res.json({user, transactions})
  }
  res.json({user})
})
