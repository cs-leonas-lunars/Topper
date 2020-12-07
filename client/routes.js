import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import {me} from './userActions'
import {loadBlockchainData} from './loadData'

const Routes = () => {
  const [state, setState] = useState({
    initialData: null,
    loading: true,
    onPage: false,
    currentPage: null,
    currentUser: null
  })

  // useEffect for user
  useEffect(() => {
    if (chrome.storage) {
      window.onload = () => {
        setTimeout(() => {
          let timer = setInterval(() => {
            chrome.storage.local.get(data => {
              if (data.status && JSON.parse(data.status)) {
                if (data.onPage && JSON.parse(data.onPage)) {
                  console.log('USER SIGNED IN: ', data.currentUser)
                  loadBlockchainData(data).then(x => {
                    setState({
                      initialData: x,
                      loading: false,
                      onPage: true,
                      currentPage: data.currentPage,
                      currentUser: data.currentUser
                    })
                  })
                } else {
                  console.log('Not on Reddit')
                  setState({
                    initialData: null,
                    loading: false,
                    onPage: false,
                    currentPage: null,
                    currentUser: null
                  })
                  //Render NonReddit Extension Page
                }
                return clearInterval(timer)
              }
            })
          }, 1000)
        }, 3000)
      }
    } else {
      loadBlockchainData().then(data => {
        me()
          .then(x => {
            setState({
              initialData: data,
              loading: false,
              onPage: false,
              currentPage: null,
              currentUser: x
            })
          })
          .catch(err => console.error(err))
      })
    }
  }, [])

  return state.loading ? (
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
      {state.currentUser ? (
        <Route>
          <Home
            user={state.currentUser}
            addresses={state.initialData}
            onPage={state.onPage}
            currentPage={state.currentPage}
          />
        </Route>
      ) : (
        <Route>
          <Landing
            addresses={state.initialData}
            onPage={state.onPage}
            currentPage={state.currentPage}
          />
        </Route>
      )}
    </Switch>
  )
}

export default withRouter(Routes)
