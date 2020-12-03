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
  console.log(props, 'PROPS')
  return (
    <div>
      Home
      <div>username: {props.user.username}</div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default Home
