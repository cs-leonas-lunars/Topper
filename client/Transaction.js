import React, {useState, useEffect} from 'react'
import fortmaticTransaction from './fortmaticTransaction'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import {me} from './userActions'

const Transaction = props => {
  const [amount, setAmount] = useState(0)
  const [cancelStatus, setCancelStatus] = useState(0)
  const [user, setUser] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      account: props.addresses.account,
      recipient: props.addresses.recipient,
      amount
    }
    //await signup(info)  //actually execute the transaction (open Fortmatic)
    fortmaticTransaction(info.recipient, info.amount, info.account).then(() => {
      console.log('SUCCESS!')
    })
  }

  const cancelTransaction = () => {
    setCancelStatus(1)
  }
  // useEffect for user
  useEffect(() => {
    setUser(null)
    me()
      .then(x => setUser(x))
      .catch(err => console.error(err))
  }, [])

  return (
    // 5 USD = 0.0085 Ethereum, add exchange rate div
    //divs for recipient and sender just used in the background
    cancelStatus ? (
      <Switch>
        {user ? (
          <Route>
            <Home user={user} />
          </Route>
        ) : (
          <Route>
            <Landing />
          </Route>
        )}
      </Switch>
    ) : (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="ethAmount">ETH Amount</label>
            <input
              onChange={e => setAmount(e.target.value)}
              type="float"
              name="amount"
              placeholder="0.1"
              value={amount}
              required
            />
          </div>

          <div className="submit-transaction">
            <button className="submit-amount" type="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="cancel-transaction">
          <button
            type="button"
            className="submit-amount"
            onClick={cancelTransaction}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  )
}

export default Transaction
