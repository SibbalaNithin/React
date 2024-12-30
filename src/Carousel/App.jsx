import React, { useState } from 'react'
import './App.css'
const App = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2024/09/26/14/08/lizard-9076520_960_720.jpg",
    "https://www.istockphoto.com/vector/santa-claus-goes-to-the-city-gm166054648-22338907?utm_source=pixabay&utm_medium=affiliate&utm_campaign=ADP_illustration_sponsored_ratiochange&utm_content=https%3A%2F%2Fpixabay.com%2Fillustrations%2Fbuildings-christmas-card-season-7653900%2F&utm_term=buildings+christmas", 
    "https://cdn.pixabay.com/photo/2022/10/17/10/41/river-7527311_640.jpg"
  ]

  const [activeIndex, setactiveIndex] = useState(0);

  const handleNext = () => {
    setactiveIndex((activeIndex + 1) % images.length);
  }

  const handlePrev = () => {
    setactiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  return (
    <div className='App'>
      <div className='img'>
        <img src= {images[activeIndex]}  alt="" />
      </div>
      <div className='btn'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
