import React from 'react'

const AuthButtons = () => {
  // alex could you add a short sentence of why the user would want to connect their account to said service next to/around each button
  return (
    <div id="authButtons">
      <a href="/auth/reddit">Connect to Reddit</a>
      <a href="/auth/google">Connect to Google</a>
      <a href="/auth/twitter">Connect to Twitter</a>
      <a href="auth/twitch">Connect to Twitch</a>
      {/* <a href="auth/instagram">Connect to Instagram</a> */}
    </div>
  )
  // after the user connects there should be a brief message saying
  // 'Successfully connect to {servic}e' i think that would be a css thing if its not let me know
}

export default AuthButtons
