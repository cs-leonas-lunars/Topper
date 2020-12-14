import React from 'react'
import {Link} from 'react-router-dom'

const LearnMore = () => {
  return (
    <div className="App">
      <header className="App-header">
        <video
          src="/images/background.mp4"
          id="background"
          playsInline
          muted
          autoPlay
          loop
          style={{pointerEvents: 'none'}}
        />
        <div id="overlay" />
        <img id="brandIcon" src="/images/TipJar.png" alt="Topper Logo" />
        <Link to="/">
          <h1 id="logoText"> ← Back </h1>
        </Link>
        <h1 id="titleText">Learn More</h1>
        <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
      </header>
    </div>
    // <div>
    //   learn more
    //   <Link to="/">go back</Link>
    // </div>
  )
}

export default LearnMore
