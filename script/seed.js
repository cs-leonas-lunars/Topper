'use strict'

const db = require('../server/db')
const {User, Transaction} = require('../server/db/models')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})

  const user1 = await User.create({
    email: faker.internet.email(),
    username: 'UnfairBoysenberry190',
    address: '0xE9508ea6E2BfEC43e90B8cf911284118E93D9F5E',
    password: faker.internet.password()
  })

  const user2 = await User.create({
    email: 'cody@email.com',
    username: 'cody',
    address: '0xF1c335aC2B8586321B71965D3b7109a011dbA22d',
    password: '123'

  })

  const user3 = await User.create({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    address: '0xB8a31D32114cFe92CD5c44fe6e33e83E26204A45',
    password: faker.internet.password()

  })

  const user4 = await User.create({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    address: '0x953700289fc5138Aa3721686Ec20e696bcb0D86c',
    password: faker.internet.password()
  })

  const user5 = await User.create({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    address: '0x4F463ee218bA7403d963Fa314C3760302Ca7D749',
    password: faker.internet.password()
  })

  const user6 = await User.create({
    email: faker.internet.email(),
    username: 'jessalexandria',
    address: '0x6137bB3E12b2a1DaeA6240b71F5DA195a0D84B87',
    password: faker.internet.password()

  })

  const transaction1 = await Transaction.create({
    recipientId: 1,
    senderId: 2,
    amount: 1 ** 18,
    linkToPost: 'https://reddit.com/post'
  })

  const transaction2 = await Transaction.create({
    recipientId: 2,
    senderId: 3,
    amount: 1 ** 18,
    linkToPost: 'https://reddit.com/post'
  })

  const transaction3 = await Transaction.create({
    recipientId: 2,
    senderId: 5,
    amount: 1 ** 18,
    linkToPost: 'https://reddit.com/post'
  })

  const transaction4 = await Transaction.create({
    recipientId: 3,
    senderId: 2,
    amount: 1 ** 18,
    linkToPost: 'https://reddit.com/post'
  })

  const transaction5 = await Transaction.create({
    recipientId: 2,
    senderId: 6,
    amount: 1 ** 18,
    linkToPost: 'https://reddit.com/post'
  })

  console.log('db synced!')
}
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
