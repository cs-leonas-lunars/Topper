;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    /***/ './client/Landing.js':
      /*!***************************!*\
  !*** ./client/Landing.js ***!
  \***************************/
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

        const Signup = /*#__PURE__*/ Object(
          react__WEBPACK_IMPORTED_MODULE_0__.lazy
        )(() =>
          __webpack_require__
            .e(/*! import() */ 4)
            .then(
              __webpack_require__.bind(
                null,
                /*! ./Signup */ './client/Signup.js'
              )
            )
        )
        const Login = /*#__PURE__*/ Object(
          react__WEBPACK_IMPORTED_MODULE_0__.lazy
        )(() =>
          __webpack_require__
            .e(/*! import() */ 3)
            .then(
              __webpack_require__.bind(null, /*! ./Login */ './client/Login.js')
            )
        )

        const Landing = props => {
          // component variable is arbitrary number to decide what should be shown, depending on what the user is trying to do
          const [component, setComponent] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )(0)

          if (component === 0) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                  'img',
                  {
                    id: 'brandIcon',
                    src: '/images/TipJar.png',
                    alt: 'Topper Logo'
                  }
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h1',
                  {
                    id: 'logoText',
                    onClick: () => setComponent(0)
                  },
                  'Topper'
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h1',
                  {
                    id: 'titleText'
                  },
                  'Reward The Right Way.'
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'p',
                  {
                    id: 'paraText'
                  },
                  'Send Crypto To Your Favorite Content Creators Like Never Before'
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    id: 'login'
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    {
                      id: 'loginText',
                      onClick: () => setComponent(2)
                    },
                    'Login'
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  {
                    id: 'signup',
                    onClick: () => setComponent(1)
                  },
                  'Create An Account'
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  {
                    id: 'learnLanding'
                  },
                  'Learn More'
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
          } else if (component === 1) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                  'img',
                  {
                    id: 'brandIcon',
                    src: '/images/TipJar.png',
                    alt: 'topper logo'
                  }
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h1',
                  {
                    id: 'logoText',
                    onClick: () => setComponent(0)
                  },
                  '\u2190 Back'
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Signup,
                  {
                    account: props.account
                  }
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  {
                    id: 'learnLanding'
                  },
                  'Learn More'
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
          } else {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                  'img',
                  {
                    id: 'brandIcon',
                    src: '/images/TipJar.png',
                    alt: 'topper logo'
                  }
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h1',
                  {
                    id: 'logoText',
                    onClick: () => setComponent(0)
                  },
                  '\u2190 Back'
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Login,
                  null
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  {
                    id: 'learnLanding'
                  },
                  'Learn More'
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
          }
        }

        /* harmony default export */ __webpack_exports__.default = Landing

        /***/
      }
  }
])
//# sourceMappingURL=5.bundle.js.map
