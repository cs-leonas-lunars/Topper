import React, {useState} from 'react'
import Signup from './Signup'

const Landing = () => {
  // component variable is arbitrary number to decide what should be shown, depending on what the user is trying to do
  const [component, setComponent] = useState(0)

  if (component === 0) {
    return (
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" onClick={() => toggleMenu(true)} />
          <img id="brandIcon" src="/images/TipJar.png" />
          <h1 id="logoText">Topper</h1>
          <p id="paraText">Please Log In With Reddit</p>
          <a id="login" href="/auth/reddit">
            <div id="circle" />
            <img id="redditIcon" src="/images/reddit.png" />
            <p id="loginText" href="/auth/reddit">
              Login
            </p>
          </a>
          <button id="signup" onClick={() => setComponent(1)}>
            Create An Account
          </button>

          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
          <button id="menuButton" onClick={() => toggleMenu(false)}>
            =
          </button>
          <div id="menu" />
          <button id="closeMenu" onClick={() => toggleMenu(true)}>
            +
          </button>
        </header>
      </div>
    )
  } else if (component === 1) {
    return (
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" onClick={() => toggleMenu(true)} />
          <img id="brandIcon" src="/images/TipJar.png" />

          {/* <h1 id="logoText">Topper</h1> */}
          <Signup />
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
          <button id="menuButton" onClick={() => toggleMenu(false)}>
            =
          </button>
          <div id="menu" />
          <button id="closeMenu" onClick={() => toggleMenu(true)}>
            +
          </button>
        </header>
      </div>
    )
  }
}

export default Landing
