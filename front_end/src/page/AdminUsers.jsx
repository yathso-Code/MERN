import React, { useEffect, useState } from 'react'
import './AdminUser.css';
import { useContext, } from "react";
import { ThemeContext } from '../App';

const AdminUsers = () => {
  
  const {token, getAllUserData, usersList } = useContext(ThemeContext);

  useEffect(()=>{
       getAllUserData();
  },[])
  
// ======================delete data -------------------- 
 let deleteData = async (x)=>{
 
    try {
        let result = await fetch(`http://localhost:20202/admin/users/delete${x}`,{
          method: "DELETE",
          headers:{
              Authorization: `bearer ${token}`,
          },
        });

        let data = await result.json();
        // if(result.ok){
        //   getAllUserData();
        // }
        console.log("dwltw")
    } catch (error) {
       console.log("data is not delete")
    }
 } 

  return (
   <table>
   <caption><i className="fa-solid fa-users"></i>Users Data list</caption>
   <thead>
     <tr>
       <th scope="col">Name</th>
       <th scope="col">Email</th>
       <th scope="col">PhoneNO</th>
       <th scope="col">Edite</th>
     </tr>
   </thead>
   <tbody>

   {
    Array.isArray(usersList) && usersList.map((curelm, index) => (
      <tr key={index}>
        <td data-label="Name">{curelm.username}</td>
        <td data-label="Email">{curelm.email}</td>
        <td data-label="Phone">{curelm.phone}</td>
        <td data-label="Edite"><button className='table_btn' onClick={()=> deleteData(curelm._id)}>Delete</button></td>
      </tr>
    ))
  }
    
    
     
   </tbody>
 </table>
  )
}

export default AdminUsers
