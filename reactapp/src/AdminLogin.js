import React,{useState} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';

const Login = () => {

const navi=useNavigate()

const [icon,setIcon]=useState(eyeOff);
const [showpass,setShowpass]=useState(true);

const handleToggle = () => {
  if(showpass===true){
  setIcon(eye);
  setShowpass(false);
  }
  else{
    setIcon(eyeOff);
    setShowpass(true);
  }
}

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
  navi('/dashboard');
}
return(

     <div className="main">
        <nav>
            <h1 className="text-a">Login</h1>
        </nav>
        <div className="main-tag">
            <form onSubmit={submitHandler}>
                <input type="email" id="email"  name="email" value={email} onChange={changeHandler} required placeholder="Enter Email"/><br/>
                <div className="input-field">
                <input type={showpass?"password":"text"} id="password" name="password" value={password} onChange={changeHandler} required placeholder="Enter Password"/>
                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                </div><br/><br/>
                <button type="submit" id="loginButton" className="asd1" name="login" value="Login">Login</button>   
            </form> <br/>
            {/* <p>New admin? <Link to="/signup" id="signupLink">sign up</Link></p> */}
        </div>
        
        </div>
    
)
}
export default Login;