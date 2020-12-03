import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import Signup from './Signup'
import {loadWeb3, loadBlockchainData} from './loadData'
import {me} from './userActions'

const Routes = () => {
  const [state, setState] = useState({initialData: null, loading: true})
  const [user, setUser] = useState({})

  //useEffect for blockchain stuff
  useEffect(() => {
    setState({initialData: null, loading: true})
    loadWeb3()
      .then(() => loadBlockchainData())
      .then(x => setState({initialData: x, loading: false}))
  }, [])

  // useEffect for user
  useEffect(() => {
    setUser(null)
    me()
      .then(x => setUser(x))
      .catch(err => console.error(err))
  }, [])

  return (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/home" render={() => <Home user={user} />} />
      <Route component={Landing} />
      {/* <Redirect from="/" to="landing" /> */}
    </Switch>
  )
}

export default withRouter(Routes)
