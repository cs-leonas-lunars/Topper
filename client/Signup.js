import axios from 'axios'
import React, {useState, useEffect} from 'react'
import history from './history'
import {signup} from './userActions'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      email,
      password
    }
    await signup(info)
  }

  return (
    <div id="signup-component">
      <form onSubmit={handleSubmit} name={name}>
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
        <button
          id="signup-button"
          type="submit"
          value="submit"
          onClick={() => window.close()}
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default Signup
