import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Admin_Layout.css';

const Admin_Layout = () => {
  return (
   <>
    <header className='admin_nav_box'>
       <div className='nav_box'>
          
              <ul>
                <li><Link to='/admin/users'>Users</Link></li>
                <li><Link to='/admin/contacts'>Contact</Link></li>
                <li><Link to='/'>Home</Link></li>
              </ul>
         
       </div>
       
    </header>
    <Outlet/>
   </>
  )
}

export default Admin_Layout
