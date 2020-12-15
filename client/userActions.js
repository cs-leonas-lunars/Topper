import axios from 'axios'

// axios calls to use routes, no store to simplify everything and because redux advantages dont apply to Topper needs
export const me = async () => {
  try {
    const res = await axios.get('/auth/me')
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const login = async credentials => {
  try {
    await axios.post('/auth/login', credentials)
    window.location.reload()
  } catch (err) {
    console.error(err)
    return 1
  }
}

export const signup = async info => {
  try {
    await axios.post('/auth/signup', info)
    window.location.reload()
  } catch (err) {
    console.error(err)
    return 1
  }
}

export const logout = async () => {
  try {
    await axios.post('/auth/logout')
    window.location.reload()
  } catch (err) {
    console.error(err)
  }
}

export const createTransaction = async details => {
  try {
    await axios.post('/api/transactions', details)
  } catch (err) {
    console.error(err)
  }
}

export const pushAddress = async address => {
  try {
    const res = await axios.put('/api/users/update', {address})
  } catch (err) {
    console.error(err)
  }
}
