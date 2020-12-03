import React, {useState, useEffect} from 'react'
import {logout} from './userActions'
import {me} from './userActions'

const Home = props => {
  //   const [user, setUser] = useState({})
  //   useEffect(() => {
  //     setUser(null)
  //     me()
  //       .then((x) => setUser(x))
  //       .catch((err) => console.error(err))
  //   }, [])
  // console.log(props, 'PROPS')
  console.log(props, 'USER')
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
