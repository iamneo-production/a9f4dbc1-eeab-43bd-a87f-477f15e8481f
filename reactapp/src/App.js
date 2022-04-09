import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Main/Navbar';
import Signup from './Components/SignUp/SignUp';
import AdminLogin from './Components/Login/AdminLogin/AdminLogin';
import './image2.jpg';
import Welcome from './Components/UserDashboard/Welcome';
import Applynewcard from './Components/NewCardForm/Applynewcard';
import Fileupload from './Components/NewCardForm/Fileupload';
import Submitsuccess from './Components/Submitsuccess/Submitsuccess';
import Correctionform from './Components/CorrectionForm/Correctionform';
import Correctionupload from './Components/CorrectionForm/Correctionupload';
import Track from './Components/TrackStatus/Track';
import Applications from './Components/TrackApplications/Application';
import Dashboard from './Components/AdminDashboard/Dashboard';
import Applieddocument from './Components/AppliedDocuments/Applieddocument';
import Documentverification from './Components/Verification/Documentverification';
import Documentcorrection from './Components/CorrectionDocuments/Documentcorrection';



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
          <Route path ="/Submission" element ={<Submitsuccess />} />
          <Route path ="/trackstatus" element ={<Track />} />
          <Route path ="/applications" element ={<Applications />} />
          <Route path ="/dashboard" element ={<Dashboard />} />
          <Route path ="/applied-documents" element ={<Applieddocument />} />
          <Route path ="/verification/1" element ={<Documentverification />} />
          <Route path ="/updated-documents" element ={<Documentcorrection />} />
          
      </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
