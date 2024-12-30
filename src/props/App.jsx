import React from 'react'
import Pros from './props/Pros'

const App = () => {
  const name="Nithin";
  const prof="Developer";
  // function love(){
  //   let b=document.body;
  //   b.innerHTML="<h1>I Love Devasri</h1>"
  // }
  function Dark(){
    let a=document.body;
    a.style.backgroundColor="Black"
    a.style.color="white"
  }
  return (
    <div>
      <Pros name={name} pro={prof} click={Dark} click2={love}/>
    </div>
  )
}

export default App