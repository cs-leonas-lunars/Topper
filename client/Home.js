import React, {useState, useEffect} from 'react'
import {logout, pushAddress} from './userActions'
import {loadBlockchainData} from './loadData'
import AuthButtons from './AuthButtons'
import {Link} from 'react-router-dom'

// all components are functional
// no React.Component
const Home = props => {
  const [data, setData] = useState({
    accountData: null,
    loading: true
  })

  // useEffect for user
  useEffect(() => {
    const findData = async () => {
      try {
        let accountData = await loadBlockchainData()
        if (accountData && accountData.account)
          await pushAddress(accountData.account)
        setData({
          accountData,
          loading: false
        })
      } catch (err) {
        console.error(err)
      }
    }
    setTimeout(() => {
      findData()
    }, 2000)
  }, [])

  let top = -200

  return data.loading ? (
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
        <div id="loadContainer">
          <video
            src="/images/loader.mp4"
            id="loadIcon"
            playsInline
            muted
            autoPlay
            loop
            style={{pointerEvents: 'none'}}
          />
          <img id="loadJar" src="/images/loadJar.png" />
        </div>
      </header>
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <img
          id="background"
          src="/images/topperBackground.gif"
          alt="background gradient"
        />
        <div id="overlay" onClick={() => toggleMenu(true)} />
        <div id="home-container">
          <img id="profileIcon" src="/images/profile.png" alt="profile icon" />
          <h1 id="logoText" onClick={() => setComponent(0)}>
            Topper
          </h1>
          {/*<AuthButtons />*/}
          {props.user.reddit ? (
            <div id="redditAdded">
              <p id="loginText">Reddit: {props.user.reddit}</p>
            </div>
          ) : (
            <a id="redditAuth" href="/auth/reddit">
              <p id="redditAuthText">Connect Reddit</p>
            </a>
          )}
          <h1 id="titleText">{props.user.username}</h1>
          <p id="paraText">{data.accountData.balance}</p>
          <Link to="/learnMore">
            <button id="learnHome">Learn More</button>
          </Link>
          <Link to="/download">
            <button className="downloadButtonHome">Download Now</button>
          </Link>
          <button id="logout" onClick={() => logout()}>
            Logout
          </button>
          <div id="transaction-container">
            {props.transactions && props.transactions.length ? (
              props.transactions.map(transaction => {
                top += 220
                return (
                  <div key={transaction.id}>
                    {transaction.recipientId === props.user.id && (
                      <div
                        className="transaction"
                        style={{top: top.toString() + 'px'}}
                      >
                        <h1 id="amount-pos">+{transaction.amount} ETH</h1>
                        <img
                          src="/images/receive.png"
                          className="transaction-icon"
                        />
                        <div
                          onClick={() => window.open(transaction.linkToPost)}
                          className="platform-icon"
                        />
                        <h2 className="transaction-date">
                          {transaction.createdAt.split(' ')[0]}
                        </h2>
                      </div>
                    )}
                    {transaction.senderId === props.user.id && (
                      <div
                        className="transaction"
                        style={{top: top.toString() + 'px'}}
                      >
                        <h1 id="amount-neg">-{transaction.amount} ETH</h1>
                        <img
                          src="images/send.png"
                          className="transaction-icon"
                        />
                        <div
                          onClick={() => window.open(transaction.linkToPost)}
                          className="platform-icon"
                        />
                        <h2 className="transaction-date">
                          {transaction.createdAt.split(' ')[0]}
                        </h2>
                      </div>
                    )}
                  </div>
                )
              })
            ) : (
              <div id="noTransactions">No Transactions</div>
            )}
          </div>
        </div>
        <div id="menuButton" onClick={() => toggleMenu(false)}>
          =
        </div>
        <div id="menu" />
        <div id="closeMenu" onClick={() => toggleMenu(true)}>
          +
        </div>
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
