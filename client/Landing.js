import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Transaction from './Transaction'
import {loadBlockchainData} from './loadData'

const Landing = () => {
  const [state, setState] = useState({initialData: null, loading: true})

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        if (chrome.storage) {
          let timer = setInterval(() => {
            chrome.storage.local.get(data => {
              if (data.status && JSON.parse(data.status)) {
                if (data.onReddit && JSON.parse(data.onReddit)) {
                  loadBlockchainData(data).then(x => {
                    setState({initialData: x, loading: false})
                  })
                } else {
                  console.log('Not on Reddit')
                  setState({initialData: null, loading: false})
                  //Render NonReddit Extension Page
                }
                return clearInterval(timer)
              }
            })
          }, 250)
        } else {
          loadBlockchainData().then(x =>
            setState({initialData: x, loading: false})
          )
        }
      }, 3000)
    }
  }, [])

  return (
    // create a ternary operator which if the recipient address exists, render a new page to specify amount (choose amount, confirm, cancel => cancel clears recipient from state and returns user to main landing page)
    //if null load regular extension
    state.initialData && state.initialData.recipient ? (
      <Switch>
        <Route>
          <Transaction addresses={state.initialData} />
        </Route>
      </Switch>
    ) : (
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
