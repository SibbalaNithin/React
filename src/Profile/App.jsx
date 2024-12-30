
import React from 'react'
import './Profile/App.css'
import Navbar from './Profile/Navbar'
import Home from './Profile/Home'
import Skills from './Profile/Skills'
import Service from './Profile/Service'
import Footer from './Profile/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/> 
      <Service/>
      <Footer/>
    </div>
  )
}

export default App