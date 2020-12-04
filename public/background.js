
const enableFunc = async () => {
  let account = ''
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    const web3 = window.web3
    account = web3.eth.accounts[0]
  }
  window.localStorage.setItem('ethereum', JSON.stringify(window.ethereum))
  window.localStorage.setItem('web3', window.web3)
  window.localStorage.setItem('status', 'true')
  window.localStorage.setItem('onReddit', 'true')
  window.localStorage.setItem('account', account)
}

window.localStorage.clear()
if (
  window.location.href.split('/')[2] &&
  window.location.href.split('/')[2] === 'www.reddit.com'
) {
  enableFunc()
} else {
  window.localStorage.setItem('status', 'true')
  window.localStorage.setItem('onReddit', 'false')
}

