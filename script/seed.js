'use strict'

const db = require('../server/db')
const {User, Transaction} = require('../server/db/models')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})

  const user1 = await User.create({
    email: faker.internet.email(),
    username: 'UnfairBoysenberry190',
    address: '0xc19100527eeA6B56a58542B56D18944021cfD181'
  })

  const user2 = await User.create({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    address: '0xF1c335aC2B8586321B71965D3b7109a011dbA22d'
  })

  const user3 = await User.create({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    address: '0xB8a31D32114cFe92CD5c44fe6e33e83E26204A45'
  })

  const user4 = await User.create({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    address: '0x953700289fc5138Aa3721686Ec20e696bcb0D86c'
  })

  const user5 = await User.create({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    address: '0x4F463ee218bA7403d963Fa314C3760302Ca7D749'
  })

  const transaction1 = await Transaction.create({
    recipientEmail: faker.internet.email(),
    recipientAddress: '0x8AB017fB9631A51BFB57f4E8815a18048f52F9b7',
    amount: 0.1,
    linkToPost:
      'https://www.reddit.com/r/DadReflexes/comments/k2p9wq/baby_has_his_drink_dad_has_the_ball/',
    userId: 5
  })

  const transaction2 = await Transaction.create({
    recipientEmail: faker.internet.email(),
    recipientAddress: '0x972d6a38E84Df433a7A872B0507b739Eb7F84Da3',
    amount: 1,
    linkToPost:
      'https://www.reddit.com/r/EarthPorn/comments/k2nxuv/autumn_view_from_sustenpass_switzerlandoc1080x1920/',
    userId: 1
  })

  const transaction3 = await Transaction.create({
    recipientEmail: faker.internet.email(),
    recipientAddress: '0x8827F37c8a8510782E0E76d80501877D35d40C55',
    amount: 0.05,
    linkToPost:
      'https://www.reddit.com/r/PropagandaPosters/comments/k2of3x/british_weapons_to_defeat_hitler_uk_1943/',

    userId: 2
  })

  const transaction4 = await Transaction.create({
    recipientEmail: faker.internet.email(),
    recipientAddress: '0xe5D12169Ab3eCcEB5Eb896244F309b5479Aa8e62',
    amount: 0.3,
    linkToPost:
      'https://www.reddit.com/r/Eminem/comments/k2j30r/eminem_on_kamikaze_2018/',
    userId: 3
  })

  const transaction5 = await Transaction.create({
    recipientEmail: faker.internet.email(),
    recipientAddress: '0xc2a0Ee332D7c854fB93b279aB63c06326d853A44',
    amount: 10,
    linkToPost:
      'https://www.reddit.com/r/Minecraft/comments/k2m81n/staring_back/',
    userId: 1
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
