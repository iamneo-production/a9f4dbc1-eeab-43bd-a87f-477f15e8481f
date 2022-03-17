import React from 'react';
import man from './man.png';
import admin from './admin.png'
import { Outlet, Link } from "react-router-dom";
import './App.css';
const Navbar = () => {
  return (
    <>
    <div>
    <div class="container">
      <center>
  <img src={man} alt="Snow" />
  <button className='button'><Link to="/userlogin">USER</Link></button>
  <img src={admin} alt="Snow" />
  <button className='button'><Link to="/adminlogin">ADMIN</Link></button></center>
           </div>
      </div>
      <Outlet />
    </>
  )
};

export default Navbar;