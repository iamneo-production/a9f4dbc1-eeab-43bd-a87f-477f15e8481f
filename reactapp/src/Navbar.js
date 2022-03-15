import React from 'react';


import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className='mynav'>
      <nav>
        <ul>
            <li><Link to="/login">USER</Link></li>
            <li><Link to="/login">ADMIN</Link></li>
        </ul>
      </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Navbar;