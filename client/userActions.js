import axios from 'axios'

export const me = async () => {
  try {
    const res = await axios.get('/auth/me')
    return res
  } catch (err) {
    console.error(err)
  }
}

export const logout = async () => {
  try {
    const res = await axios.post('/auth/logout')
    return res
  } catch (err) {
    console.error(err)
  }
}

// export const auth = async (email, password, method) => {
//   let res;
//   try {
//     res = await axios.post(`/auth/${method}`, { email, password });
//   } catch (authError) {
//     return dispatch(getUser({ error: authError }));
//   }

//   try {
//     dispatch(getUser(res.data));
//     history.push("/home");
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr);
//   }
// };

// this should only be reddit based, no local login
// after getting reddit credentials there needs to be a redirect where the user can put in their wallet address or easily create one if they dont already have one

// get user transactions
export const transactionHistory = async id => {
  try {
    const res = await axios.get(`/api/transactions/${id}`)
    return res
  } catch (err) {
    console.error(err)
  }
}
