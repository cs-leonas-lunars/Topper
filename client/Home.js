import React from 'react'
import {logout} from './userActions'
import Signup from './Signup'

const Home = props => {
  if (!props.user) {
    return <div>Loading</div>
  }
  return !props.user.address ? (
    <Signup />
  ) : (
    // it would be nice to add the logout button to the top right like a single-button navbar, as well as an 'about (us)' component link/button too
    <div>
      username: {props.user.username}
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default Home
