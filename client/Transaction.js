import React, {useState, useEffect} from 'react'

const Transaction = props => {
  const [amount, setAmount] = useState(0)

  const handleSubmit = async e => {
    e.preventDefault()
    const info = {
      account: props.addresses.account,
      recipient: props.addresses.recipient,
      amount
    }
    //await signup(info)  //actually execute the transaction (open Fortmatic)
  }

  return (
    // 5 USD = 0.0085 Ethereum, add exchange rate div
    //divs for recipient and sender just used in the background
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="address">Wallet Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            name="address"
            placeholder="0x7803..."
            value={address}
            required
          />
        </div> */}
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
        <button className="submit-amount">Cancel</button>
      </div>
    </div>
  )
}

export default Transaction
