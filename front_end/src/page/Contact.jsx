import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact_box'>
       <form>
         <h1>Contact</h1>
        <input type='text' placeholder='name'/>
        <br></br>
        <input type='email' placeholder='email'/>
        <br></br>
        <input type='text' placeholder='message'/>
        <br></br>
        <button type='submit'>submit</button>
       </form>
    </div>
  )
}

export default Contact
