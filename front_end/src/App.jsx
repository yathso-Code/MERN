import React from 'react'
import './App.css'
import {Routes , Route } from "react-router-dom" 
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Login from './page/Login'
import SignUp from './page/SignUp'
import Services from './page/Services'
import NavBar from './page/reuse/NavBar'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
          <Route path="/" element={<Home/> } /> 
          <Route path="/about" element={<About/> } />
          <Route path="/contact" element={<Contact/> } /> 
          <Route path="/login" element={<Login/> } />
          <Route path="/signup" element={<SignUp/> } /> 
          <Route path="/services" element={<Services/> } />
    </Routes>
    </>
  )
}

export default App
