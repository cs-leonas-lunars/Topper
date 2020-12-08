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
          <h1 id="titleText" onClick={() => setComponent(0)}>
            Reward The Right Way.
          </h1>
          <p id="paraText">
            Send Crypto To Your Favorite Content Creators Like Never Before
          </p>
          <a id="login" href="/auth/reddit">
            <p id="loginText" href="/auth/reddit">
              Login
            </p>
          </a>
          <button id="signup" onClick={() => setComponent(1)}>
            Create An Account
          </button>
          <button id="learnLanding">Learn More</button>
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
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
          <h1 id="logoText" onClick={() => setComponent(0)}>
            Topper
          </h1>
          <Signup />
          <button id="about">About Us</button>
          <button id="learn">Learn More</button>
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
        </header>
      </div>
    )
  }
}

export default Landing
