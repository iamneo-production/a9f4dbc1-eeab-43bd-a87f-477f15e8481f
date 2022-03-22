import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import AdminLogin from './AdminLogin';
import './image2.jpg';
import Welcome from './Welcome';
import Applynewcard from './Applynewcard';
import Fileupload from './Fileupload';
import Submitsuccess from './Submitsuccess';
import Correctionform from './Correctionform';
import Correctionupload from './Correctionupload';
import Track from './Track';
import Applications from './Applications';



export default function App() {
  return (
    <div>
      
    <BrowserRouter>

      <Routes>
          <Route path ="" element ={<Navbar />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route path ="/userlogin" element ={<Login />} />
          <Route path ="/signup" element ={<Signup />} />
          <Route path ="/welcome" element ={<Welcome />} />
          <Route path ="/newcardform/1" element ={<Applynewcard />} />
          <Route path ="/newcardform/2" element ={<Fileupload />} />
          <Route path ="/correctionform/1" element ={<Correctionform />} />
          <Route path ="/correctionform/2" element ={<Correctionupload />} />
          <Route path ="/Submission" element ={<Submitsuccess />} />
          <Route path ="/trackstatus" element ={<Track />} />
          <Route path ="/applications" element ={<Applications />} />
          
      </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
