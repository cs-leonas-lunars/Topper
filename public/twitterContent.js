chrome.storage.local.clear()
let twitterUser = null

if (
  (window.location.href.split('/')[2] &&
    window.location.href.split('/')[2] === 'www.twitter.com') ||
  window.location.href.split('/')[2] === 'twitter.com'
) {
  window.onload = () => {
    if (
      Array.from(
        document.getElementsByClassName(
          'css-1dbjc4n r-1awozwy r-d0pm55 r-1bymd8e r-13qz1uu'
        )
      )[0]
    ) {
      console.log('HIT!')
      twitterUser = 'yes'
    }

    setTimeout(() => {
      let timer = setInterval(() => {
        let status = window.localStorage.getItem('status')
        if (status) {
          let ethereum = window.localStorage.getItem('ethereum')
          if (ethereum !== 'undefined') ethereum = JSON.parse(ethereum)
          let web3 = window.localStorage.getItem('web3')
          let account = window.localStorage.getItem('account')
          let onPage = window.localStorage.getItem('onPage')
          let currentPage = window.localStorage.getItem('currentPage')
          console.log('HIT 2!')
          chrome.storage.local.set({
            ethereum,
            web3,
            account,
            status,
            onPage,
            currentPage,
            currentUser: twitterUser
          })
          return clearInterval(timer)
        }
      }, 250)
    }, 1000)

    currentURL = location.href
    setInterval(function() {
      if (location.href != currentURL) {
        signinStatus = Array.from(
          document.getElementsByClassName(
            'css-1dbjc4n r-1awozwy r-d0pm55 r-1bymd8e r-13qz1uu'
          )
        )[0]
        twitterPageNavigation()
        currentURL = location.href
      }
    }, 250)
  }
}

const twitterPageNavigation = () => {
  if (
    Array.from(
      document.getElementsByClassName(
        'css-1dbjc4n r-1awozwy r-d0pm55 r-1bymd8e r-13qz1uu'
      )
    )[0]
  ) {
    console.log('HIT!')
    twitterUser = 'yes'
  }

  setTimeout(() => {
    let timer = setInterval(() => {
      let status = window.localStorage.getItem('status')
      if (status) {
        let ethereum = window.localStorage.getItem('ethereum')
        if (ethereum !== 'undefined') ethereum = JSON.parse(ethereum)
        let web3 = window.localStorage.getItem('web3')
        let account = window.localStorage.getItem('account')
        let onPage = window.localStorage.getItem('onPage')
        let currentPage = window.localStorage.getItem('currentPage')
        console.log('HIT 2!')
        chrome.storage.local.set({
          ethereum,
          web3,
          account,
          status,
          onPage,
          currentPage,
          currentUser: twitterUser
        })
        return clearInterval(timer)
      }
    }, 250)
  }, 1000)
}
