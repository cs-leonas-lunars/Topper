import React, {useEffect, useState} from 'react'
const Success = () => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    setTimeout(() => {
      if (count !== 0) {
        setCount((count) => count - 1)
      } else {
        window.close()
      }
    }, 1000)
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
        <img
          id="background"
          src="/images/topperBackground.gif"
          alt="background gradient"
        />
        <div id="overlay" onClick={() => toggleMenu(true)} />
        <h1 id="successText">Success!</h1>
        <p id="redirectText">Redirecting in {count}</p>
      </header>
    </div>
  )
}
export default Success
