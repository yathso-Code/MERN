import React, {useState, useEffect} from 'react'
import './AdminUser.css';
import { useContext, } from "react";
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router';

const AdminContacts = () => {

  let [contactList, setContactList] = useState([])
  const { token} = useContext(ThemeContext);
  let Navigate = useNavigate();
// ---------------fetch all data of user contact -------------------------
   let getAllUserData = async() =>{
      try {
        let result = await fetch('http://localhost:20202/admin/contacts',{
          method: "GET",
          headers:{
              Authorization: `bearer ${token}`,
          },
        });
        let data = await result.json();
        // console.log("user,s data", data);
        if(data.mes == 'you are not admin'){
         return Navigate('/');
        }
        setContactList(data);
      } catch (error) {
         console.log("you are not admin");
      }
   }

  useEffect(()=>{
     getAllUserData()
  },[])

  // -----------------delete contact data --------------------
  let deleteDataCon = async (x)=>{
    //  console.log(x)
    try {
        let result = await fetch(`http://localhost:20202/admin/contact/delete${x}`,{
          method: "DELETE",
          headers:{
              Authorization: `bearer ${token}`,
          },
        });

        if (result.ok) {
          console.log("Data deleted successfully");
          getAllUserData();
      } else {
          console.log("Failed to delete data");
      }

    } catch (error) {
      console.log("data is not delete")
    }
} 
  return (
   <table>
   <caption><i className="fa-solid fa-envelope"></i>Contact Data list</caption>
   <thead>
     <tr>
       <th scope="col">Name</th>
       <th scope="col">Email</th>
       <th scope="col">Message</th>
       <th scope="col">Edite</th>
     </tr>
   </thead>
   <tbody>
     {
      Array.isArray(contactList) && contactList.map((curelm, index) => (
        <tr key={index}>
          <td data-label="Name">{curelm.username}</td>
          <td data-label="Email">{curelm.email}</td>
          <td data-label="Message">{curelm.message}</td>
          <td data-label="Edite"><button className='table_btn' onClick={()=> deleteDataCon(curelm._id)}>Delete</button></td>
        </tr>
      ))
    }
     
   </tbody>
 </table>
  )
}

export default AdminContacts
