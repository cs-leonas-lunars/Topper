;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [0],
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
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )('')
          const [password, setPassword] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )('')
          const [status, setStatus] = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )(true)

          const handleSubmit = async e => {
            e.preventDefault()
            const credentials = {
              username,
              password
            }
            const loginStatus = await Object(
              _userActions__WEBPACK_IMPORTED_MODULE_1__['login']
            )(credentials)

            if (loginStatus === 1) {
              setStatus(false)
            }
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

        var Login = function Login() {
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
            password = _useState4[0],
            setPassword = _useState4[1]

          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__['useState']
            )(true),
            _useState6 = _slicedToArray(_useState5, 2),
            status = _useState6[0],
            setStatus = _useState6[1]

          var handleSubmit = /*#__PURE__*/ (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee(e) {
                var credentials, loginStatus
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        e.preventDefault()
                        credentials = {
                          username: username,
                          password: password
                        }
                        _context.next = 4
                        return Object(
                          _userActions__WEBPACK_IMPORTED_MODULE_1__['login']
                        )(credentials)

                      case 4:
                        loginStatus = _context.sent

                        if (loginStatus === 1) {
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

        /* harmony default export */ __webpack_exports__['default'] = Login

        /***/
      }
  }
])
//# sourceMappingURL=0.bundle.js.map
