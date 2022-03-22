import {React,useState} from 'react';
import tick from './tick.png';
import Navigatebar from './NavigateBar';
import './App.css';

function Submitsuccess() {

  const [id,setId]=useState('');
  
  function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return setId(Math.floor(Math.random() * (maxm - minm + 1)) + minm);
}

  return (
    <div className="main">
        <Navigatebar/><br/>
        <div className="addrrow" style={{fontSize:'27px',height:'100%'}} id="notificationBody">
            <div className="addrcol" style={{marginLeft:'350px',marginTop:'220px'}}>
            <p>You have submitted the form successfully</p><br/>
            <p onClick={generateRandomNumber.bind(this)}>Your application id : <strong>{id}</strong></p>
            </div>
            <img src={tick} alt="submit" style={{width:"7%", height:"7%",marginTop:'215px'}} className="addrcol"/>
        </div>
    </div>
  )
}

export default Submitsuccess;
