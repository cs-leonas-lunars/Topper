import axios from 'axios'
import history from './history'
export const me = async () => {
  try {
    const res = await axios.get('/auth/me')
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const logout = async () => {
  try {
    await axios.post('/auth/logout')
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}
