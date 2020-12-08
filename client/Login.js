import React, {useState} from 'react'
import {login} from './userActions'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const credentials = {
      username,
      password
    }
    await login(credentials)
  }

  return (
    <div className="signup-component">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input
            onChange={e => setUsername(e.target.value)}
            name="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
          />
        </div>
        <button className="signup-button" type="submit" value="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
