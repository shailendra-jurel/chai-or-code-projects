import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Card from './components/card'

function App() {

  let myObj = {
    userName : "shailendar",
    userAge : 20}
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
    <h1 className='bg-green-500 text-black p-4 rounded-xl'> Tailwind Test</h1>
    

    <Card channel ="code and relax"  someObj = {myObj} />
   
    

    <p>{count}</p>
    
    <button onClick={addvalue}> Add Value {count} </button> <br />
    <button onClick={removevalue}> Remove Value {count} </button>
    </>
  )
}

export default App
