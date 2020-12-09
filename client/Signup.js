import React, {useState} from 'react'
import {signup} from './userActions'

// local signup
const Signup = props => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      username,
      email,
      password,
      address: props.account
    }
    await signup(info)
  }

  return props.account ? (
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
        <div>
          <label htmlFor="confirmPassword">
            <small>Confirm Password</small>
          </label>
          <input
            onChange={e => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            type="password"
          />
        </div>
        <button className="signup-button" type="submit" value="submit">
          Sign up
        </button>
      </form>
    </div>
  ) : (
    <div id="connectWallet">
      Connect Your Wallet
      {console.log('Connect a wallet first!')}
    </div>
  )
}

export default Signup
