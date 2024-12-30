import React, { createContext } from 'react'
import Child1 from "./UseContext/Child1"
import Child3 from './UseContext/Child3';

const data1 = createContext();
const data2 = createContext();
const App = () => {
  const name = "Nithin"
  const place = "Mysore"
  return (
    <div>
      <data1.Provider value={name}> 
        <data2.Provider value={place}>
          <Child3/>
        </data2.Provider>
        </data1.Provider>
       
    </div>
  )
}

export default App

export {data1, data2}
