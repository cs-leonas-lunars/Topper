const ethereum = window.ethereum

export default async function metamaskTransaction(recipient, amount, sender) {
  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    to: recipient, // Required except during contract publications.
    from: sender, // must match user's active address.
    value: amount // Only required to send ether to the recipient from the initiating external account.
  }

  // txHash is a hex string
  // As with any RPC call, it may throw an error
  await ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [transactionParameters]
    })
    .then(txHash => console.log(txHash))
}
