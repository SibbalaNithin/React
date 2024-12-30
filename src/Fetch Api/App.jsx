import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((d) => setdata(d))
  })
  return (
    <div>
      {data.map((item, index) => {
        return(
          <div key={index}>
              <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
 