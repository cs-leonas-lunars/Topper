'use strict'
/* global describe it */

const seed = require('./seed')
const expect = require('chai').expect
const assert = require('assert')
const {Transaction} = require('../server/db/models')

describe('seed script', () => {
  it('completes successfully', seed)
})

describe('seeds one transaction', () => {
  let transactions

  beforeEach(async () => {
    transactions = await Transaction.bulkCreate([
      {
        recipientId: 1,
        senderId: 2,
        amount: 1 ** 18,
        linkToPost: 'https://reddit.com/post'
      },
      {
        recipientId: 2,
        senderId: 3,
        amount: 1 ** 18,
        linkToPost: 'https://reddit.com/post'
      },
      {
        recipientId: 2,
        senderId: 5,
        amount: 1 ** 18,
        linkToPost: 'https://reddit.com/post'
      },
      {
        recipientId: 3,
        senderId: 2,
        amount: 1 ** 18,
        linkToPost: 'https://reddit.com/post'
      },
      {
        recipientId: 2,
        senderId: 6,
        amount: 1 ** 18,
        linkToPost: 'https://reddit.com/post'
      }
    ])
  })

  it('seeds one test transaction', async () => {
    expect(transactions[0].recipientId).to.equal(1)
    expect(transactions[0].senderId).to.equal(2)
    expect(transactions[0].amount).to.equal(1 ** 18)
    expect(transactions[0].linkToPost).to.equal('https://reddit.com/post')
  })

  it('seeds five transactions', () => {
    expect(transactions.length).to.equal(5)
  })
})
