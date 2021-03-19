const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

let config
if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    operatorsAliases: false,
    dialect: 'postgres',
    protocol: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {
    logging: false,
    operatorsAliases: false
  }
}

const db = new Sequelize(dbUrl, config)

// const db = new Sequelize(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, // usually is `${databaseName}`
//   {
//     logging: false
//   }
// )

module.exports = db

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
