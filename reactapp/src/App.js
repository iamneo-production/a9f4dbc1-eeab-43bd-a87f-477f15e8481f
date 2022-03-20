import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import AdminLogin from './AdminLogin';
import './image2.jpg';
import Upload from './Upload';
import Track from './Track';
import Welcome from './Welcome';
import Applynewcard from './Applynewcard';


export default function App() {
  return (
    <div>
      
    <BrowserRouter>

      <Routes>
        <Route path ="" element ={<Navbar />} />
          <Route exact path="/userlogin" element={<Login />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/newcardform" element={<Applynewcard />} />
          <Route exact path="/Upload" element={<Upload />} />
          <Route exact path="/Track" element={<Track />} />
          <Route exact path ="/welcome" element ={<Welcome />} />
        
          
      </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
