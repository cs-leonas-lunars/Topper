import React from 'react'

const Landing = () => {
  return (
    <header className="App-header">
      <img id="background" src="/images/topperBackground.gif" />
      <div id="overlay" onClick={() => toggleMenu(true)} />
      <img id="brandIcon" src="/images/TipJar.png" />
      <h1 id="logoText">Topper</h1>
      <p id="paraText">Please Log In With Reddit</p>
      <button id="login">
        <div id="circle" />
        <img id="redditIcon" src="/images/reddit.png" />
        <a id="loginText" href="/auth/reddit">
          Start
        </a>
      </button>
    </header>
  )
}

function toggleMenu(status) {
  if (status) {
    document.getElementById('menu').style.cssText =
      'width: 0vw; box-shadow: 0px 0px 0px 0px #000'
    document.getElementById('closeMenu').style.cssText = 'right: -75vw'
  } else {
    document.getElementById('menu').style.cssText =
      'width: 80vw; box-shadow: -20px 0px 40px -40px #000'
    document.getElementById('closeMenu').style.cssText = 'right: 5vw'
  }
}

export default Landing
