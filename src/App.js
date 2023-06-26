import React, { useEffect } from "react"
import { useState } from "react"


const App = () =>{
  const[title,setTitle]= useState('')
  const[flag,setFlag]=useState(true)
  console.log("START")
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
      console.log("what's next")
      setTitle(data.title)
    })
    console.log("End of Journey")
  },[flag])

  return <div>
    {console.log("hello")}
    <h1>Hi</h1>
    <button onClick ={()=>setFlag(!flag)}>Click Me</button>
  </div>
}

export default App