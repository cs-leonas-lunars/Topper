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
  (window.location.href.split('/')[2] === 'www.reddit.com' ||
    window.location.href.split('/')[2] === 'reddit.com')
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
    let linkTo = Array.from(
      document.querySelectorAll(
        'div[class="y8HYJ-y_lTUHkQIc1mdCq _2INHSNB8V5eaWp4P0rY_mE"] > a'
      )
    )[idx].href
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
    window.open(
      `http://localhost:5000/send-transaction?to=${recipient}?link=${linkTo}`
    )
  }
  post.appendChild(btn)
}

const pageNavigation = () => {
  allPosts.map((post, idx) => {
    let tag = allHeaders[idx].children[0].children[0].innerText
    if (tag.toLowerCase() !== 'promoted') injectButton(post, idx)
  })
}
