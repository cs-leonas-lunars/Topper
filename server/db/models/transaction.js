const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  linkToPost: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  recipientId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
  /*
  status: {
    type: Sequelize.ENUM('Sent', 'Received'),
    allowNull: false,
  },
  */
})

module.exports = Transaction
