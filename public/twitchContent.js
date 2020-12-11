/*
let startTwitch = 0
let endTwitch = 0
let currentTwitchUser = ''
let allTwitchPosts = []
let allTwitchUsers = []
let allTwitchHeaders = []
var currentTwitchURL = ''
document.addEventListener('scroll', () => findTwitchPosts())

if (
  window.location.href.split('/')[2] &&
  (window.location.href.split('/')[2] === 'www.twitch.tv' ||
    window.location.href.split('/')[2] === 'twitch.tv')
) {
  startTwitch = 0
  allTwitchPosts = Array.from(
    document.getElementsByClassName('tw-flex tw-flex-nowrap')
  )
  allTwitchUsers = Array.from(
    document.getElementsByClassName('tw-c-text-alt-2 tw-ellipsis')
  )

  endTwitch = allTwitchPosts.length

  window.onload = () => {
    console.log(allTwitchPosts)
    console.log(allTwitchUsers)
    allTwitchPosts.map((post, idx) => injectTwitchButton(post, idx))

    currentTwitchURL = location.href
    setInterval(function () {
      if (location.href != currentTwitchURL) {
        pageNavigationTwitch()
        currentTwitchURL = location.href
      }
    }, 250)
  }
}

function findTwitchPosts() {
  startTwitch = endTwitch
  allTwitchPosts = Array.from(
    document.getElementsByClassName('tw-flex tw-flex-nowrap')
  )
  allTwitchUsers = Array.from(
    document.getElementsByClassName('tw-c-text-alt-2 tw-ellipsis')
  )

  endTwitch = allTwitchPosts.length

  let twitchPosts = allTwitchPosts.slice(startTwitch, endTwitch)
  twitchPosts.map((post, idx) => injectTwitchButton(post, idx + start))
}

function injectTwitchButton(post, idx) {
  let btnTwitch = document.createElement('BUTTON')
  let imageTwitch = document.createElement('IMG')
  let textTwitch = document.createElement('P')
  btnTwitch.onmouseover = () => {
    btnTwitch.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: #E8E8E8; z-index: 2;'
    textTwitch.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }

  btnTwitch.onmouseout = () => {
    btnTwitch.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'
    textTwitch.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }
  imageTwitch.src = 'https://i.imgur.com/iQz1gwF.png'
  btnTwitch.style.cssText =
    'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'

  imageTwitch.style.cssText =
    'position: absolute; height: 20px; width: 20px; top: 2.5px; left: 5px; zIndex: 3;'

  textTwitch.style.cssText =
    'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'

  btnTwitch.id = idx.toString()
  textTwitch.innerHTML = 'Tip ETH'
  btnTwitch.appendChild(imageTwitch)
  btnTwitch.appendChild(textTwitch)
  btnTwitch.onclick = () => {
    let platformTwitch = window.location.href.split('/')[2].split('.')[1]
    console.log('Clicked on button from ' + platformTwitch)
    let linkToTwitch = Array.from(
      document.getElementsByClassName(
        'yt-simple-endpoint style-scope ytd-rich-grid-media'
      )
    )[idx].href
    let recipientTwitch = allTwitchUsers[btnTwitch.id].innerText
    window.open(
      `http://localhost:5000/send-transaction?to=${recipientTwitch}?platform=${platformTwitch}?link=${linkToTwitch}`
    )
  }
  post.appendChild(btnTwitch)
}

const pageNavigationTwitch = () => {
  allTwitchPosts.map((post, idx) => injectTwitchButton(post, idx))
}
*/
