import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(10)

  const addvalue = () => { 
    setCount(count +1)
  }
  const removevalue = () => { 
    if(count >= 1){
    setCount(count -1)
    }
  }

  return (
    <>
    <p>{count}</p>
    
    <button onClick={addvalue}> Add Value {count} </button> <br />
    <button onClick={removevalue}> Remove Value {count} </button>
    </>
  )
}

export default App
