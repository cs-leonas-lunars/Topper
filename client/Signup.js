import React, {useEffect, useState} from 'react'
import {signup} from './userActions'

const Checkbox = props => <input type="checkbox" {...props} />

// local signup
const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState(true)
  const [validatePassword, setValidatePassword] = useState(true)
  const [checked, setChecked] = useState(false)

  useEffect(
    () => {
      if (confirmPassword === password) {
        setValidatePassword(false)
      } else {
        setValidatePassword(true)
      }
    },
    [password, confirmPassword]
  )

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      username,
      email,
      password
    }
    const signupStatus = await signup(info)
    if (signupStatus === 1) {
      setStatus(false)
    }
  }

  console.log(validatePassword, checked, 'both should be true')

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
        <button
          className="signup-button"
          type="submit"
          value="submit"
          disabled={validatePassword || !checked}
        >
          Sign up
        </button>
      </form>
      <label>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        <small>
          By checking this box, I agree to Topper's terms and conditions
        </small>
      </label>
      <div>
        {validatePassword && <div>Passwords must match</div>}
        {!status && <div>Signup Failed</div>}
      </div>
    </div>
  )
}

export default Signup
