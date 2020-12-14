let startReddit = 0
let endReddit = 0
let currentRedditUser = ''
let allRedditPosts = []
let allRedditUsers = []
let allRedditHeaders = []
var currentRedditURL = ''
document.addEventListener('scroll', () => findRedditPosts())

if (
  window.location.href.split('/')[2] &&
  (window.location.href.split('/')[2] === 'www.reddit.com' ||
    window.location.href.split('/')[2] === 'reddit.com')
) {
  startReddit = 0
  allRedditPosts = Array.from(
    document.getElementsByClassName('_3-miAEojrCvx_4FQ8x3P-s')
  )
  allRedditUsers = Array.from(
    document.querySelectorAll(
      "div[class='_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8']"
    )
  )
  allRedditHeaders = Array.from(
    document.querySelectorAll("div[class='cZPZhMe-UCZ8htPodMyJ5']")
  )
  endReddit = allRedditPosts.length

  window.onload = () => {
    console.log('window reloaded!')
    allRedditPosts.map((post, idx) => {
      let tagReddit = allRedditHeaders[idx].children[0].children[0].innerText
      if (tagReddit.toLowerCase() !== 'promoted') injectRedditButton(post, idx)
    })

    currentRedditURL = location.href
    setInterval(function () {
      if (location.href != currentRedditURL) {
        pageNavigationReddit()
        currentRedditURL = location.href
      }
    }, 250)
  }
}

function findRedditPosts() {
  startReddit = endReddit
  allRedditPosts = Array.from(
    document.getElementsByClassName('_3-miAEojrCvx_4FQ8x3P-s')
  )
  allRedditUsers = Array.from(
    document.querySelectorAll(
      "div[class='_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8']"
    )
  )
  allRedditHeaders = Array.from(
    document.querySelectorAll("div[class='cZPZhMe-UCZ8htPodMyJ5']")
  )
  endReddit = allRedditPosts.length

  let redditPosts = allRedditPosts.slice(startReddit, endReddit)
  redditPosts.map((post, idx) => {
    let tagReddit =
      allRedditHeaders[idx + startReddit].children[0].children[0].innerText
    if (tagReddit.toLowerCase() !== 'promoted')
      injectRedditButton(post, idx + startReddit)
  })
}

function injectRedditButton(post, idx) {
  let btnReddit = document.createElement('BUTTON')
  let imageReddit = document.createElement('IMG')
  let textReddit = document.createElement('P')
  btnReddit.onmouseover = () => {
    btnReddit.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: #E8E8E8; z-index: 2;'
    textReddit.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }

  btnReddit.onmouseout = () => {
    btnReddit.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'
    textReddit.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }
  imageReddit.src = 'https://i.imgur.com/iQz1gwF.png'
  btnReddit.style.cssText =
    'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'

  imageReddit.style.cssText =
    'position: absolute; height: 20px; width: 20px; top: 2.5px; left: 5px; zIndex: 3;'

  textReddit.style.cssText =
    'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'

  btnReddit.id = idx.toString()
  textReddit.innerHTML = 'Tip ETH'
  btnReddit.appendChild(imageReddit)
  btnReddit.appendChild(textReddit)
  btnReddit.onclick = () => {
    let platformReddit = window.location.href.split('/')[2].split('.')[1]
    let linkToReddit = Array.from(
      document.querySelectorAll(
        'div[class="y8HYJ-y_lTUHkQIc1mdCq _2INHSNB8V5eaWp4P0rY_mE"] > a'
      )
    )[idx].href
    let locationReddit = window.location.href.split('/')[3]
    let recipientReddit = ''
    if (
      locationReddit === '' ||
      locationReddit === 'best' ||
      locationReddit === 'hot' ||
      locationReddit === 'top' ||
      locationReddit === 'new'
    ) {
      recipientReddit = allRedditUsers[
        btnReddit.id
      ].children[3].innerText.split('/')[1]
    } else if (
      window.location.href.split('/')[4] === 'popular' ||
      window.location.href.split('/')[3] === 'all'
    ) {
      recipientReddit = allRedditUsers[
        btnReddit.id
      ].children[3].innerText.split('/')[1]
    } else {
      recipientReddit = allRedditUsers[
        btnReddit.id
      ].children[1].children[0].innerText.split('/')[1]
    }
    window.open(
      `https://topper-fsa.herokuapp.com/send-transaction?to=${recipientReddit}?platform=${platformReddit}?link=${linkToReddit}`
    )
  }
  post.appendChild(btnReddit)
}

const pageNavigationReddit = () => {
  allRedditPosts.map((post, idx) => {
    let tagReddit = allRedditHeaders[idx].children[0].children[0].innerText
    if (tagReddit.toLowerCase() !== 'promoted') injectRedditButton(post, idx)
  })
}
