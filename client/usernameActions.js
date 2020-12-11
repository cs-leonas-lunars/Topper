const methods = require('../db.js')

const updateSocialUsername = async (platform, username) => {
  methods.pushToStorage({platform, username})
  let res = methods.getStorage()
  console.log('ACTIONS: ', res)
  return res
  //console.log('USERNAMES JSON AFTER: ', JSON.parse(usernames.usernames.shift()))
  // window.location.replace(
  //   `http://localhost:5000/updateSocialUsername?reddit?${redditHandle}`
  // )
  /*
  var bytes = CryptoJS.AES.decrypt(redditHandle, 'g3tth3n4m3')
  var originalText = bytes.toString(CryptoJS.enc.Utf8)
  try {
    await axios.put('/api/users/update/social', {
      platform,
      originalText
    })
  } catch (err) {
    console.error(err)
  }
  */
}

module.exports = updateSocialUsername
