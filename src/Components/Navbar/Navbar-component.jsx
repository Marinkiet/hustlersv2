import { Avatar } from '@material-ui/core';
import './Navbar-styles.css';
import React from 'react';
import {Link} from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
const Navbar = ({currentUser})=> (



      <div className='links'>
        <div  className='left_links'>
            <Link  className='left_links' to='/'><img src="logo.png"></img></Link>  
            <Link  className='left_links' to='/AboutusPage'>About Us</Link>
            <Link  className='left_links' to='/ContactUsPage'>Contact</Link>
         </div>
         
         <div className='middle_links'>
         <Link className='middle_link' to='./ProductsPage'>Products</Link>
         <Link className='middle_link' to='./ServicesPage'>Services</Link>
         <Link className='middle_link' to='./EventsPage'>Events</Link>
         <Link className='middle_link' to='./HustlersPage'>Hustlers</Link>


      </div>
        

         <div className='right_links'>
            <Link className='right_link' to="./Advertise">Advertise/</Link>
            <Link className='right_link' to="./Menu"> Menu</Link>
            <Avatar src={`https://avatars.dicebear.com/api/human/123.svg`}/>
         {(
            currentUser?
            <div className='right_link' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='right_link' to='./signin'>SIGN IN</Link>
        )}
        </div>
     
    </div>
    
  )


export default Navbar;
