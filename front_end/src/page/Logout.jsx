import React, { useEffect } from 'react'
import { Navigate } from 'react-router';
import { useContext, } from "react";
import { ThemeContext } from '../App';


const Logout = () => {
  const {logoutUser} = useContext(ThemeContext);

  useEffect(()=>{
      logoutUser();
  },[logoutUser])

  return <Navigate to="/login"/>
}


export default Logout
