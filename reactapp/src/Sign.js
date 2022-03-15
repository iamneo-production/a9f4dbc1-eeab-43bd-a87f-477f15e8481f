import React,{useState} from 'react';
import './Login.css';
const Sign = () => {
  const [data, setData] = useState({
    user: '',
    email: '',
    username: '',
    password: '',
    mobilenumber: '',
    confirmpassword: '',
  });
  const { user, email, username, password, mobilenumber, confirmpassword } = data;
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>


      <div className='container1'>

        <center>
          <form onSubmit={submitHandler}>
            <label for="user">Enter admin/user:
              <input type="text" id="user" name="user" value={user} onChange={changeHandler} /><br /> </label>
            <br />
            <label for="username">Enter username:
              <input type="text" id="username" name="username" value={username} onChange={changeHandler} /><br /> </label>
            <br />
            <label for="mobilenumber">Enter Mobile Number:
              <input type="number" id="mobilenumber" name="mobilenumber" value={mobilenumber} onChange={changeHandler} /><br /> </label>
            <br />
            <label for="email">Enter Email Id:
              <input type="text" id="email" name="email" value={email} onChange={changeHandler} /><br /> </label>
            <br />
            <label for="password">Enter Password:
              <input type="password" id="password" name="password" value={password} onChange={changeHandler} /> <br /> </label>
            <br />
            <label for="confirmpassword">Enter Password:
              <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={changeHandler} /> <br /> </label>
            <br />

            <input type="submit" id="submitButton" name="signup" value="SignUp" />
          </form>
        </center>
      </div>
    </div>
  );
}
export default Sign;