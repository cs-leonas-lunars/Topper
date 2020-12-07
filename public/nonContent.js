if (
  !window.location.href.split('/')[2] ||
  window.location.href.split('/')[2] !== 'www.reddit.com' ||
  window.location.href.split('/')[2] !== 'www.twitter.com'
) {
  let timer = setInterval(() => {
    let status = window.localStorage.getItem('status')
    if (status) {
      let ethereum = JSON.parse(window.localStorage.getItem('ethereum'))
      let web3 = window.localStorage.getItem('web3')
      let onPage = window.localStorage.getItem('onPage')
      let currentPage = window.localStorage.getItem('currentPage')
      return chrome.storage.local.set(
        {ethereum, web3, status, onPage, currentPage},
        () => {
          return clearInterval(timer)
        }
      )
    }
  }, 250)
}
