import React from 'react';
import './Navbar-styles.css';
import {Link} from "react-router-dom";
const Navbar = ()=> (
 

      <div className='links'>
        <div  className='left_links'>
            <Link  className='left_links' to='/'><img src="logo.png"></img></Link>  
            <Link  className='left_links' to='./aboutusPage'>About Us</Link>
            <Link  className='left_links' to='./contactusPage'>Contact</Link>
         </div>
         
         <div className='middle_links'>
         <Link className='middle_link' to='./ProductsPage'>Products</Link>
         <Link className='middle_link' to='./ServicesPage'>Services</Link>
         <Link className='middle_link' to='../Events'>Events</Link>
         <Link className='middle_link' to='./HustlersPage'>Hustlers</Link>


      </div>
        

         <div className='right_links'>
            <Link className='right_link' to="./Advertise">Advertise</Link>
            <Link className='right_link' to="./Login">/ Login</Link>
            <Link className='right_link' to="./Menu">Menu</Link>
         </div>
    </div>
  )

export default Navbar;
