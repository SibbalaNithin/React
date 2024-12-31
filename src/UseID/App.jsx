import React, {useId}from 'react'

const App = () => {
  const id = useId();
  return (
    <div>
      <h1 id={id}>Hello</h1>
    </div>
  )
}

export default App
