window.localStorage.setItem(
  'ethereum',
  JSON.stringify(window.ethereum, (key, value) => {
    if (typeof value === 'function') {
      console.log('FUNCTION: ', value)
      console.log('FUNCTION AS STRING: ', value.toString())
      return value.toString()
    } else {
      return value
    }
  })
)
window.localStorage.setItem('web3', window.web3)

/*
window.localStorage.setItem("callEnable", false);

window.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("callEnable")));
});
*/
