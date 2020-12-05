import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import axios from 'axios'

// import EtherExchange from "../abis/EtherExchange.json";

let fm = new Fortmatic('pk_test_E28EBDED6FA415DC', 'ropsten')

export const loadBlockchainData = async data => {
  if (window.ethereum) {
    // New Metamask (WebPage)
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    const web3 = window.web3
    let account = web3.eth.accounts[0]
    console.log('METAMASK WEBPAGE: ', account)
    return {account}
  } else if (data && data.ethereum !== 'undefined') {
    // New Metamask (Extension)
    console.log('METAMASK EXTENSION: ', data.account)
    console.log('RECIPIENT: ', data.recipient)
    //also set user wallet to userdb entry
    //let recipient = axios.get("/users", data.recipient);
    if (data.recipient)
      return {
        account: data.account,
        recipient: '0xD3833FA45edd662de6F828BF332DAf4b78Af0365' //recipient wallet
      }
    else
      return {
        account: data.account
      }
  } else if (window.web3 || (data && data.web3 !== 'undefined')) {
    // Old Metamask (Both)
    console.log('Please update your Metamask!')
    return {}
  } else if (data) {
    // No Metamask - Fortmatic (Extension)
    window.web3 = new Web3(fm.getProvider())
    let account = ''
    let recipient = '0xD3833FA45edd662de6F828BF332DAf4b78Af0365' //hardcoded for tests
    await window.web3.eth.getAccounts((error, accounts) => {
      if (error) throw error
      console.log('FORTMATIC EXTENSION: ', accounts[0])
      console.log('RECIPIENT: ', data.recipient)
      //set user wallet to userdb entry
      //let recipient = axios.get("/users", data.recipient);
      account = accounts[0]
    })
    if (data.recipient)
      return {
        account,
        recipient //recipient wallet
      }
    else
      return {
        account
      }
  } else {
    // No Metamask - Fortmatic (WebPage)
    window.web3 = new Web3(fm.getProvider())
    let account = ''
    await window.web3.eth.getAccounts((error, accounts) => {
      if (error) throw error
      console.log('FORTMATIC WEBPAGE: ', accounts[0])
      account = accounts[0]
    })
    return {
      account: accounts[0]
    }
  }
}

/*
// New Metamask (WebPage)
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    const web3 = window.web3
    account = await axios.get(`/users/${session.user.username}`) // current user on the session (Dunney)
    let browserAddress = web3.eth.accounts[0]
    if (account.address !== browserAddress) {
      account.address = browserAddress
      await axios.put('/users', account)
    }
    return {
      account: account.address,
    }
*/

/*
// New Metamask (Extension)
    let account = await axios.get(`/users/${session.user.username}`) // current user on the session (Dunney)
    let browserAddress = data.account;
    if (account.address !== browserAddress) {
      account.address = browserAddress
      await axios.put('/users', account)
    }
    let recipientUsername = data.recipient;
    let recipient = await axios.get(`/users/${recipientUsername}`)
    return {
      account: account.address,
      recipient: recipient.address,
    }
*/

/*
// No Metamask - Fortmatic (Extension)
    window.web3 = new Web3(fm.getProvider())
    let account = {}
    let recipient = {}
    await window.web3.eth.getAccounts(async (error, accounts) => {
      if (error) throw error
      account = await axios.get(`/users/${session.user.username}`) // current user on the session (Dunney)
      let browserAddress = accounts[0]
      if (account.address !== browserAddress) {
        account.address = browserAddress
        await axios.put('/users', account)
      }
      let recipientUsername = data.recipient
      recipient = await axios.get(`/users/${recipientUsername}`)
    })
    return {
      account: account.address,
      recipient: recipient.address,
    }
*/

/*
// No Metamask - Fortmatic (WebPage)
    window.web3 = new Web3(fm.getProvider())
    let account = {}
    await window.web3.eth.getAccounts(async (error, accounts) => {
      if (error) throw error
      account = await axios.get(`/users/${session.user.username}`) // current user on the session (Dunney)
      let browserAddress = accounts[0]
      if (account.address !== browserAddress) {
        account.address = browserAddress
        await axios.put('/users', account)
      }
      return {
        account: account.address,
      }
    })
*/
