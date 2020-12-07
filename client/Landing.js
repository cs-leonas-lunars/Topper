import React from 'react'

const Landing = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img id="background" src="/images/topperBackground.gif" />
        <div id="overlay" />
        <img id="brandIcon" src="/images/TipJar.png" />
        <h1 id="logoText">Topper</h1>
        <p id="paraText">Please Log In With Reddit</p>
        <a id="login" href="/auth/reddit">
          <div id="circle" />
          <img id="redditIcon" src="/images/reddit.png" />
          <p id="loginText">Login</p>
        </a>
        <button id="signup">Create An Account</button>
        <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
      </header>
    </div>
  )
}

export default Landing
