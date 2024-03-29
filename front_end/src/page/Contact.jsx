import React from 'react'
import './Contact.css';
import { useState } from 'react';
import { useContext, } from "react";
import { ThemeContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const {user} = useContext(ThemeContext);
  console.log("user ", user)

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  let [userData, setUserData] = useState(true);


  if(user && userData){
    setContact({
      username: user.username,
      email: user.email,
      message: ""
    })
    setUserData(false)
  }
  

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
   // handle fomr getFormSubmissionInfo
   const handleSubmit =  async (e) => {
    e.preventDefault();

    console.log("contact=>",contact);
    try {
      // ------------fetching api data ------------------------
      let result = await fetch('http://localhost:20202/api/form/contact',{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      // -------------get the responsive------------------------
      if(result.ok){
        setContact({ username: "", email: "", message: "", });
        
     }
     toast.success("message is send")
    } catch (error) {
      alert("message is not send")

    }
  };

  return (
    <div className='contact_box'>
      <ToastContainer />
       <form onSubmit={handleSubmit}>
         <h1>Contact</h1>
        <input type='text' placeholder='name'
        name="username"
        autoComplete="off"
        value={contact.username}
        onChange={handleInput}
        required
        />
        <br></br>
        <input type='email' placeholder='email'
        name="email"
        id="email"
        autoComplete="off"
        value={contact.email}
        onChange={handleInput}
        required
        />
        <br></br>
        <input type='text' placeholder='message'
        name="message"
        id="message"
        autoComplete="off"
        value={contact.message}
        onChange={handleInput}
        required
          />
        <br></br>
        <button type='submit'>submit</button>
       </form>
    </div>
  )
}

export default Contact
