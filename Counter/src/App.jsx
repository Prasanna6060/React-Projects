import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    setCount((prevCount) => (
      prevCount > 0 ? prevCount -1 : 0
    ))
  }

  return (
    <>
      <div>
        
      </div>
      <h1>Simple Counter</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={handleDecrement}>-</button>
        
      </div>
      
    </>
  )
}

export default App
