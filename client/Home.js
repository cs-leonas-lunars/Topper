import React, {useState, useEffect} from 'react'
import {logout, pushAddress} from './userActions'
import {loadBlockchainData} from './loadData'
import AuthButtons from './AuthButtons'

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
        <img id="profileIcon" src="/images/profile.png" alt="profile icon" />
        <h1 id="logoText">Topper</h1>
        <h1 id="titleText" onClick={() => setComponent(0)}>
          {props.user.username}
          <AuthButtons />
        </h1>
        <p id="paraText">{data.accountData.balance}</p>
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
