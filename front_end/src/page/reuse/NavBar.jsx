import React from 'react'
import './NavBar.css'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
   <div className="nav">
   <input type="checkbox" id="nav-check"/>
   <div className="nav-header">
     <div className="nav-title">
       Ben-x
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
     <Link to="/login" >Login</Link>
     <Link to="/signup" >SignUp</Link>
     <Link to="contact">contact</Link>
   </div>
 </div>
  )
}

export default NavBar
