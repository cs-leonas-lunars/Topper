import React, {useState, useEffect} from 'react'
import fortmaticTransaction from './fortmaticTransaction'
import metaMaskTransaction from './metaMaskTransaction'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import {loadBlockchainData} from './loadData'

const Transaction = props => {
  const [amount, setAmount] = useState(0)
  const [cancelStatus, setCancelStatus] = useState(0)
  const [data, setData] = useState({initialData: null, loading: true})

  useEffect(() => {
    loadBlockchainData(props.recipient).then(x => {
      console.log(x)
      setData({initialData: x, loading: false})
    })
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      account: data.initialData.account,
      recipient: data.initialData.recipient,
      amount
    }
    if (data.initialData.walletType === 'Metamask') {
      metaMaskTransaction(info.recipient, info.amount, info.account)
    } else {
      fortmaticTransaction(info.recipient, info.amount, info.account)
    }
  }

  const cancelTransaction = () => {
    setCancelStatus(1)
  }

  return (
    // 5 USD = 0.0085 Ethereum, add exchange rate div
    //divs for recipient and sender just used in the background
    data.loading ? (
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" onClick={() => toggleMenu(true)} />
          <img id="loadIcon" src="/images/loadGif.gif" />
          <img id="loadJar" src="/images/loadJar.png" />
        </header>
      </div>
    ) : cancelStatus ? (
      <div>{window.close()}</div>
    ) : (
      <div className="App">
        {console.log(props.recipient)}
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" />
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
              Close
            </button>
          </div>
        </header>
      </div>
    )
  )
}

export default Transaction
