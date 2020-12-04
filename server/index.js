const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db')
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 3000
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
// const socketio = require("socket.io");
module.exports = app

dotenv.config()

if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

// if (process.env.NODE_ENV !== 'production') require('../secrets')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const createApp = () => {
  app.use(morgan('dev'))

  app.use(cors({origin: true, credentials: true}))

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.use(compression())

  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'blah blah blah',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/auth', require('./auth'))
  app.use('/api', require('./api'))

  app.use(express.static(path.join(__dirname, '../public')))

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not Found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )

  //   const io = socketio(server);
  //   require("./socket")(io);
}

const syncDb = () => db.sync()

async function bootApp() {
  await sessionStore.sync()
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
