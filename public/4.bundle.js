;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    /***/ './client/Signup.js':
      /*!**************************!*\
  !*** ./client/Signup.js ***!
  \**************************/
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
        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }
          return _extends.apply(this, arguments)
        }

        const Checkbox = props =>
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'input',
            _extends(
              {
                type: 'checkbox'
              },
              props
            )
          ) // local signup

        const Signup = () => {
          const [username, setUsername] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )('')
          const [email, setEmail] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )('')
          const [password, setPassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )('')
          const [confirmPassword, setConfirmPassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )('')
          const [status, setStatus] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )(true)
          const [validatePassword, setValidatePassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )(true)
          const [checked, setChecked] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__.useState
          )(false)
          Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
            () => {
              if (confirmPassword === password) {
                setValidatePassword(false)
              } else {
                setValidatePassword(true)
              }
            },
            [password, confirmPassword]
          )

          const handleSubmit = async e => {
            e.preventDefault()
            const info = {
              username,
              email,
              password
            }
            const signupStatus = await Object(
              _userActions__WEBPACK_IMPORTED_MODULE_1__.signup
            )(info)

            if (signupStatus === 1) {
              setStatus(false)
            }
          }

          console.log(validatePassword, checked, 'both should be true')
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
                    htmlFor: 'email'
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'small',
                    null,
                    'Email'
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'input',
                  {
                    onChange: e => setEmail(e.target.value),
                    name: 'email',
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
                'div',
                null,
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'label',
                  {
                    htmlFor: 'confirmPassword'
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'small',
                    null,
                    'Confirm Password'
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'input',
                  {
                    onChange: e => setConfirmPassword(e.target.value),
                    name: 'confirmPassword',
                    type: 'password'
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                {
                  className: 'signup-button',
                  type: 'submit',
                  value: 'submit',
                  disabled: validatePassword || !checked
                },
                'Sign up'
              )
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'label',
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Checkbox,
                {
                  checked: checked,
                  onChange: () => setChecked(!checked)
                }
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'small',
                null,
                "By checking this box, I agree to Topper's terms and conditions"
              )
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              null,
              validatePassword &&
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  'Passwords must match'
                ),
              !status &&
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  'Signup Failed'
                )
            )
          )
        }

        /* harmony default export */ __webpack_exports__.default = Signup

        /***/
      }
  }
])
//# sourceMappingURL=4.bundle.js.map
