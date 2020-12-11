;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    /***/ './client/AuthButtons.js':
      /*!*******************************!*\
  !*** ./client/AuthButtons.js ***!
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

        const AuthButtons = () => {
          console.log('AUTH BUTTons component') // alex could you add a short sentence of why the user would want to connect their account to said service next to/around each button

          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              id: 'authButtons'
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              {
                href: '/auth/reddit'
              },
              'Connect to Reddit'
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              {
                href: '/auth/google'
              },
              'Connect to Google'
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              {
                href: '/auth/twitter'
              },
              'Connect to Twitter'
            )
          ) // after the user connects there should be a brief message saying
          // 'Successfully connect to {servic}e' i think that would be a css thing if its not let me know
        }

        /* harmony default export */ __webpack_exports__.default = AuthButtons

        /***/
      },

    /***/ './client/Home.js':
      /*!************************!*\
  !*** ./client/Home.js ***!
  \************************/
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
        /* harmony import */ var _userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./userActions */ './client/userActions.js'
        )
        /* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./loadData */ './client/loadData.js'
        )
        /* harmony import */ var _AuthButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./AuthButtons */ './client/AuthButtons.js'
        )

        // all components are functional
        // no React.Component

        const Home = props => {
          const [data, setData] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )({
            accountData: null,
            loading: true
          }) // useEffect for user

          Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            const findData = async () => {
              try {
                let accountData = await Object(
                  _loadData__WEBPACK_IMPORTED_MODULE_2__.loadBlockchainData
                )()
                await Object(
                  _userActions__WEBPACK_IMPORTED_MODULE_1__.pushAddress
                )(accountData.account)
                setData({
                  accountData,
                  loading: false
                })
              } catch (err) {
                console.error(err)
              }
            }

            setTimeout(() => {
              findData()
            }, 2000)
          }, [])
          return data.loading
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
                      id: 'overlay',
                      onClick: () => toggleMenu(true)
                    }
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'img',
                    {
                      id: 'profileIcon',
                      src: '/images/profile.png',
                      alt: 'profile icon'
                    }
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h1',
                    {
                      id: 'logoText'
                    },
                    'Topper'
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h1',
                    {
                      id: 'titleText',
                      onClick: () => setComponent(0)
                    },
                    props.user.username,
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _AuthButtons__WEBPACK_IMPORTED_MODULE_3__.default,
                      null
                    )
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    {
                      id: 'paraText'
                    },
                    '0 ETH'
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    {
                      id: 'learnHome'
                    },
                    'Learn More'
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    {
                      id: 'logout',
                      onClick: () =>
                        Object(
                          _userActions__WEBPACK_IMPORTED_MODULE_1__.logout
                        )()
                    },
                    'Logout'
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    {
                      id: 'ethereumText'
                    },
                    'E T H E R E U M \xB7 P O W E R E D'
                  )
                )
              )
        } //sidebar

        function toggleMenu(status) {
          if (status) {
            document.getElementById('menu').style.cssText =
              'width: 0vw; box-shadow: 0px 0px 0px 0px #000'
            document.getElementById('closeMenu').style.cssText = 'right: -75vw'
          } else {
            document.getElementById('menu').style.cssText =
              'width: 80vw; box-shadow: -20px 0px 40px -40px #000'
            document.getElementById('closeMenu').style.cssText = 'right: 5vw'
          }
        }

        /* harmony default export */ __webpack_exports__.default = Home

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
//# sourceMappingURL=2.bundle.js.map
