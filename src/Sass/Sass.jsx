import React from 'react'
import "./Sass.scss";
const Sass = () => {
  return (
    <div className='Sass'>
        <div className='card'>
          <div className='card-header'>
            <i className='fa-solid fa-arrow-left'></i>
            <i className='fa-solid fa-bars'></i>
          </div>
            <div className='image'>
                <img src="https://th.bing.com/th/id/OIP.kVUm8yuWuijHXyzaQwTUaAHaGt?w=188&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/> 
            </div>
              {/* <div className='para'> */}
                <h1>Virat Kohli</h1>
                <p>Cricketer</p>
              {/* </div> */}
            <div className='icons'>
                <i class="fa-brands fa-facebook" style={{color:"blue"}}></i>
                <i class="fa-brands fa-twitter" style={{color:"skyblue"}}></i>
                <i class="fa-brands fa-instagram" style={{color:"brown"}}></i>
                <i class="fa-brands fa-whatsapp" style={{color:"red"}}></i>
            </div>
            <div className='display'>
              <button>Messages</button>
              <button>Subscribe</button>
            </div>
            <div className='icons2'>
              <i className='fa-regular fa-heart'><span>12.3k</span></i>
              <i className='fa-regular fa-message'><span>12.3k</span></i>
              <i className='fa-regular fa-arrow-right-to-bracket'><span>12.3k</span></i>
            </div>     
        </div>
    </div>
  )
}

export default Sass
