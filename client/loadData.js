import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import axios from 'axios'

let fm = new Fortmatic('pk_test_E28EBDED6FA415DC', 'ropsten')

// beginning transaction logic
export const loadBlockchainData = async recipientUsername => {
  if (window.ethereum) {
    console.log('New Metamask')
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    let ethBalance = await window.web3.eth.getBalance(ethereum.selectedAddress)
    ethBalance = web3.utils.fromWei(ethBalance)
    ethBalance = Number.parseFloat(ethBalance).toFixed(4) + ' ETH'
    let recipient = null
    if (recipientUsername)
      recipient = await axios.get(
        `http://localhost:5000/api/users/${recipientUsername}`
      )
    if (!recipient && recipientUsername) {
      window.location.replace(
        `https://www.reddit.com/message/compose?to=${recipientUsername}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${recipientUsername},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    } else if (!recipient) {
      return {
        account: ethereum.selectedAddress,
        walletType: 'Metamask',
        balance: ethBalance
      }
    } else if (recipient && recipientUsername) {
      return {
        account: ethereum.selectedAddress,
        recipient: recipient.data,
        walletType: 'Metamask',
        balance: ethBalance
      }
    }
  } else if (window.web3) {
    console.log('Old Metamask!')
    alert('Please Update Your Metamask!')
    /*
    window.web3 = new Web3(window.web3.currentProvider)
    let recipient = await axios.get(
      `http://localhost:5000/api/users/${recipientUsername}`
    )
    return {
      account: web3.eth.accounts[0],
      recipient: recipient.data.address,
    }
    */
  } else {
    console.log('Fortmatic')
    window.web3 = new Web3(fm.getProvider())
    await web3.currentProvider.enable()
    let account = await web3.eth.getAccounts()
    let ethBalance = await window.web3.eth.getBalance(account[0])
    ethBalance = web3.utils.fromWei(ethBalance)
    ethBalance = Number.parseFloat(ethBalnce).toFixed(4) + ' ETH'
    let recipient = null
    if (recipientUsername)
      recipient = await axios.get(
        `http://localhost:5000/api/users/${recipientUsername}`
      )
    if (!recipient && recipientUsername) {
      window.location.replace(
        `https://www.reddit.com/message/compose?to=${recipientUsername}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${recipientUsername},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    } else if (!recipient) {
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

  /* else if (data && data.ethereum !== 'undefined') {
    console.log('New Metamask (Extension)')
    // New Metamask (Extension)
    let recipient = await axios.get(
      `http://localhost:5000/api/users/${data.recipient}`
    )
    if (data.recipient && recipient.data) {
      return {
        account: data.account,
        recipient: recipient.data.address,
      }
    } else if (data.recipient)
      window.open(
        `https://www.reddit.com/message/compose?to=${data.recipient}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${data.recipient},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    else
      return {
        account: data.account,
      }
  } else if (window.web3 || (data && data.web3 !== 'undefined')) {
    // Old Metamask (Both)
    console.log('Please update your Metamask!')
    return {}
  } else if (data) {
    console.log('Fortmatic (Extension)')
    // No Metamask - Fortmatic (Extension)
    window.web3 = new Web3(fm.getProvider())
    let account = {}
    let recipient = {}
    await window.web3.eth.getAccounts(async (error, accounts) => {
      if (error) throw error
      account = accounts[0]
    })
    await window.web3.eth.getBalance(account, async (error, balance) => {
      if (error) throw error
      console.log(balance)
    })
    recipient = await axios.get(
      `http://localhost:5000/api/users/${data.recipient}`
    )
    if (data.recipient && recipient.data) {
      return {
        account: account,
        recipient: recipient.data.address,
      }
    } else if (data.recipient)
      window.open(
        `https://www.reddit.com/message/compose?to=${data.recipient}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${data.recipient},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    else
      return {
        account: account,
      }
  }*/
}
