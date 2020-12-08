import {createMemoryHistory, createBrowserHistory} from 'history'

// history from boilermaker, all of history might be unnecessary
const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory()
    : createBrowserHistory()

export default history
