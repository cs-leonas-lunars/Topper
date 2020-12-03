import axios from 'axios'
import history from './history'
export const me = async () => {
  try {
    const res = await axios.get('/auth/me')
    return res.data
    //return !res.data.user.id ? history.push('/landing') : history.push('/home')
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
