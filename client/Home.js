import React from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Transaction from './Transaction'

const Home = props => {
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
