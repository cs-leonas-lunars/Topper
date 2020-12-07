import React from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Transaction from './Transaction'

const Landing = props => {
  return props.addresses && props.addresses.recipient ? (
    <Switch>
      <Route>
        <Transaction addresses={props.addresses} />
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
                if (props.onPage && props.currentPage === 'reddit') {
                  setTimeout(() => {
                    chrome.tabs.remove(tabId)
                  }, 10)
                  window.open('https://www.reddit.com/login')
                } else if (props.onPage && props.currentPage === 'twitter') {
                  setTimeout(() => {
                    chrome.tabs.remove(tabId)
                  }, 10)
                  window.open('https://www.twitter.com/login')
                }
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
              if (props.onPage && props.currentPage === 'reddit') {
                setTimeout(() => {
                  chrome.tabs.remove(tabId)
                }, 10)
                window.open('https://www.reddit.com/register')
              } else if (props.onPage && props.currentPage === 'twitter') {
                setTimeout(() => {
                  chrome.tabs.remove(tabId)
                }, 10)
                window.open('https://www.twitter.com/signup')
              }
            })
          }}
        >
          Create An Account
        </button>
        <p id="ethereumText">E T H E R E U M · P O W E R E D</p>
      </header>
    </div>
  )
}

export default Landing
