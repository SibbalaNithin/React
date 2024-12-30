import React, { createContext } from 'react'
import Child1 from "./UseContext/Child1"

const data1 = createContext();
const data2 = createContext();
const App = () => {
  const name = "Nithin"
  const place = "Bengaluru"
  return (
    <div>
      <data1.Provider value={name}> 
        <data2.Provider value={place}>
          <Child1/>
        </data2.Provider>
        </data1.Provider>
       
    </div>
  )
}

export default App

export {data1, data2}