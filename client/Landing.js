import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Transaction from './Transaction'
import {loadBlockchainData} from './loadData'

const Landing = () => {
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
          <img id="brandIcon" src="/images/TipJar.png" />
          <h1 id="logoText">Topper</h1>
          <p id="paraText">Please Log In With Reddit</p>
          {chrome.storage ? (
            <div
              id="login"
              onClick={() => {
                let tabId = null
                chrome.tabs.query({currentWindow: true, active: true}, tabs => {
                  tabId = tabs[0].id
                  setTimeout(() => {
                    chrome.tabs.remove(tabId)
                  }, 10)
                  window.open('https://www.reddit.com/login')
                })
              }}
            >
              <div id="circle" />
              <img id="redditIcon" src="/images/reddit.png" />
              <p id="loginText">Login</p>
            </div>
          ) : (
            <a id="login" href="/auth/reddit">
              <div id="circle" />
              <img id="redditIcon" src="/images/reddit.png" />
              <p id="loginText">Login</p>
            </a>
          )}
          <button
            id="signup"
            onClick={() => {
              let tabId = null
              chrome.tabs.query({currentWindow: true, active: true}, tabs => {
                tabId = tabs[0].id
                setTimeout(() => {
                  chrome.tabs.remove(tabId)
                }, 10)
                window.open('https://www.reddit.com/register')
              })
            }}
          >
            Create An Account
          </button>
          <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
        </header>
      </div>
    )
  )
}

export default Landing
