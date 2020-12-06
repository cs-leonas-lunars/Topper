import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Transaction from './Transaction'
import {loadBlockchainData} from './loadData'

const Home = props => {
  const [state, setState] = useState({
    initialData: null,
    loading: true,
    onReddit: false
  })

  useEffect(() => {
    setTimeout(() => {
      if (chrome.storage) {
        let timer = setInterval(() => {
          chrome.storage.local.get(data => {
            if (data.status && JSON.parse(data.status)) {
              if (data.onReddit && JSON.parse(data.onReddit)) {
                loadBlockchainData(data).then(x => {
                  setState({initialData: x, loading: false, onReddit: true})
                })
              } else {
                console.log('Not on Reddit')
                setState({initialData: null, loading: false, onReddit: false})
                //Render NonReddit Extension Page
              }
              return clearInterval(timer)
            }
          })
        }, 250)
      } else {
        loadBlockchainData().then(x =>
          setState({initialData: x, loading: false, onReddit: true})
        )
      }
    }, 3000)
  }, [])

  return (
    // create a ternary operator which if the recipient address exists, render a new page to specify amount (choose amount, confirm, cancel => cancel clears recipient from state and returns user to main landing page)
    //if null load regular extension
    state.loading ? (
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" onClick={() => toggleMenu(true)} />
          <img id="loadIcon" src="/images/loadGif.gif" />
          <img id="loadJar" src="/images/loadJar.png" />
        </header>
      </div>
    ) : state.initialData && state.initialData.recipient ? (
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
          {chrome.storage ? (
            <div>
              username: {props.user}
              <button onClick={() => logout()}>Logout</button>
            </div>
          ) : (
            <div>
              username: {props.user.username}
              <button onClick={() => logout()}>Logout</button>
            </div>
          )}
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

export default Home
