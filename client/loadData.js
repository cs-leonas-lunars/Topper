import Web3 from 'web3'
// import EtherExchange from "../abis/EtherExchange.json";

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    window.alert(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    )
  }
}

export const loadBlockchainData = async () => {
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  const networkId = await web3.eth.net.getId()

  return {
    account: accounts[0],
    networkId: networkId
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
