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
  let [serData , setSerData] = useState([])
  

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
  let checkToken = async () => {
    try {
        let jwtData = await fetch('http://localhost:20202/api/ben/user', {
            method: "GET",
            headers: {  // Corrected from "header" to "headers"
                Authorization: `bearer ${token}`,
            },
        });

        // console.log("jwtData ok", jwtData);
        if(jwtData.ok){
           let data = await jwtData.json();
          //  console.log("jwt token =>", data)
          setUser(data.result)
        }
    } catch (error) {

    }
}

  // ================fetch service data list-----------------------
  let serviceData = async()=>{
        try {
            let result = await fetch('http://localhost:20202/api/service/list',{
              method: "GET",
            })
           
            if(result.ok){
                let data = await result.json();
                 console.log("servive Data =>", data);
                setSerData(data);
            }
        } catch (error) {
            console.log("service data is not fetch")
        }
  }
   
  // JWT auntaction ----------------------------------------------and git the data of services
  useEffect(()=>{
     serviceData()
     checkToken()
  },[isLoggedIn])
  return (
    <>

      <ThemeContext.Provider value={{ token, storeTonken, logoutUser, isLoggedIn, user , serData }}>
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
