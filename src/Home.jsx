
import { useState } from 'react'
import './home.css'

function Home({step}) {
  const name = 'React Counter App'
   const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{name}</h1>

      <h2>{count}</h2>
      <div className='btn'>

      <button onClick={() => setCount(count + step)}>+</button>

      <button onClick={() => setCount(count - step)}>-</button>

      <button onClick={() => setCount(0)}>Reset</button></div>
    </div>
  )
}

export default Home
