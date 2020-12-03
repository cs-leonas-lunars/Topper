import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import chrome from 'sinon-chrome'
// import EtherExchange from "../abis/EtherExchange.json";

let fm = new Fortmatic('pk_test_E28EBDED6FA415DC', 'ropsten')

export const loadWeb3 = async () => {
  setTimeout(async () => {
    await chrome.storage.local.get('ethereum', data =>
      console.log('Ethereum Data (loadData): ', data)
    )
    fm.getProvider().isFortmatic = false
    if (window.ethereum) {
      // || windowVariable.ethereum) {
      console.log('New Metamask!')
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      console.log('Old Metamask!')
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      console.log('Fortmatic!')
      fm.getProvider().isFortmatic = true
      window.web3 = new Web3(fm.getProvider())
    }
    return loadBlockchainData()
  }, 2000)
}

export const loadBlockchainData = async () => {
  if (fm.getProvider().isFortmatic) {
    window.web3.eth.getAccounts((error, accounts) => {
      if (error) throw error
      console.log('FORTMATIC: ', {
        account: accounts[0]
      })
      return {
        account: accounts[0]
      }
    })
  } else {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId()
    console.log('METAMASK: ', {
      account: accounts[0],
      networkId: networkId
    })
    return {
      account: accounts[0],
      networkId: networkId
    }
  }
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
}
