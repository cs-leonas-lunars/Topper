import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import Signup from './Signup'
import Transaction from './Transaction'
import {me} from './userActions'
import Signup from './Signup'

const Routes = () => {
  const [user, setUser] = useState(null)

  // useEffect for user
  useEffect(() => {
    me()
      .then(x => {
        setUser(x)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <Switch>
      {window.location.href.split('/')[3] === 'send-transaction' ? (
        <Route>
          <Transaction
            user={user}
            recipient={window.location.href.split('=')[1]}
          />
        </Route>
      ) : user ? (
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
