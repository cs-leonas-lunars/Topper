import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import axios from 'axios'

let fm = new Fortmatic('pk_test_E28EBDED6FA415DC', 'ropsten')

// beginning transaction logic
export const loadBlockchainData = async recipientUsername => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    let ethBalance = await window.web3.eth.getBalance(ethereum.selectedAddress)
    ethBalance = web3.utils.fromWei(ethBalance)
    ethBalance = Number.parseFloat(ethBalance).toFixed(4) + ' ETH'
    let recipient = null
    if (recipientUsername)
      recipient = await axios.get(
        `https://topper-fsa.herokuapp.com/api/users/${recipientUsername}`
      )
    if ((!recipient || !recipient.data) && recipientUsername) {
      window.location.replace(
        `https://www.reddit.com/message/compose?to=${recipientUsername}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${recipientUsername},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    } else if ((!recipient || !recipient.data) && !recipientUsername) {
      return {
        account: ethereum.selectedAddress,
        walletType: 'Metamask',
        balance: ethBalance
      }
    } else if (recipient && recipient.data && recipientUsername) {
      return {
        account: ethereum.selectedAddress,
        recipient: recipient.data,
        walletType: 'Metamask',
        balance: ethBalance
      }
    }
  } else if (window.web3) {
    alert('Please Update Your Metamask!')
  } else {
    window.web3 = new Web3(fm.getProvider())
    await web3.currentProvider.enable()
    let account = await web3.eth.getAccounts()
    let ethBalance = await window.web3.eth.getBalance(account[0])
    ethBalance = web3.utils.fromWei(ethBalance)
    ethBalance = Number.parseFloat(ethBalnce).toFixed(4) + ' ETH'
    let recipient = null
    if (recipientUsername)
      recipient = await axios.get(
        `https://topper-fsa.herokuapp.com/api/users/${recipientUsername}`
      )
    if (recipient && !recipient.data && recipientUsername) {
      window.location.replace(
        `https://www.reddit.com/message/compose?to=${recipientUsername}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${recipientUsername},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    } else if (recipient && !recipient.data) {
      return {
        account: account[0],
        walletType: 'Fortmatic',
        balance: ethBalance
      }
    } else if (recipient && recipientUsername) {
      return {
        account: account[0],
        recipient: recipient.data,
        walletType: 'Fortmatic',
        balance: ethBalance
      }
    }
  }
}
