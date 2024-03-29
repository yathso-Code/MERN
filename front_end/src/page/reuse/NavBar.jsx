import React, { useEffect, useState } from 'react'
import './NavBar.css'; 
import { Link } from 'react-router-dom';
import { useContext, } from "react";
import { ThemeContext } from '../../App';

const NavBar = () => {

  // get the token 
  const {isLoggedIn,logoutUser, user} = useContext(ThemeContext);

  // ---------------
  let handleLogout = () =>{
    logoutUser()
  }
  return (
   <div className="nav">
   <input type="checkbox" id="nav-check"/>
   <div className="nav-header">
     <div className="nav-title">
      {user? `Hello ${user.username}`: `welcome` } 
     </div>
   </div>
   <div className="nav-btn">
     <label for="nav-check">
       <span></span>
       <span></span>
       <span></span>
     </label>
   </div>
   
   <div className="nav-links">
     <Link to="/" >Home</Link>
     <Link to="/about" >About</Link>
     <Link to="/services" >Services</Link>
     {
      isLoggedIn?  <Link to="/logout" style={{color: 'red'}} onClick={handleLogout}>logout</Link>:
      <>
         <Link to="/login" >Login</Link>
         <Link to="/signup" >SignUp</Link>
         </>
     }
     <Link to="contact">contact</Link>
   </div>
 </div>
  )
}

export default NavBar
