const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  'topper',
  'jaymemitchell',
  'pencil',
  {
    host: 'localhost',
    dialect: 'postgres'
  } // usually is `${databaseName}`
)
module.exports = db

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
