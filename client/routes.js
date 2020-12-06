import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import {me} from './userActions'

const Routes = () => {
  const [user, setUser] = useState({})

  //useEffect for blockchain stuff

  // useEffect for user
  useEffect(() => {
    setUser(null)
    me()
      .then(x => {
        console.log('USER: ', x)
        setUser(x)
        //window.localStorage.setItem("username", x.)
      })
      .catch(err => console.error(err))
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
