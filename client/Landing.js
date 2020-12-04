import React, {useState, useEffect} from 'react'
// import history from './history'
import {loadBlockchainData, loadWeb3} from './loadData'

import {me, login, logout} from './userActions'

const Landing = ({history}) => {
  const [state, setState] = useState({initialData: null, loading: true})
  const [user, setUser] = useState(null)

  //useEffect for blockchain stuff
  useEffect(() => {
    setTimeout(() => {
      if (chrome.storage) {
        chrome.storage.local.get(function(data) {
          setState({initialData: null, loading: true})
          loadWeb3(data).then(x => {
            /*
            chrome.storage.local.set({callEnable: true}, () => {
              console.log('Successfully Stored!')
            })
            */
            setState({initialData: x, loading: false})
          })
        })
      } else {
        setState({initialData: null, loading: true})
        loadWeb3().then(x => setState({initialData: x, loading: false}))
      }
    }, 2000)
  }, [])

  // useEffect for user
  useEffect(() => {
    setUser(null)
    me()
      .then(x => setUser(x))
      .catch(err => console.error(err))
  }, [])

  useEffect(
    () => {
      if (user) history.push('/home')
    },
    [history, user]
  )

  return (
    <div className="App">
      <header className="App-header">
        <img id="background" src="/images/topperBackground.gif" />
        <div id="overlay" onClick={() => toggleMenu(true)} />
        <img id="brandIcon" src="/images/TipJar.png" />
        <h1 id="logoText">Topper</h1>
        <p id="paraText">Please Log In With Reddit</p>
        <button id="login">
          <div id="circle" />
          <img id="redditIcon" src="/images/reddit.png" />

          <a id="loginText" href="/auth/reddit">
            Login
          </a>
        </button>
        <button id="signup">Create An Account</button>
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

export default Landing
