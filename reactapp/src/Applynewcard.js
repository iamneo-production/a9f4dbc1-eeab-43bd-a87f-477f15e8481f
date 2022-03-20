import {React,useState} from 'react'
import {useNavigate} from 'react-router';
import NavigateBar from './NavigateBar';

function Applynewcard() {

  const navi=useNavigate();

  const[data,setData] = useState({
    firstName:'',
    fatherName:'',
    motherName:'',
    lastName: '',
    phoneNumber1: '',
    emailId:'',
    gender:'',
    phoneNumber2:'',
    age:'',
    houseNo1:'',
    streetName1:'',
    areaName1:'',
    pincode1:'',
    state1:'',
    nationality1:'',
    houseNo2:'',
    streetName2:'',
    areaName2:'',
    pincode2:'',
    state2:'',
    nationality2:'',

  })
  const {firstName,fatherName,motherName,lastName,phoneNumber1,emailId,gender,phoneNumber2,age,houseNo1,streetName1,areaName1,
    pincode1,state1,nationality1,houseNo2,streetName2,areaName2,pincode2,state2,nationality2,} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data)
    navi('/')
  }

  return (
    <div className='main'>
        <NavigateBar/><br/>
        <div className="main-tag1">
      
        <h3 style={{marginBottom: '40px', fontSize: '30px',textAlign: 'center',marginTop: '20px',fontFamily: 'Helvetica'}}>
          <ins><em>APPLICATION FORM</em></ins>
        </h3>
        <form onSubmit={submitHandler}>
          <div className="approw">
            <div className="appcolumn" >
              <input type="text" className="inp1" id="firstName" name="firstName" value={firstName} onChange={changeHandler} placeholder="enter your first name" /><br/>
              <input type="text" className="inp1" id="fatherName" name="fatherName" value={fatherName} onChange={changeHandler} placeholder="enter your father name" /><br/>
              <input type="text" className="inp1" id="motherName" name="motherName" value={motherName} onChange={changeHandler} placeholder="enter your mother name" /><br/>
            </div>
            <div className="appcolumn">
              <input type="text" className="inp1" id="lastName" name="lastName" value={lastName} onChange={changeHandler} placeholder="enter your last name" /><br/>
              <input type="text" className="inp1" id="phoneNumber1" name="phoneNumber1" value={phoneNumber1} onChange={changeHandler} placeholder="enter phone number" /><br/>
              <input type="email" className="inp1" id="emailId" name="emailId" value={emailId} onChange={changeHandler} placeholder="enter email Id" /><br/>
            </div>
            <div className="appcolumn">
              <input type="text" className="inp1" id="male/female" name="gender" value={gender} onChange={changeHandler} placeholder="enter male or female" /><br/>
              <input type="text" className="inp1" id="phoneNumber2" name="phoneNumber2" value={phoneNumber2} onChange={changeHandler} placeholder="enter alternate number" /><br/>
              <input type="text" className="inp1" id="age" name="age" value={age} onChange={changeHandler} placeholder="enter your age" /><br/>
            </div>
          </div>
          <div className="addrrow">
            <div className="addrcol main-tag2">
                  <p style={{marginBottom: '40px', fontSize: '20px',marginTop: '20px',textAlign: 'left',fontFamily: 'Helvetica',color: 'white'}}>
                    <ins><em>Address Information</em></ins>
                  </p>
              <p style={{fontSize: '20px'}}>House No :<input type="text" id="houseNo" name="houseNo1" value={houseNo1} onChange={changeHandler} /></p><br/>
              <p style={{fontSize: '20px'}}>Street Name :<input type="text" id="streetName" name="streetName1" value={streetName1} onChange={changeHandler}/></p><br/>
              <p style={{fontSize: '20px'}}>Area Name :<input type="text" className="inp" id="areaName" name="areaName1" value={areaName1} onChange={changeHandler}/>
              Pincode :<input type="text" className="inp" id="pincode" name="pincode1" value={pincode1} onChange={changeHandler}/></p><br/>
              <p style={{fontSize: '20px'}}>State :<input type="text" className="inp" id="state" name="state1" value={state1} onChange={changeHandler}/>
              Nationality :<input type="text" className="inp" id="nationality" name="nationality1" value={nationality1} onChange={changeHandler}/></p><br/>
            </div>
            <div className="addrcol main-tag2">
                  <p style={{marginBottom: '20px', fontSize: '20px',marginTop: '20px',textAlign: 'left',fontFamily: 'Helvetica',color: 'white'}}>
                    <ins><em>Permanent Address Information</em></ins>
                  </p>
                  <p style={{fontSize: '20px'}}>House No :<input type="text" id="houseNo" name="houseNo2" value={houseNo2} onChange={changeHandler} /></p><br/>
              <p style={{fontSize: '20px'}}>Street Name :<input type="text" id="streetName" name="streetName2" value={streetName2} onChange={changeHandler}/></p><br/>
              <p style={{fontSize: '20px'}}>Area Name :<input type="text" className="inp" id="areaName" name="areaName2" value={areaName2} onChange={changeHandler}/>
              Pincode :<input type="text" className="inp" id="pincode" name="pincode2" value={pincode2} onChange={changeHandler}/></p><br/>
              <p style={{fontSize: '20px'}}>State :<input type="text" className="inp" id="state" name="state2" value={state2} onChange={changeHandler}/>
              Nationality :<input type="text" className="inp" id="nationality" name="nationality2" value={nationality2} onChange={changeHandler}/></p><br/>
            </div>
          </div>
        <button type="submit" className="asd1">
        <p className='nav-links'>Next</p>
        </button>
        </form>  
    </div>
    </div>
  )
}

export default Applynewcard
