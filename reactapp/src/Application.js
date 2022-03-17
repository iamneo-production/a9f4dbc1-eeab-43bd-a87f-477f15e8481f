import React from 'react'
import {Link} from 'react-router-dom';

const Application = () => {
  
  return (
    <div className='container1'>
  
  <div >
      
    <form>
      <h3 style={{marginBottom: '40px', fontSize: '30px'}}>
        APPLICATION FORM
      </h3>
      <div className="grid-container">
        <div className="grid-item"><label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" /></div>
        <div className="grid-item"><label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" /></div>
        <div className="grid-item"><label htmlFor="phn">Phone Number:</label>
          <input type="number" id="phn" name="phn" /><br /><br /></div>
        <div className="grid-item"><label htmlFor="email">email id:</label>
          <input type="text" id="email" name="email" /></div>
        <div className="grid-item"><label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" /></div>
        <div className="grid-item"><label htmlFor="fname">Father Name :</label>
          <input type="text" id="fname" name="fname" /><br /><br /></div>
        <div className="grid-item"><label htmlFor="fnum">Fathers Phone Number:</label>
          <input type="number" id="fnum" name="fnum" /></div>
        <div className="grid-item"><label htmlFor="mname">Mothers Name :</label>
          <input type="text" id="mname" name="mname" /></div>
        <div className="grid-item"><label htmlFor="mnum">Phone Number:</label>
          <input type="number" id="mnum" name="mnum" /><br /><br /></div>
      </div>
      <h2>Address</h2>
      <div className="grid-container">
        <div className="grid-item"><label htmlFor="hno">House Number:</label>
          <input type="number" id="hno" name="hno" /><br /><br /></div>
        <div className="grid-item"><label htmlFor="sname">Street Name:</label>
          <input type="text" id="sname" name="sname" /><br /><br /></div>
        <div className="grid-item"><label htmlFor="aname">Area Name:</label>
          <input type="text" id="aname" name="aname" /><br /><br /></div>
        <div className="grid-item"><label htmlFor="pin">Pin Code:</label>
          <input type="number" id="pin" name="pin" /><br /><br /></div>
        <div className="grid-item"><label htmlFor="stname">State Name:</label>
          <input type="text" id="stname" name="stname" /><br /><br /></div>
        <div className="grid-item"><label htmlFor="nname"> Nationality:</label>
          <input type="text" id="nname" name="nname" /><br /><br />
        </div>
      </div></form>
    <button style={{backgroundColor:"blue"}}>
      <button>
      <Link to="/upload">Next</Link>
      </button>
      
    </button>
  </div></div>

  )
}

export default Application;