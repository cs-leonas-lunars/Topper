;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    /***/ './client/Transaction.js':
      /*!*******************************!*\
  !*** ./client/Transaction.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _fortmaticTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./fortmaticTransaction */ './client/fortmaticTransaction.js'
        )
        /* harmony import */ var _metaMaskTransaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./metaMaskTransaction */ './client/metaMaskTransaction.js'
        )
        /* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./loadData */ './client/loadData.js'
        )
        /* harmony import */ var _userActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./userActions */ './client/userActions.js'
        )

        // transaction component

        const Transaction = props => {
          const [amount, setAmount] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )(0)
          const [cancelStatus, setCancelStatus] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )(0)
          const [data, setData] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )({
            transferData: null,
            loading: true
          })
          Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            setTimeout(() => {
              Object(_loadData__WEBPACK_IMPORTED_MODULE_3__.loadBlockchainData)(
                props.recipient
              ).then(x => {
                setData({
                  transferData: x,
                  loading: false
                })
              })
            }, 2000)
          }, [])

          const handleSubmit = async e => {
            e.preventDefault()
            const info = {
              account: data.transferData.account,
              recipient: data.transferData.recipient.address,
              amount
            }

            if (data.transferData.walletType === 'Metamask') {
              await Object(
                _metaMaskTransaction__WEBPACK_IMPORTED_MODULE_2__.default
              )(info.recipient, info.amount, info.account)
            } else {
              await Object(
                _fortmaticTransaction__WEBPACK_IMPORTED_MODULE_1__.default
              )(info.recipient, info.amount, info.account)
            }

            await Object(
              _userActions__WEBPACK_IMPORTED_MODULE_4__.createTransaction
            )({
              recipientId: data.transferData.recipient.id,
              senderId: props.user.id,
              amount,
              linkToPost: props.link
            })
            window.close()
          }

          const cancelTransaction = () => {
            setCancelStatus(1)
          }

          return (
            // 5 USD = 0.0085 Ethereum, add exchange rate div
            //divs for recipient and sender just used in the background
            data.loading
              ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'App'
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'header',
                    {
                      className: 'App-header'
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'video',
                      {
                        src: '/images/background.mp4',
                        id: 'background',
                        playsInline: true,
                        muted: true,
                        autoPlay: true,
                        loop: true,
                        style: {
                          pointerEvents: 'none'
                        }
                      }
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      {
                        id: 'overlay'
                      }
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      {
                        id: 'loadContainer'
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'video',
                        {
                          src: '/images/loader.mp4',
                          id: 'loadIcon',
                          playsInline: true,
                          muted: true,
                          autoPlay: true,
                          loop: true,
                          style: {
                            pointerEvents: 'none'
                          }
                        }
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'img',
                        {
                          id: 'loadJar',
                          src: '/images/loadJar.png'
                        }
                      )
                    )
                  )
                )
              : cancelStatus
                ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    null,
                    window.close()
                  )
                : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    {
                      className: 'App'
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'header',
                      {
                        className: 'App-header'
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'img',
                        {
                          id: 'background',
                          src: '/images/topperBackground.gif',
                          alt: 'background gradient'
                        }
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          id: 'overlay'
                        }
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'form',
                        {
                          onSubmit: handleSubmit
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          null,
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'label',
                            {
                              id: 'setAmountLabel',
                              htmlFor: 'ethAmount'
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'span',
                              {
                                style: {
                                  fontFamily: 'Montserrat-Thin'
                                }
                              },
                              'Send Ether To',
                              '\n'
                            ),
                            data.transferData.recipient.username
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'input',
                            {
                              id: 'setAmountInput',
                              onChange: e => setAmount(e.target.value),
                              type: 'float',
                              name: 'amount',
                              autoComplete: 'off',
                              value: amount,
                              required: true
                            }
                          )
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          {
                            className: 'submit-transaction'
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            {
                              className: 'submit-amount',
                              id: 'submitTransaction',
                              type: 'submit',
                              value: 'submit'
                            },
                            'Submit'
                          )
                        )
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          className: 'cancel-transaction'
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'button',
                          {
                            type: 'button',
                            id: 'cancelTransaction',
                            className: 'submit-amount',
                            onClick: cancelTransaction
                          },
                          'Close'
                        )
                      )
                    )
                  )
          )
        }

        /* harmony default export */ __webpack_exports__.default = Transaction

        /***/
      },

    /***/ './client/fortmaticTransaction.js':
      /*!****************************************!*\
  !*** ./client/fortmaticTransaction.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return fortmaticTransaction
          }
        )
        /* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fortmatic */ './node_modules/fortmatic/dist/cjs/fortmatic.js'
        )
        /* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          fortmatic__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! web3 */ './node_modules/web3/lib/index.js'
        )
        /* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          web3__WEBPACK_IMPORTED_MODULE_1__
        )
        // Initialize provider

        // test network for transactions

        const fm = new fortmatic__WEBPACK_IMPORTED_MODULE_0___default.a(
          'pk_test_E28EBDED6FA415DC',
          'ropsten'
        ) // web3 is for communicating with extensions

        let web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(
          fm.getProvider()
        )
        async function fortmaticTransaction( // necessary variables for transaction
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
          } // Send Ether transaction with web3

          await web3.eth.sendTransaction(txnParams, (error, txnHash) => {
            if (error) throw error
            console.log(txnHash)
          })
        }

        /***/
      },

    /***/ './client/loadData.js':
      /*!****************************!*\
  !*** ./client/loadData.js ***!
  \****************************/
      /*! exports provided: loadBlockchainData */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'loadBlockchainData',
          function() {
            return loadBlockchainData
          }
        )
        /* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! web3 */ './node_modules/web3/lib/index.js'
        )
        /* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          web3__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! fortmatic */ './node_modules/fortmatic/dist/cjs/fortmatic.js'
        )
        /* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          fortmatic__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! axios */ './node_modules/axios/index.js'
        )
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          axios__WEBPACK_IMPORTED_MODULE_2__
        )

        let fm = new fortmatic__WEBPACK_IMPORTED_MODULE_1___default.a(
          'pk_test_E28EBDED6FA415DC',
          'ropsten'
        ) // beginning transaction logic

        const loadBlockchainData = async recipientUsername => {
          if (window.ethereum) {
            console.log('New Metamask')
            window.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(
              window.ethereum
            )
            await window.ethereum.enable()
            let recipient = null
            if (recipientUsername)
              recipient = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(
                `http://localhost:5000/api/users/${recipientUsername}`
              )

            if (!recipient && recipientUsername) {
              window.location.replace(
                `https://www.reddit.com/message/compose?to=${recipientUsername}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${recipientUsername},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
              )
            } else if (!recipient) {
              return {
                account: ethereum.selectedAddress,
                walletType: 'Metamask'
              }
            } else if (recipient && recipientUsername) {
              return {
                account: ethereum.selectedAddress,
                recipient: recipient.data,
                walletType: 'Metamask'
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
            window.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(
              fm.getProvider()
            )
            await web3.currentProvider.enable()
            let account = await web3.eth.getAccounts()
            let recipient = null
            if (recipientUsername)
              recipient = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(
                `http://localhost:5000/api/users/${recipientUsername}`
              )

            if (!recipient && recipientUsername) {
              window.location.replace(
                `https://www.reddit.com/message/compose?to=${recipientUsername}&subject=Topper%20-%20Receive%20Your%20Tip&message=Hey%20${recipientUsername},%20I%20liked%20your%20post.%20Download%20the%20Topper%20Chrome%20Extension%20to%20receive%20your%20tip%20in%20ETH.%20Link%20to%20download:%20https://topper-fsa.herokuapp.com`
              )
            } else if (!recipient) {
              return {
                account: account[0],
                walletType: 'Fortmatic'
              }
            } else if (recipient && recipientUsername) {
              return {
                account: account[0],
                recipient: recipient.data,
                walletType: 'Fortmatic'
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

        /***/
      },

    /***/ './client/metaMaskTransaction.js':
      /*!***************************************!*\
  !*** ./client/metaMaskTransaction.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return metamaskTransaction
          }
        )
        const ethereum = window.ethereum // actual transaction logic once it has been established that the addresses and amounts are valid

        async function metamaskTransaction(recipient, amount, sender) {
          console.log(window.ethereum)
          const transactionParameters = {
            nonce: '0x00',
            // ignored by MetaMask
            to: recipient,
            // Required except during contract publications.
            from: sender,
            // must match user's active address.
            value: parseInt(web3.utils.toWei(amount, 'ether')).toString(16) // Only required to send ether to the recipient from the initiating external account.
          } // txHash is a hex string
          // As with any RPC call, it may throw an error

          await ethereum
            .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]
            })
            .then(txHash => console.log(txHash))
        }

        /***/
      },

    /***/ 10:
      /*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /* (ignored) */
        /***/
      },

    /***/ 9:
      /*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /* (ignored) */
        /***/
      }
  }
])
//# sourceMappingURL=1.bundle.js.map
