import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import axios from 'axios'

// import EtherExchange from "../abis/EtherExchange.json";

let fm = new Fortmatic('pk_test_E28EBDED6FA415DC', 'ropsten')

export const loadBlockchainData = async data => {
  if (window.ethereum) {
    console.log('New Metamask (Webpage)')
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    const web3 = window.web3
    return {
      account: web3.eth.accounts[0]
    }
  } else if (data && data.ethereum !== 'undefined') {
    console.log('New Metamask (Extension)')
    let recipient = ''
    recipient = await axios.get(
      `http://localhost:5000/api/users/${data.recipient}`
    )
    if (data.recipient && recipient.data) {
      console.log({
        account: data.account,
        recipient: recipient.data.address
      })
      return {
        account: data.account,
        recipient: recipient.data.address
      }
    } else if (data.recipient)
      window.open(
        `https://www.reddit.com/message/compose?to=${
          data.recipient
        }&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${
          data.recipient
        },%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    else
      return {
        account: data.account
      }
  } else if (data) {
    /*else if (window.web3 || (data && data.web3 !== 'undefined')) {
    // Old Metamask (Both)
    console.log('Please update your Metamask!')
    return {}
  }*/ console.log(
      'Fortmatic (Extension)'
    )
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
      console.log({
        account: account,
        recipient: recipient.data.address
      })
      return {
        account: account,
        recipient: recipient.data.address
      }
    } else if (data.recipient)
      window.open(
        `https://www.reddit.com/message/compose?to=${
          data.recipient
        }&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${
          data.recipient
        },%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
      )
    else
      return {
        account: account
      }
  } else {
    console.log('Fortmatic (Webpage)')
    window.web3 = new Web3(fm.getProvider())
    let account = {}
    await window.web3.eth.getAccounts(async (error, accounts) => {
      if (error) throw error
      account = accounts[0]
    })
    return {
      account: account.address
    }
  }
}
