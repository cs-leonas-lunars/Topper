global.tempStorage = []

function getStorage() {
  return global.tempStorage
}

function pushToStorage(value) {
  global.tempStorage.push(value)
}

module.exports = {getStorage, pushToStorage}
