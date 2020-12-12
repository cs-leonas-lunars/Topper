import React, {useEffect, useState} from 'react'

// local signup
const Success = () => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    setTimeout(() => {
      console.log('LOOPY')
      let timer = count - 1
      if (count === 0) {
        window.close()
      }
      setCount(timer)
    }, 1000)
  }, [])

  return (
    <div>
      <h1 id="successText">Success!</h1>
      <p id="redirectText">Redirecting in {count.toString()}</p>
    </div>
  )
}

export default Success
