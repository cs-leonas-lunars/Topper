import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import Signup from './Signup'
import Transaction from './Transaction'
import {me} from './userActions'

const Routes = () => {
  const [user, setUser] = useState(null)

  // useEffect for user
  useEffect(() => {
    if (chrome.storage) {
      setTimeout(() => {
        let timer = setInterval(() => {
          chrome.storage.local.get(data => {
            if (data.status && JSON.parse(data.status)) {
              if (data.onReddit && JSON.parse(data.onReddit)) {
                console.log('USER ROUTES: ', data.currentUser)
                setUser(data.currentUser)
              } else {
                console.log('Not on Reddit')
                //Render NonReddit Extension Page
              }
              return clearInterval(timer)
            }
          })
        }, 250)
      }, 3000)
    } else {
      me()
        .then(x => {
          setUser(x)
        })
        .catch(err => console.error(err))
    }
  }, [])

  return (
    <Switch>
      {user ? (
        <Route>
          <Home user={user} />
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
