import React, {useState, useEffect} from 'react'
import fortmaticTransaction from './fortmaticTransaction'
import metaMaskTransaction from './metaMaskTransaction'
import {loadBlockchainData} from './loadData'
import {createTransaction} from './userActions'

// transaction component
const Transaction = props => {
  const [amount, setAmount] = useState(0)
  const [cancelStatus, setCancelStatus] = useState(0)
  const [data, setData] = useState({transferData: null, loading: true})

  useEffect(() => {
    setTimeout(() => {
      loadBlockchainData(props.recipient).then(x => {
        setData({transferData: x, loading: false})
      })
    }, 2000)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      account: data.transferData.account,
      recipient: data.transferData.recipient.address,
      amount
    }
    if (data.transferData.walletType === 'Metamask') {
      await metaMaskTransaction(info.recipient, info.amount, info.account)
    } else {
      await fortmaticTransaction(info.recipient, info.amount, info.account)
    }
    await createTransaction({
      recipientId: data.transferData.recipient.id,
      senderId: props.user.id,
      amount,
      linkToPost: props.link
    })
    window.close()
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
          <div id="overlay" />
          <div id="loadContainer">
            <img id="loadIcon" src="/images/loadGif.gif" />
            <video
              src="/images/loadGif.gif"
              id="loadIcon"
              playsInline
              muted
              loop
              style={{pointerEvents: 'none'}}
              poster="/images/loadGif.gif"
            />
            <img id="loadJar" src="/images/loadJar.png" />
          </div>
        </header>
      </div>
    ) : cancelStatus ? (
      <div>{window.close()}</div>
    ) : (
      <div className="App">
        <header className="App-header">
          <img id="background" src="/images/topperBackground.gif" />
          <div id="overlay" />
          <form onSubmit={handleSubmit}>
            <div>
              <label id="setAmountLabel" htmlFor="ethAmount">
                <span style={{fontFamily: 'Montserrat-Thin'}}>
                  Send Ether To{'\n'}
                </span>
                {data.transferData.recipient.username}
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
