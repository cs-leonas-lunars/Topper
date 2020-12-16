import React, {useEffect, useState} from 'react'
import {signup} from './userActions'

const Checkbox = props => <input type="checkbox" {...props} />

// local signup
const Signup = () => {
  const [username, setUsername] = useState('') // username
  const [email, setEmail] = useState('') // user email
  const [password, setPassword] = useState('') // user password
  const [confirmPassword, setConfirmPassword] = useState('') // confirm password
  const [status, setStatus] = useState(true) // signup success/failure
  const [validatePassword, setValidatePassword] = useState(true) // confirm password boolean
  const [checked, setChecked] = useState(false) // terms and conditions box
  const [strength, setStrength] = useState(false) // require strong password

  // useEffect for confirm password
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

  // useEffect to require strong password
  useEffect(
    () => {
      const strongRegex = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
      )
      const test = password.match(strongRegex)
      if (!test) {
        setStrength(false)
      } else {
        setStrength(true)
      }
    },
    [password]
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

  return (
    <div className="signup-component">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={e => setUsername(e.target.value)}
            name="username"
            type="text"
            placeholder="Username..."
            id="inputEmail"
          />
        </div>
        <div>
          <input
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="text"
            placeholder="Email..."
            id="inputConfirmPassword"
          />
        </div>
        <div>
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Password"
            id="inputUsername"
          />
        </div>
        <div>
          <input
            onChange={e => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            type="password"
            placeholder="Repeat Password..."
            id="confirmPassword"
            id="inputPassword"
          />
        </div>
        <button
          className="signup-button"
          type="submit"
          value="submit"
          disabled={validatePassword || !checked || !strength}
        >
          Sign up
        </button>
      </form>
      <label id="checkbox">
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        <small>
          By checking this box, I agree to Topper's terms and conditions
        </small>
      </label>
      <div id="inputErrors">
        {validatePassword && <div>Passwords must match</div>}
        {!status && <div>Signup Failed</div>}
        {!strength && (
          <small>
            Password must contain 1 lowercase, 1 uppcase, 1 numeric, and 1
            special character and must be 8 characters or longer
          </small>
        )}
      </div>
    </div>
  )
}

export default Signup
