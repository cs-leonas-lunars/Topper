;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    /***/ './client/Login.js':
      /*!*************************!*\
  !*** ./client/Login.js ***!
  \*************************/
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

        const Login = () => {
          const [username, setUsername] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )('')
          const [password, setPassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )('')
          const [status, setStatus] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )(true)

          const handleSubmit = async e => {
            e.preventDefault()
            const credentials = {
              username,
              password
            }
            const loginStatus = await Object(
              _userActions__WEBPACK_IMPORTED_MODULE_1__.login
            )(credentials)

            if (loginStatus === 1) {
              setStatus(false)
            }
          }

          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'signup-component'
            },
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
                    htmlFor: 'username'
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'small',
                    null,
                    'Username'
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'input',
                  {
                    onChange: e => setUsername(e.target.value),
                    name: 'username',
                    type: 'text'
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'label',
                  {
                    htmlFor: 'password'
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'small',
                    null,
                    'Password'
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'input',
                  {
                    onChange: e => setPassword(e.target.value),
                    name: 'password',
                    type: 'password'
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                {
                  className: 'signup-button',
                  type: 'submit',
                  value: 'submit'
                },
                'Login'
              )
            ),
            !status &&
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                'Incorrect Username and/or Password'
              )
          )
        }

        /* harmony default export */ __webpack_exports__.default = Login

        /***/
      }
  }
])
//# sourceMappingURL=3.bundle.js.map
