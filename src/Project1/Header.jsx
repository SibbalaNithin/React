import React, {useState} from 'react'
import './Main.css'
// const Navbar = () => {
//     let isDarkMode = false;

    // const toggleMode = () =>{
    //     isDarkMode = !isDarkMode;
    //     document.body.classList.toggle('dark-mode', isDarkMode);
    //     document.getElementById('modeButton').innerText = isDarkMode ? 'Light' : 'Dark';
    // };

    // const toggleMenu = () => {
    //     const menu = document.getElementById('menuList');
    //     menu.classList.toggle('open');
    // };

    const Navbar = ({ name }) => {
        // Initialize the state to manage dark mode
        const [isDarkMode, setIsDarkMode] = useState(false);
      
        // Function to toggle the dark mode state
        const toggleDarkMode = () => {
          setIsDarkMode(!isDarkMode );
          document.body.classList.toggle("dark", !isDarkMode)
        };
        
  return (
    <nav className='navbar'>
        <div className='logo'>Nithin</div>
        <div className="menu-list">
            <ul id='menuList'>  
                <li><a href='#'>Home</a></li> 
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Service</a></li>
                <button id='modeButton' onClick={toggleDarkMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button> 
            </ul>
        </div>
            <i className='fa-solid fa-bars' onClick={toggleDarkMode}></i>
    </nav>
    
   
  )
};

export default Navbar
