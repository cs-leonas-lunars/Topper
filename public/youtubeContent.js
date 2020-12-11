/*
let startYoutube = 0
let endYoutube = 0
let currentYoutubeUser = ''
let allYoutubePosts = []
let allYoutubeUsers = []
let allYoutubeHeaders = []
var currentYoutubeURL = ''
document.addEventListener('scroll', () => findYoutubePosts())

if (
  window.location.href.split('/')[2] &&
  (window.location.href.split('/')[2] === 'www.youtube.com' ||
    window.location.href.split('/')[2] === 'youtube.com')
) {
  startYoutube = 0
  allYoutubePosts = Array.from(
    document.querySelectorAll(
      "div[class='style-scope ytd-rich-grid-media'] > div"
    )
  )
  allYoutubeUsers = Array.from(
    document.getElementsByClassName(
      'yt-simple-endpoint style-scope yt-formatted-string'
    )
  )
  endYoutube = allYoutubePosts.length

  window.onload = () => {
    allYoutubePosts.map((post, idx) => injectYoutubeButton(post, idx))

    currentYoutubeURL = location.href
    setInterval(function () {
      if (location.href != currentYoutubeURL) {
        pageNavigationYoutube()
        currentYoutubeURL = location.href
      }
    }, 250)
  }
}

function findYoutubePosts() {
  startYoutube = endYoutube
  allYoutubePosts = Array.from(
    document.querySelectorAll(
      "div[class='style-scope ytd-rich-grid-media'] > div"
    )
  )
  allYoutubeUsers = Array.from(
    document.getElementsByClassName(
      'yt-simple-endpoint style-scope yt-formatted-string'
    )
  )
  endYoutube = allYoutubePosts.length

  let youtubePosts = allYoutubePosts.slice(startYoutube, endYoutube)
  youtubePosts.map((post, idx) => injectYoutubeButton(post, idx + start))
}

function injectYoutubeButton(post, idx) {
  let btnYoutube = document.createElement('BUTTON')
  let imageYoutube = document.createElement('IMG')
  let textYoutube = document.createElement('P')
  btnYoutube.onmouseover = () => {
    btnYoutube.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: #E8E8E8; z-index: 2;'
    textYoutube.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }

  btnYoutube.onmouseout = () => {
    btnYoutube.style.cssText =
      'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'
    textYoutube.style.cssText =
      'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'
  }
  imageYoutube.src = 'https://i.imgur.com/iQz1gwF.png'
  btnYoutube.style.cssText =
    'border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;'

  imageYoutube.style.cssText =
    'position: absolute; height: 20px; width: 20px; top: 2.5px; left: 5px; zIndex: 3;'

  textYoutube.style.cssText =
    'position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;'

  btnYoutube.id = idx.toString()
  textYoutube.innerHTML = 'Tip ETH'
  btnYoutube.appendChild(imageYoutube)
  btnYoutube.appendChild(textYoutube)
  btnYoutube.onclick = () => {
    let platformYoutube = window.location.href.split('/')[2].split('.')[1]
    console.log('Clicked on button from ' + platformYoutube)
    let linkToYoutube = Array.from(
      document.getElementsByClassName(
        'yt-simple-endpoint style-scope ytd-rich-grid-media'
      )
    )[idx].href
    let recipientYoutube = allYoutubeUsers[btnYoutube.id].innerHTML
    window.open(
      `http://localhost:5000/send-transaction?to=${recipientYoutube}?platform=${platformYoutube}?link=${linkToYoutube}`
    )
  }
  post.appendChild(btnYoutube)
}

const pageNavigationYoutube = () => {
  allYoutubePosts.map((post, idx) => injectYoutubeButton(post, idx))
}
*/
