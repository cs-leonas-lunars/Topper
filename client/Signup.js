import axios from 'axios'
import React, {useState, useEffect} from 'react'
import history from './history'
import {signup} from './userActions'

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Wallet Address</label>
          <input
            onChange={e => setAddress(e.target.value)}
            type="text"
            name="address"
            placeholder="0x7803..."
            value={address}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="bob@topper.com"
            value={email}
            required
          />
        </div>
        {/*}
        <div className="submit-exchange">
          <button className="submit-button" type="submit" value="submit">
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
