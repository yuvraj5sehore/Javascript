import { useState } from "react";
import  Counter  from "./Counter";

function App(){
  const[fruit,setFruit] = useState("Apple")

  const handleFruit = () =>{
     setFruit("Banana")
  }

  return (
    <div>
      <h1>We are going to change the fruit name</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit Name</button>
      <Counter />
    </div>
  )
}
export default App

//10