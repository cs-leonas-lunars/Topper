// Initialize provider
import Fortmatic from 'fortmatic'
import Web3 from 'web3'

// test network for transactions
const fm = new Fortmatic('pk_test_E28EBDED6FA415DC', 'ropsten')

// web3 is for communicating with extensions
let web3 = new Web3(fm.getProvider())

export default function fortmaticTransaction(
  // necessary variables for transaction
  recipientAddress,
  amount,
  senderAddress
) {
  const sendValue = web3.utils.toWei(amount, 'ether') // Convert 1 ether to wei

  // Get user account wallet address first

  // Construct Ether transaction params
  const txnParams = {
    from: senderAddress,
    to: recipientAddress,
    value: sendValue
  }

  // Send Ether transaction with web3
  web3.eth.sendTransaction(txnParams, (error, txnHash) => {
    if (error) throw error
    console.log(txnHash)
  })
}
