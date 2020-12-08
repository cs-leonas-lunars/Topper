const db = require('../db')

const User = require('./user')
const Transaction = require('./transaction')

User.belongsToMany(User, {
  through: Transaction,
  as: 'senderId',
  foreignKey: 'senderId'
})
User.belongsToMany(User, {
  through: Transaction,
  as: 'recipientId',
  foreignKey: 'recipientId'
})

module.exports = {
  db,
  User,
  Transaction
}
