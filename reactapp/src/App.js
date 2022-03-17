import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Sign from './Sign';
import AdminLogin from './AdminLogin';
import './image2.jpg';
import Application from './Application';
import Upload from './Upload';
import Track from './Track';
export default function App() {
  return (
    <div className='header'>
      <h1 className='pheader'>E PASSPORT ONLINE PORTAL</h1>
      
    <BrowserRouter>

      <Routes>
        <Route path ="" element ={<Navbar />} />
          <Route path="userlogin" element={<Login />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="signup" element={<Sign />} />
          <Route path="application" element={<Application />} />
          <Route path="Upload" element={<Upload />} />
          <Route path="Track" element={<Track />} />
          
          
      </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
