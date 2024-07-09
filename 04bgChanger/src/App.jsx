
import  {useState} from 'react'


function App() {
  const [color, setColor] = useState("Green")

  return (
  <>

  <div className="w-full h-screen duration-300"
  style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           

<button onClick={() => setColor("green") }
    className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "green"}}> Green</button>

<button onClick={() => setColor("pink") }
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor: "pink"}}> Pink</button>


<button onClick={() => setColor("blue") }
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor: "blue"}}> Blue</button>


<button onClick={() => setColor("yellow") }
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor: "yellow"}}> yellow</button>


<button onClick={() => setColor("white") }
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor: "white"}}> white</button>


<button onClick={() => setColor("red") }
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor: "red"}}> red</button>


    </div>


    </div>

  </div>



  
  
  </>
  )
}

export default App
