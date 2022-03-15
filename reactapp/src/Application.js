import React from 'react'
// import {Link,useHistory} from 'react-router-dom';
import Nav from './navbar';
const Application = () => {
  
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n.myDiv {\n  border: 5px outset ;    \n  text-align: center;\n}\n.header{\n\ntext-color :white;\nbackground-color:Blue;\n}\nnav {\n        height: 80px;\n        background-color: #051367;\n}\n      nav a {\n        color: #fff;\n        margin: 50px;\n        font-size: 20px;\n      }\n      nav .track-a {\n        font-size: 30px;\n      }\n\t  .logout-button {\n        position: absolute;\n        right: 100px;\n        width: 120px;\n        height: 40px;\n        font-size: 20px;\n        background-color: yellow;\n        border: 0;\n      }\n      .logout-button:hover {\n        background-color: turquoise;\n      }\n\t  .grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 10px;\n  text-align: center;\n  padding: 10px;\n  }\n  \n\n" }} />
  
  <div className="myDiv">
      {<Nav/>}
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
      <a href="upload.html">Next</a>
    </button>
  </div></div>

  )
}

export default Application;