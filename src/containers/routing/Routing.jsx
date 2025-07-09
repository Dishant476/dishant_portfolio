import React from 'react'
import './routing.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Experience from '../experience/Experience'
import Contact from '../contact/Contact'
const Routing = () => {
  return (
    <div className='routing-container h-100p w-97'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routing
