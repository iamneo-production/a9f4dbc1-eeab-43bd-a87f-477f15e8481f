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
    <div>
      
    <BrowserRouter>

      <Routes>
        <Route path ="" element ={<Navbar />} />
          <Route exact path="/userlogin" element={<Login />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/signup" element={<Sign />} />
          <Route exact path="/application" element={<Application />} />
          <Route exact path="/Upload" element={<Upload />} />
          <Route exact path="/Track" element={<Track />} />
          
          
      </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
