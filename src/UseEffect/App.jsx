 import React, { useEffect, useState } from 'react'
 
 const App = () => {
  const [count, setcount] = useState(0)
  const [name, setname] = useState("")
  useEffect(() => {
    document.title = `${count} ${name}`;
    console.log(count);
    let a = document.getElementById("btn1");
    a.addEventListener("click", () => {
      document.body.style.backgroundColor = 'skyblue'
    })

  }, [count])
   return (
     <div>
       <h1>{count}</h1>
       <input onChange={(e) => setname(e.target.value)}/>
       <button onClick={() => setcount(count+1)}>Increment</button>
       <button id='btn1'>Click</button>
     </div>
   )
 }
 
 export default App
 