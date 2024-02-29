import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Login from './page/Login'
import SignUp from './page/SignUp'
import Services from './page/Services'
import NavBar from './page/reuse/NavBar'
import Error from './page/Error'
import Logout from './page/Logout'


export let ThemeContext = createContext();

function App() {
  // -----------get the token and set into a state======
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState('');
  

  // ----------------set token -------------------
  const storeTonken = (x) => {
    setIsLoggedIn(true)
    return localStorage.setItem("token", x.token);
  }

  //  ------------logout function --------------------
  const logoutUser = () => {
    // console.log("hii")
    setToken("");
    setIsLoggedIn(false);
    return localStorage.removeItem("token");
  }

  // --------------check the token verification -------------------pending project 
  let checkToken = async()=>{
      try {
          let x= await fetch('http://localhost:20202/api/ben/user',{
            method: "POST",
            headers:{
                   "Authorization": "application/json",
            },
          }

          )  

      } catch (error) {
        
      }
  }

  useEffect(()=>{
     checkToken()
  }, [])
  return (
    <>

      <ThemeContext.Provider value={{ token, storeTonken, logoutUser, isLoggedIn }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
