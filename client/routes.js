import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import Transaction from './Transaction'
import {me} from './userActions'

const Routes = () => {
  const [data, setData] = useState({user: null, loading: true})

  // useEffect for user
  useEffect(() => {
    me()
      .then(x => {
        setTimeout(() => {
          setData({user: x, loading: false})
        }, 3000)
      })
      .catch(err => console.error(err))
  }, [])

  return data.loading ? (
    <div className="App">
      <header className="App-header">
        <img id="background" src="/images/topperBackground.gif" />
        <div id="overlay" onClick={() => toggleMenu(true)} />
        <img id="loadIcon" src="/images/loadGif.gif" />
        <img id="loadJar" src="/images/loadJar.png" />
      </header>
    </div>
  ) : (
    <Switch>
      {window.location.href.split('/')[3] === 'send-transaction' ? (
        <Route>
          <Transaction
            user={data.user}
            recipient={window.location.href.split('=')[1]}
          />
        </Route>
      ) : data.user && data.user.id ? (
        <Route>
          <Home user={data.user} />
        </Route>
      ) : (
        <Route>
          <Landing />
        </Route>
      )}
    </Switch>
  )
}

export default withRouter(Routes)
