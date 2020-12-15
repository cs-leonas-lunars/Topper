import React, {useState} from 'react'
import {login} from './userActions'
import DownloadNow from './DownloadNow'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(true)

  const handleSubmit = async e => {
    e.preventDefault()
    const credentials = {
      username,
      password
    }
    const loginStatus = await login(credentials)
    if (loginStatus === 1) {
      setStatus(false)
    }
  }

  return (
    <div className="signup-component">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            <small>Username or Email</small>
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
      {!status && <div>Incorrect Username and/or Password</div>}
    </div>
  )
}

export default Login
