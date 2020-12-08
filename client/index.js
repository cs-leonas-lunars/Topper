import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from './history'
import './index.css'
import Routes from './Routes'

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById('app')
)
