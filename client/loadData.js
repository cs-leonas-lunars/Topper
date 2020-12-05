import Web3 from 'web3'
import Fortmatic from 'fortmatic'
//import axios from 'axios';

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
    return await window.web3.eth.getAccounts((error, accounts) => {
      if (error) throw error
      console.log('FORTMATIC WEBPAGE: ', accounts[0])
      return {
        account: accounts[0]
      }
    })
  }
}

/*
export const loadBlockchainData = async () => {
  // load contract
  // const etherExchangeData = EtherExchange.networks[networkId];
  // change below
  // if (etherExchangeData) {
  //   const etherExchange = new web3.eth.Contract(
  //     EtherExchange.abi,
  //     etherExchangeData.address
  //   );
  //   let balance = await etherExchange.methods.balanceOf(accounts[0]).call();
  //   return {
  //     account: accounts[0],
  //     networkId: networkId,
  //     exchange: etherExchange,
  //     balance: balance.toString(),
  //   };
  // } else {
  //   window.alert("EtherExchange contract not deployed to detected network");
  // }
};
*/
