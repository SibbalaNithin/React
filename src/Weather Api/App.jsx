import React, { useState } from 'react'

const api = {
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  Key: "23f2031fa86ec2aaa93e5cd8e510db7b",
};

const App = () => {
  const[weather, setWeather] = useState({});
  const[search, setSearch] = useState("");

  function handleSearch(){
    fetch(`${api.baseUrl}?q=${search}&appid=${api.Key}`)
    .then((res)=>res.json())
    .then((d)=> setWeather(d));
  }
  return (
    <div>
      <input placeholder='Search city' onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {weather.main !== undefined ? (
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ):(
        <p>Not Found</p>
      )}
      
    </div>
  )
}

export default App