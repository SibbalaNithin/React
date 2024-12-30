import React, { useRef } from 'react'

const App = () => {
    const inputRef = useRef();

    function handleClick() {
        inputRef.current.focus();
        console.log("Inputref",inputRef);
        console.log("Inputref current",inputRef.current);
        
    }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App