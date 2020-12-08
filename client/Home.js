import React from 'react'
import {logout} from './userActions'

// all components are functional
// no React.Component
const Home = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img id="background" src="/images/topperBackground.gif" />
        <div id="overlay" onClick={() => toggleMenu(true)} />
        <img id="profileIcon" src="/images/profile.png" />
        <h1 id="logoText">Topper</h1>
        <h1 id="titleText" onClick={() => setComponent(0)}>
          {props.user.username}
        </h1>
        <p id="paraText">0 ETH</p>
        <button id="learnHome">Learn More</button>
        <button id="logout" onClick={() => logout()}>
          Logout
        </button>
        <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
      </header>
    </div>
  )
}

//sidebar
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

export default Home
