const db = require('../db')

const User = require('./user')
const Transaction = require('./transaction')

// User.hasMany(Transaction)
// Transaction.belongsTo(User)
// Transaction.hasMany(User, {as: 'transactionRecipient'})
// Transaction.hasMany(User, {as: 'transactionSender'})
// User.belongsTo(Transaction)

module.exports = {
  db,
  User,
  Transaction
}
