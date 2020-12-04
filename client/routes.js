import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Transaction from './Transaction'
import Home from './Home'
import {loadBlockchainData} from './loadData'
import {me} from './userActions'

const Routes = () => {
  const [state, setState] = useState({initialData: null, loading: true})
  const [user, setUser] = useState({})

  //useEffect for blockchain stuff
  useEffect(() => {
    setState({initialData: null, loading: true})
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

  // useEffect for user
  useEffect(() => {
    setUser(null)
    me()
      .then(x => setUser(x))
      .catch(err => console.error(err))
  }, [])

  return (
    // create a ternary operator which if the recipient address exists, render a new page to specify amount (choose amount, confirm, cancel => cancel clears recipient from state and returns user to main landing page)
    //if null load regular extension
    state.initialData.recipientAddress ? (
      <Switch>
        <Route
          path="/transaction"
          render={() => <Transaction addresses={state.initialData} />}
        />
        <Redirect from="/" to="transaction" />
      </Switch>
    ) : (
      <Switch>
        <Route path="/home" render={() => <Home user={user} />} />
        <Route path="/landing" component={Landing} />
        <Redirect from="/" to="landing" />
      </Switch>
    )
  )
}

export default withRouter(Routes)
