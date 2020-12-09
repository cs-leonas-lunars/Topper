import axios from 'axios'
import history from './history'

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
    return 1
  }
}

export const signup = async info => {
  try {
    await axios.post('/auth/signup', info)
    window.location.reload()
  } catch (err) {
    console.error(err)
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

// export const redditAuth = async () => {
//   try {
//     await axios.get('/auth')
//   } catch(err) {
//     console.error(err)
//   }
// }

// export const googleAuth = async () => {
//   try {

//   } catch(err) {
//     console.error(err)
//   }
// }

// export const redditAuth = async () => {
//   try {

//   } catch(err) {
//     console.error(err)
//   }
// }

export const createTransaction = async details => {
  try {
    await axios.post('/api/transactions', details)
  } catch (err) {
    console.error(err)
  }
}

export const pushAddress = async address => {
  console.log(address)
  try {
    const res = await axios.put('/api/users/update', {address})
    console.log(res.data)
  } catch (err) {
    console.error(err)
  }
}

export const getRecipient = async username => {
  //   try {
  //   } catch (err) {
  //     console.error(err)
  //   }
}

// export const createUser = async (userInfo) => {
//   try {
//     const res = await axios.post('/api/users', userInfo)
//     return res.data
//     // window.location.reload() ?
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const hasSignedUp = async() => {
//   try {

//   } catch(err) {

//   }
// }
