chrome.storage.local.clear()

let start = 0
let end = 0
let currentUser = ''
let allPosts = []
let allUsers = []
let allHeaders = []
var currentURL = ''
document.addEventListener('scroll', () => findPosts())

if (
  window.location.href.split('/')[2] &&
  window.location.href.split('/')[2] === 'www.reddit.com'
) {
  start = 0
  allPosts = Array.from(
    document.getElementsByClassName('_3-miAEojrCvx_4FQ8x3P-s')
  )
  allUsers = Array.from(
    document.querySelectorAll(
      "div[class='_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8']"
    )
  )
  allHeaders = Array.from(
    document.querySelectorAll("div[class='cZPZhMe-UCZ8htPodMyJ5']")
  )
  end = allPosts.length

  window.onload = () => {
    /*
    if (
      Array.from(document.getElementsByClassName('_1pHyKCBktIf_9WFW9jjM3P'))[0]
    ) {
      currentUser = Array.from(
        document.getElementsByClassName('_1pHyKCBktIf_9WFW9jjM3P')
      )[0].children[0].innerText
    } else {
      currentUser = null
    }

    let timer = setInterval(() => {
      let status = window.localStorage.getItem('status')
      if (status) {
        let ethereum = window.localStorage.getItem('ethereum')
        if (ethereum !== 'undefined') ethereum = JSON.parse(ethereum)
        let web3 = window.localStorage.getItem('web3')
        let account = window.localStorage.getItem('account')
        let onReddit = window.localStorage.getItem('onReddit')
        chrome.storage.local.set({
          ethereum,
          web3,
          account,
          status,
          onReddit,
          currentUser
        })
        return clearInterval(timer)
      }
    }, 250)
    */

    allPosts.map((post, idx) => {
      let tag = allHeaders[idx].children[0].children[0].innerText
      if (tag.toLowerCase() !== 'promoted') injectButton(post, idx)
    })

    currentURL = location.href
    setInterval(function() {
      if (location.href != currentURL) {
        pageNavigation()
        currentURL = location.href
      }
    }, 250)
  }
} else {
  /*
  let timer = setInterval(() => {
    let status = window.localStorage.getItem('status')
    if (status) {
      let ethereum = JSON.parse(window.localStorage.getItem('ethereum'))
      let web3 = window.localStorage.getItem('web3')
      let onReddit = window.localStorage.getItem('onReddit')
      return chrome.storage.local.set(
        {ethereum, web3, status, onReddit},
        () => {
          return clearInterval(timer)
        }
      )
    }
  }, 250)
  */
}

function findPosts() {
  start = end
  allPosts = Array.from(
    document.getElementsByClassName('_3-miAEojrCvx_4FQ8x3P-s')
  )
  allUsers = Array.from(
    document.querySelectorAll(
      "div[class='_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8']"
    )
  )
  allHeaders = Array.from(
    document.querySelectorAll("div[class='cZPZhMe-UCZ8htPodMyJ5']")
  )
  end = allPosts.length

  let posts = allPosts.slice(start, end)
  posts.map((post, idx) => {
    let tag = allHeaders[idx + start].children[0].children[0].innerText
    if (tag.toLowerCase() !== 'promoted') injectButton(post, idx + start)
  })
}

function injectButton(post, idx) {
  let btn = document.createElement('BUTTON')
  let image = document.createElement('IMG')
  let text = document.createElement('P')
  btn.onmouseover = () => {
    btn.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: #E8E8E8; z-index: 2;'
    text.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }

  btn.onmouseout = () => {
    btn.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'
    text.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }
  image.src = 'https://i.imgur.com/iQz1gwF.png'
  btn.style.cssText =
    'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'

  image.style.cssText =
    'position: absolute; height: 20px; width: 20px; top: 2.5px; left: 5px; zIndex: 3;'

  text.style.cssText =
    'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'

  btn.id = idx.toString()
  text.innerHTML = 'Tip ETH'
  btn.appendChild(image)
  btn.appendChild(text)
  btn.onclick = () => {
    let location = window.location.href.split('/')[3]
    let recipient = ''
    if (
      location === '' ||
      location === 'best' ||
      location === 'hot' ||
      location === 'top' ||
      location === 'new'
    ) {
      recipient = allUsers[btn.id].children[3].innerText.split('/')[1]
    } else if (
      window.location.href.split('/')[4] === 'popular' ||
      window.location.href.split('/')[3] === 'all'
    ) {
      recipient = allUsers[btn.id].children[3].innerText.split('/')[1]
    } else {
      recipient = allUsers[btn.id].children[1].children[0].innerText.split(
        '/'
      )[1]
    }
    window.open(`http://localhost:5000/send-transaction/to=${recipient}`)
    //chrome.storage.local.set({recipient})
    /*
    var menu = document.createElement('div')
    menu.style.cssText =
      'position: fixed; width: 2000px; height: 2000px; left: 0vw; top: 0vh; background-color: #fff; overflow: hidden; z-index: 999'
    document.body.style.overflow = 'hidden'
    var close = document.createElement('div')
    close.innerText = 'Close'
    close.style.cssText =
      'position: absolute; font-size: 1.5rem; font-family: Montserrat-Bold; text-align: center; color: #777; width: 50px; height: 20px; top: 515px; left: 50vw; margin-left: -40px; cursor: pointer; transition: color 0.35s'
    close.onclick = () => {
      menu.style.cssText = 'display: none'
      document.body.style.overflow = 'scroll'
      chrome.storage.local.remove('recipient')
    }
    close.onmouseover = () => {
      close.style.cssText =
        'position: absolute; font-size: 1.5rem; font-family: Montserrat-Bold; text-align: center; color: #ccc; width: 50px; height: 20px; top: 515px; left: 50vw; margin-left: -40px; cursor: pointer; transition: color 0.35s'
    }
    close.onmouseout = () => {
      close.style.cssText =
        'position: absolute; font-size: 1.5rem; font-family: Montserrat-Bold; text-align: center; color: #777; width: 50px; height: 20px; top: 515px; left: 50vw; margin-left: -40px; cursor: pointer; transition: color 0.35s'
    }
    var arrow = document.createElement('img')
    arrow.src =
      'https://whataftercollege.com/wp-content/uploads/2019/12/wac-down-arrow-gif-2.gif'
    arrow.style.cssText =
      'position: absolute; width: 100px; height: 100px; top: 15px; left: 89vw; transform: rotate(180deg)'
    var icon = document.createElement('img')
    icon.src = 'https://i.imgur.com/YAah1gz.png'
    icon.style.cssText =
      'position: absolute; width: 150px; height: auto; top: 150px; left: 50vw; margin-left: -75px'
    var title = document.createElement('h1')
    title.innerText = 'Please Open Your Topper Extension'
    title.style.cssText =
      'position: absolute; font-size: 3rem; font-family: Montserrat-Bold; text-align: center; color: #444; width: 1000px; top: 350px; left: 50vw; margin-left: -500px'
    var paragraph = document.createElement('p')
    paragraph.innerText =
      'To send your tip, launch Topper and choose the amount of ETH you would like to send'
    paragraph.style.cssText =
      'position: absolute; font-size: 1rem; font-family: Montserrat-Bold; text-align: center; color: #999; width: 1000px; top: 425px; left: 50vw; margin-left: -500px'
    menu.appendChild(close)
    menu.appendChild(arrow)
    menu.appendChild(icon)
    menu.appendChild(title)
    menu.appendChild(paragraph)
    document.body.appendChild(menu)
    */
  }
  post.appendChild(btn)
}

const pageNavigation = () => {
  /*
  let timer = setInterval(() => {
    let status = window.localStorage.getItem('status')
    if (status) {
      let ethereum = window.localStorage.getItem('ethereum')
      if (ethereum !== 'undefined') ethereum = JSON.parse(ethereum)
      let web3 = window.localStorage.getItem('web3')
      let account = window.localStorage.getItem('account')
      let onReddit = window.localStorage.getItem('onReddit')
      chrome.storage.local.set({
        ethereum,
        web3,
        account,
        status,
        onReddit
      })
      return clearInterval(timer)
    }
  }, 250)
  */

  allPosts.map((post, idx) => {
    let tag = allHeaders[idx].children[0].children[0].innerText
    if (tag.toLowerCase() !== 'promoted') injectButton(post, idx)
  })
}
