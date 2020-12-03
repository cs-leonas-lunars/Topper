import React from 'react'
import {logout} from './userActions'

const Home = props => {
  return !props.user ? (
    <div>Loading</div>
  ) : (
    <div>
      username: {props.user.username}
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default Home
