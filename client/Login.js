import React, {useState} from 'react'
import {login} from './userActions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const credentials = {
      email,
      password
    }
    await login(credentials)
  }

  return (
    <div className="signup-component">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input
            onChange={e => setEmail(e.target.value)}
            name="email"
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
