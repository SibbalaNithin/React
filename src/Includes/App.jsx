import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setdata] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setdata(data))
  });
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} placeholder='Search Product'/>

      {data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        );
      })}
      
    </div>
  )
}

export default App