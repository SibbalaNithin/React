import React, {useReducer} from 'react'

const App = () => {
  const intializerArg = 0;
  const [state, dispatch] = useReducer(reducer, intializerArg);

  function reducer(state, action) {
    switch (action) {
      case "Increment":
        return state + 1;
       
        case "Decrement":
          return state - 1;


        case "Multi":
          return state * 2;

    
      default:
        return state;
    }
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Multi")}>Multiplication</button>
      

    </div>
  )
}

export default App
