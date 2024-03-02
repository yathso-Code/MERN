import React from 'react'
import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, } from "react";
import { ThemeContext } from '../App';
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  
  const {storeTonken, getAllUserData} = useContext(ThemeContext);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

    //  navigate -------------
 let navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  let handleSubmit= async(e)=>{
    e.preventDefault();
    // console.log("login=>",userLogin);
    try {
      let result = await fetch('http://localhost:20202/api/ben/login',{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      })
             

      if(result.ok){
        let data = await result.json()
          //  it chick password -------------------
            if(data != 'invalude password'){
                // console.log(" token=>  ", data)
                // set token on localStorage--------
                //  localStorage.setItem("token", data.token)
                console.log("login data", data);
                // -----------check wither user id admin--------
                if(data.isAdmin){
                  storeTonken(data)
                  setUserLogin({email: "", password: "", });
                  // switch page to home---
                  toast.success("login success") 
                  getAllUserData();
                 navigate('/admin');
                }else{
                  storeTonken(data)
                  setUserLogin({email: "", password: "", });
                  // switch page to home---
                  toast.success("login success") 
                 navigate('/')
                }
                
               
            }else{
              // alert(data)
              toast.warn(data);
        }
      }
      else {
        
          toast.warn("pleace check your ID & password...")
      }
      // console.log("token=> out  ", result)
    } catch (error) {
      toast.warn("Incurrect user id or password")
    }
  }
  return (
    <div className='login_box'>
    <ToastContainer />
      <form onSubmit={handleSubmit}>
         <h1>Login</h1>

         <input type='email' placeholder='enter email'
          value={userLogin.email}
          onChange={handleInput}
          name='email'/>
         <br></br>

         <input type='password' placeholder='enter password'
         value={userLogin.password}
         onChange={handleInput}
          name='password'/>
         <br></br>

         <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login
