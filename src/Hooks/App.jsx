import React, {useState}from 'react'

const App = () => {
    const [state, setstate] = useState(0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setstate(state+1)}>+</button>
      <button onClick={() => setstate(state-1)}>-</button>
    </div>
  )
}

export default App