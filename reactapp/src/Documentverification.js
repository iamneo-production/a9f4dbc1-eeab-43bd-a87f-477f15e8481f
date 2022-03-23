import {React,useState} from 'react';
import Adminnavigate from './Adminnavigate';
import user from './user.jpg';
import './App.css';

function Documentverification() {

  const [data,setData]=useState({
    status:'',
  });

  const handleApprove=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]});
  }

  const handleReject=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]});
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(data)
  }
  
  return (
    <div>
        <Adminnavigate/>
      <div className="addrrow" style={{marginLeft:'20px'}} id="verificationBody">
        <div className="tabcolumn main-tag left" style={{fontSize:'25px'}}  id="applicantDetails">
          <p><b>Name :</b> Arul</p><br/>
          <p><b>Applicant Id :</b> 920901</p><br/>
          <p><b>Applicant gender :</b> Male</p><br/> 
          <p><b>Applicant Father Name :</b> xxx</p><br/>
          <p><b>Applicant Mother Name :</b> xxx</p><br/>
          <p><b>Applicant Phone no :</b> 479841309</p><br/>
          <p><b>Applicant email :</b> ab@gmail.com</p><br/>
          <p><b>Applicant address :</b> 29,sdkp nagar,india</p><br/>
        </div>
        <div className="tabcolumn right" style={{textAlign:'center'}}>
          <h2 style={{marginLeft:'140px',marginTop:'80px'}}>Applicant Photo</h2>
         <img src={user} alt="User" className="inp3" id="applicantPhoto" style={{height:'50%',width:'50%',marginRight:"50px",marginTop:"30px",marginBottom:"40px",pointerEvents:'none',border:'1px solid'}}/>
          <form onSubmit={submitHandler}>
          <button className="asd2" name="status" value="Approved" id="adminApprove" onClick={handleApprove} style={{backgroundColor:'green',marginLeft:'140px'}}>Approve</button><br/><br/>
          <button className="asd2" name="status" value="Rejected" id="adminReject" onClick={handleReject} style={{backgroundColor:'red',marginLeft:'140px'}}>Reject</button><br/>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Documentverification
