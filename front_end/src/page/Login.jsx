import React from 'react'
import './Login.css'
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log("login=>",user);
  }
  return (
    <div className='login_box'>
      <form onSubmit={handleSubmit}>
         <h1>Login</h1>

         <input type='email' placeholder='enter email'
          value={user.email}
          onChange={handleInput}
          name='email'/>
         <br></br>

         <input type='password' placeholder='enter password'
         value={user.password}
         onChange={handleInput}
          name='password'/>
         <br></br>

         <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login
