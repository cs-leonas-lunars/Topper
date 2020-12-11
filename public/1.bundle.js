;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
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
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )('')
          const [email, setEmail] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )('')
          const [password, setPassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )('')
          const [confirmPassword, setConfirmPassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )('')
          const [status, setStatus] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )(true)
          const [validatePassword, setValidatePassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )(true)
          const [checked, setChecked] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )(false)
          Object(react__WEBPACK_IMPORTED_MODULE_0__['useEffect'])(
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
              _userActions__WEBPACK_IMPORTED_MODULE_1__['signup']
            )(info)

            if (signupStatus === 1) {
              setStatus(false)
            }

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg)
            var value = info.value
          } catch (error) {
            reject(error)
            return
          }
          if (info.done) {
            resolve(value)
          } else {
            Promise.resolve(value).then(_next, _throw)

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


        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args)
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'next',
                  value
                )
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'throw',
                  err
                )
              }
              _next(undefined)
            })
          }
        }

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          )
        }

        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
          var n = Object.prototype.toString.call(o).slice(8, -1)
          if (n === 'Object' && o.constructor) n = o.constructor.name
          if (n === 'Map' || n === 'Set') return Array.from(o)
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen)
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i]
          }
          return arr2
        }

        function _iterableToArrayLimit(arr, i) {
          if (
            typeof Symbol === 'undefined' ||
            !(Symbol.iterator in Object(arr))
          )
            return
          var _arr = []
          var _n = true
          var _d = false
          var _e = undefined
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value)
              if (i && _arr.length === i) break
            }
          } catch (err) {
            _d = true
            _e = err
          } finally {
            try {
              if (!_n && _i['return'] != null) _i['return']()
            } finally {
              if (_d) throw _e
            }
          }
          return _arr
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr
        }

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

        var Checkbox = function Checkbox(props) {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'input',
            _extends(
              {
                type: 'checkbox'
              },
              props
            )
          )
        } // local signup

        var Signup = function Signup() {
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(''),
            _useState2 = _slicedToArray(_useState, 2),
            username = _useState2[0],
            setUsername = _useState2[1]

          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(''),
            _useState4 = _slicedToArray(_useState3, 2),
            email = _useState4[0],
            setEmail = _useState4[1]

          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(''),
            _useState6 = _slicedToArray(_useState5, 2),
            password = _useState6[0],
            setPassword = _useState6[1]

          var _useState7 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(''),
            _useState8 = _slicedToArray(_useState7, 2),
            confirmPassword = _useState8[0],
            setConfirmPassword = _useState8[1]

          var _useState9 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(true),
            _useState10 = _slicedToArray(_useState9, 2),
            status = _useState10[0],
            setStatus = _useState10[1]

          var _useState11 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(true),
            _useState12 = _slicedToArray(_useState11, 2),
            validatePassword = _useState12[0],
            setValidatePassword = _useState12[1]

          var _useState13 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(false),
            _useState14 = _slicedToArray(_useState13, 2),
            checked = _useState14[0],
            setChecked = _useState14[1]

          Object(react__WEBPACK_IMPORTED_MODULE_0__['useEffect'])(
            function() {
              if (confirmPassword === password) {
                setValidatePassword(false)
              } else {
                setValidatePassword(true)
              }
            },
            [password, confirmPassword]
          )

          var handleSubmit = /*#__PURE__*/ (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee(e) {
                var info, signupStatus
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        e.preventDefault()
                        info = {
                          username: username,
                          email: email,
                          password: password
                        }
                        _context.next = 4
                        return Object(
                          _userActions__WEBPACK_IMPORTED_MODULE_1__['signup']
                        )(info)

                      case 4:
                        signupStatus = _context.sent

                        if (signupStatus === 1) {
                          setStatus(false)
                        }

                      case 6:
                      case 'end':
                        return _context.stop()
                    }
                  }
                }, _callee)
              })
            )

            return function handleSubmit(_x) {
              return _ref.apply(this, arguments)
            }
          })()

    
        /* harmony default export */ __webpack_exports__['default'] = Signup

        /***/
      }
  }
])
//# sourceMappingURL=1.bundle.js.map
