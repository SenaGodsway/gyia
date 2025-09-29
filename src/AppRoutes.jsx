import React from 'react'
import Landing from './pages/homepage/landing'
import  About from  './pages/about/About'
import  Services from  './pages/services/services'
import  Contact from  './pages/contact/contact'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
  )
}

export default AppRoutes
