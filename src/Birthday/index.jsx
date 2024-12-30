import React, { useState } from 'react';
import './index.css';

const Birthday = () => {
  const [data, setdata] = useState([
    {name: "Harsha", age:27, img: "https://th.bing.com/th/id/OIP.vpKOKkkDhGjpQnILhhFZHwHaE8?w=100&h=100&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {name: "Bhanu", age:31, img: "https://th.bing.com/th/id/OIP.9YyCJnU6lhaFZB0RccFBGAHaMS?w=100&h=100&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {name: "Ajith", age:45, img: "https://th.bing.com/th/id/OIP.zAGoyB47gezDlB80HFLEzgHaGx?w=100&h=100&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {name: "Saran", age:35, img: "https://th.bing.com/th/id/OIP.K9QzOhakg7GyfpiPKYYxEQHaHa?w=100&h=100&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {name: "Bala", age:45, img: "https://th.bing.com/th/id/OIP.SRZxpL6M3ItElXPI_pUiyAHaHa?w=100&h=100&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {name: "Girish", age:45, img: "https://th.bing.com/th/id/OIP.rYWGFIxPXwOm6jLLjUF0-gHaK1?w=100&h=100&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
  ]);

  return (
    <div className='main'>
      <div className='card'>
        <h1>{data.length} Birthdays Today</h1>
        {data.map((item, index) => {
          return (
            <div key={index} className='birthday-item'>
              <img src={item.img} className='birthday-image' />
              <div className="person-details">
              <span className="name">{item.name}</span>
              <span className='age'>{item.age} Years</span>
              </div>
            </div>
          );
        })}
        <button className='btn' onClick={() => setdata([])}>Clear All</button>
      </div>
    </div>
  );
};

export default Birthday;