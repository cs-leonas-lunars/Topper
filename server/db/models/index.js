const db = require('../db')

const User = require('./user')
const Transaction = require('./transaction')

User.hasMany(Transaction)
Transaction.belongsTo(User)

module.exports = {
  db,
  User,
  Transaction
}
