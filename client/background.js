window.localStorage.setItem('ethereum', window.ethereum)
window.localStorage.setItem('web3', window.web3)

/*
chrome.runtime.sendMessage(
  "eldblkjfmbhajfladajjicjacccfheii",
  { ethereum: window.ethereum, web3: window.web3 },
  (res) => {
    console.log("SENT!");
    console.log(res);
  }
);
*/

/*
chrome.storage.local.set({ ethereum: window.ethereum }, () => {
  chrome.storage.local.get("ethereum", (data) => {
    console.log("STORED DATA ETHEREUM: ", data);
  });
});

chrome.storage.local.set({ web3: window.web3 }, () => {
  chrome.storage.local.get("web3", (data) => {
    console.log("STORED DATA WEB3: ", data);
  });
});
*/
