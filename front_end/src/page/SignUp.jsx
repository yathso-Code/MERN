import React, { useState } from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  //  navigate -------------
 let navigate = useNavigate();

  const handleInput = (e) => {
    console.log("=>>",e.target.value);
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user,[name]: value,});
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("registor=>", user);
    try {
      // ------------Register api call-------------
      let result = await fetch("http://localhost:20202/api/ben/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if(result.ok){
         setUser({ username: "", email: "", phone: "", password: "", });
        navigate('/login');
      }
      console.log("Account is complete...", result)
    } catch (error) {
      alert("registration is not send")
    }
  };


  return (
    <div className='signup_box'>
       <form onSubmit={handleSubmit}>
          <h1>Register</h1>
         <input type='text'
        placeholder='username'
         name="username"
         value={user.username}
         onChange={handleInput}
         />
         <br></br>

         <input type='email'
          placeholder='email'
          name="email"
          value={user.email}
          onChange={handleInput}
          />
         <br></br>

         <input type='text'
          placeholder='phone number'
          name="phone"
          value={user.phone}
          onChange={handleInput}
          />
         <br></br>

         <input type='password'
          placeholder='password'
          name="password"
          value={user.password}
          onChange={handleInput}
          />
         <br></br>

         <button type='submit'>Register</button>
       </form>
    </div>
  )
}

export default SignUp
