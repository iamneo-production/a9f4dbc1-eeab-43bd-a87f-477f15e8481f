import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Signup = () => {
  const [icon1, setIcon1] = useState(eyeOff);
  const [showpass, setShowpass] = useState(true);
  const [icon2, setIcon2] = useState(eyeOff);
  const [showCpass, setShowCpass] = useState(true);

  const handlePass = () => {
    if (showpass === true) {
      setIcon1(eye);
      setShowpass(false);
    } else {
      setIcon1(eyeOff);
      setShowpass(true);
    }
  };

  const handleCpass = () => {
    if (showCpass === true) {
      setIcon2(eye);
      setShowCpass(false);
    } else {
      setIcon2(eyeOff);
      setShowCpass(true);
    }
  };

  let navi = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
    username: "",
    mobilenumber: "",
  });
  const { email, password, confirmpassword, role, username, mobilenumber } =
    data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    navi("/userlogin");
  };

  return (
    <div className="main">
      <nav>
        <h1 className="text-a">Register</h1>
      </nav>
      <div className="main-tag">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="admin/user"
            name="role"
            value={role}
            onChange={changeHandler}
            required
            placeholder="Enter admin/user"
          />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={changeHandler}
            required
            placeholder="Enter Email"
          />
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={changeHandler}
            required
            placeholder="Enter UserName"
          />
          <br />
          <input
            type="text"
            id="mobileNumber"
            name="mobilenumber"
            value={mobilenumber}
            onChange={changeHandler}
            required
            placeholder="Enter MobileNumber"
          />
          <br />
          <input
            type={showpass ? "password" : "text"}
            id="password"
            name="password"
            value={password}
            onChange={changeHandler}
            required
            placeholder="Enter Password"
          />
          <span onClick={handlePass}>
            <Icon icon={icon1} size={20} />
          </span>
          <br />
          <input
            type={showCpass ? "password" : "text"}
            id="confirmPassword"
            name="confirmpassword"
            value={confirmpassword}
            onChange={changeHandler}
            required
            placeholder="Confirm Password"
          />
          <span onClick={handleCpass}>
            <Icon icon={icon2} size={20} />
          </span>
          <br />
          <br />
          <button
            type="submit"
            id="submitButton"
            className="asd"
            name="signup"
            value="signup"
          >
            Sign Up
          </button>
        </form>{" "}
        <br />
        <p>
          Already a user?{" "}
          <Link to="/userlogin" id="signinLink">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
