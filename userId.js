global.userId

function setUserId(value) {
  global.userId = value
}

function getUserId() {
  return global.userId
}

module.exports = {setUserId, getUserId}
