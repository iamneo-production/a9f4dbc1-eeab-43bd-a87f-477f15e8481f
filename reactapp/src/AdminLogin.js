import React,{useState} from 'react';
import './Login.css';
const AdminLogin = () => {
const[data,setData] = useState({
  email :'',
  password :'',
})
const {email,password} =data;
const changeHandler = e => {
  setData({...data,[e.target.name]:[e.target.value]})
}
const submitHandler = e =>{
  e.preventDefault()
  console.log(data)
}
return(
  
    <div className='container'>
        
    <center>
      <form onSubmit={submitHandler}>
      <label for="email"><h3>Enter Email Id</h3> :  
        <input type="text" id="email" name="email" value={email} onChange={changeHandler} /> </label>
        
        <label for="password"><h3>Enter Password</h3> : 
        <input type="password" id="password" name="password" value={password} onChange={changeHandler} /> <br /> </label>
        
        <input type="submit" id="loginButton"  name="login" value="Login" className='button' />
        <br />
      </form>
      
      </center>
    
      </div>
)
}
export default AdminLogin;
