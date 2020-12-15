import React from 'react'
import {Link} from 'react-router-dom'

const DownloadNow = () => {
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
          <Link to="/">
            <h1 id="logoText"> ← Back </h1>
          </Link>

          <img
            id="appIcon-download"
            src="/images/appIcon.png"
            alt="Topper Logo"
          />
          <h1 className="titleText">Topper</h1>

          <div className="get-started">
            <h2>Ready to get started?</h2>
            <p>
              All you need to get started is a MetaMask or Fortmatic wallet, our
              browser extension available in the{' '}
              <a id="download-link" target="_blank" href="#">
                Chrome store
              </a>, and a Topper account. Once you have installed the extension,
              you will automatically see tip buttons popualating on sites where
              Topper is supported like Reddit, Twitter, Youtube, Twitch, and
              more!
            </p>
            <p>
              Once you find a post or creator you like, all you have to do is
              click the Tip Eth button provided by Topper to initiate a
              transaction.
            </p>
            <a
              href="https://www.reddit.com/r/Awww/comments/kdkcic/this_is_the_time_to_say_awww/?utm_source=share&utm_medium=web2x&context=3"
              target="_blank"
            >
              <img className="get-started-img" src="/images/sample-post.png" />
            </a>
            <p>
              After clicking the tip button, you'll initate a dialogue with our
              site allowing you to specify how much you'd like to send.
            </p>
            <img
              className="get-started-img"
              src="/images/transaction-dialogue.png"
            />
            <p>
              Then, simply follow the prompts from Fortmatic or MetaMask,
              whatever your preference, to complete the transfer.
            </p>
            <p>
              You will receive a confirmation from us when your transaction is
              successfully processed on our end, but please keep in mind that
              blockchain transfers do take a little bit of extra time to
              complete, as they must be validated by a majority of the network
              validators.
            </p>
            <p>
              Now you can get out there and give back to those who keep you
              entertained!
            </p>
          </div>
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
        </div>
      </header>
    </div>
  )
}

export default DownloadNow
