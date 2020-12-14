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
        <div id="container">
          <img id="brandIcon" src="/images/TipJar.png" alt="Topper Logo" />
          <Link to="/">
            <h1 id="logoText"> ← Back </h1>
          </Link>
          <h1 id="titleText">Welcome</h1>
          <div id="missionStatement">
            <h2>Our Mission</h2>
            <p>
              Privacy and ease of use no longer go hand in hand. Topper enables
              users to directly support their favorite content creators with the
              power of crpytocurrency
            </p>
          </div>
          <div id="meetUs">
            <div id="headshotContainer1">
              <h3 className="headshotName">Alex Spiezio</h3>
              <img
                className="headshot"
                src="/images/spiezioTopperHeadshot.png"
              />
              <small className="headshotDesc">Description</small>
              <span>linkedIn link</span>
            </div>
            <div id="headshotContainer2">
              <h3 className="headshotName">Alex Dunne</h3>
              <img className="headshot" src="/images/dunneTopperHeadshot.png" />
              <small className="headshotDesc">Description</small>
              <span>linkedIn link</span>
            </div>
            <div id="headshotContainer3">
              <h3 className="headshotName">Kevin Zieber</h3>
              <img
                className="headshot"
                src="/images/zieberTopperHeadshot.png"
              />
              <small className="headshotDesc">Description</small>
              <span>linkedIn link</span>
            </div>
            <div id="headshotContainer4">
              <h3 className="headshotName">Jayme Mitchell</h3>
              <img
                className="headshot"
                src="/images/mitchellTopperHeadshot.png"
              />
              <small className="headshotDesc">Description</small>
              <span>linkedIn link</span>
            </div>
          </div>
          <div id="contact">Contact us support@topper.com</div>
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
        </div>

        {/* <div id="videoTutorial">transaction video tutorial here</div>
        <div id="ad">presentation video here</div> */}
      </header>
    </div>
  )
}

export default LearnMore
