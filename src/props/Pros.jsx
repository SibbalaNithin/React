import React from 'react'

const pros = ({name,pro,click}) => {
  return (
    <div>
      <h1>Hi Iam {name} </h1>
      <h1>Iam a {pro}</h1>
      {/* <button onClick={click2}>Love</button> */}
      <button onClick={click}>Dark</button>
    </div>
  )
}

export default pros
