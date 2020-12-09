import React, {useState} from 'react'
import Signup from './Signup'
import Login from './Login'

const Landing = props => {
  // component variable is arbitrary number to decide what should be shown, depending on what the user is trying to do
  const [component, setComponent] = useState(0)

  if (component === 0) {
    return (
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" />
          <img id="brandIcon" src="/images/TipJar.png" />
          <h1 id="logoText" onClick={() => setComponent(0)}>
            Topper
          </h1>
          <h1 id="titleText">Reward The Right Way.</h1>
          <p id="paraText">
            Send Crypto To Your Favorite Content Creators Like Never Before
          </p>
          <div id="login">
            <p id="loginText" onClick={() => setComponent(2)}>
              Login
            </p>
          </div>
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
          <div id="overlay" />
          <img id="brandIcon" src="/images/TipJar.png" />
          <h1 id="logoText" onClick={() => setComponent(0)}>
            ← Back
          </h1>
          <Signup account={props.account} />
          <button id="learnLanding">Learn More</button>
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
        </header>
      </div>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" />
          <img id="brandIcon" src="/images/TipJar.png" />
          <h1 id="logoText" onClick={() => setComponent(0)}>
            ← Back
          </h1>
          <Login />
          <button id="learnLanding">Learn More</button>
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
        </header>
      </div>
    )
  }
}

export default Landing
