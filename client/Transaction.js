import React, {useState, useEffect} from 'react'
import fortmaticTransaction from './fortmaticTransaction'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import {me, createTransaction} from './userActions'

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
    //await createTransaction(info)
    //await signup(info)  //actually execute the transaction (open Fortmatic)
    fortmaticTransaction(info.recipient, info.amount, info.account).then(() => {
      console.log('SUCCESS!')
    })
  }

  const cancelTransaction = () => {
    setCancelStatus(1)
    window.close()
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
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" />
          {console.log(props.addresses)}
          <form onSubmit={handleSubmit}>
            <div>
              <label id="setAmountLabel" htmlFor="ethAmount">
                ETH Amount
              </label>
              <input
                id="setAmountInput"
                onChange={e => setAmount(e.target.value)}
                type="float"
                name="amount"
                autoComplete="off"
                value={amount}
                required
              />
            </div>
            <div className="submit-transaction">
              <button
                className="submit-amount"
                id="submitTransaction"
                type="submit"
                value="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="cancel-transaction">
            <button
              type="button"
              id="cancelTransaction"
              className="submit-amount"
              onClick={cancelTransaction}
            >
              Cancel
            </button>
          </div>
        </header>
      </div>
    )
  )
}

export default Transaction
