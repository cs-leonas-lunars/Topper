import React, {useState} from 'react'
import {signup} from './userActions'

// local signup
const Signup = () => {
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      address,
      email
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
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        {/*}
        <div className="submit-exchange">
          <button id="signup-button" type="submit" value="submit">
            Finish!
          </button>
        </div>
        */}
      </form>
      <button
        className="submit-button"
        type="button"
        onClick={() => window.close()}
      >
        Finish!
      </button>
    </div>
  )
}

export default Signup
