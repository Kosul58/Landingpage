import React from "react";
import { useState, useEffect, useRef } from "react";
const Login = () => {
  const [uname, setuname] = useState(null);
  const handleuname = (event) => {
    setuname(event.target.value);
  };

  const [password, setpassword] = useState(null);
  const handlepwd = (event) => {
    setpassword(event.target.value);
  };

  return (
    <div className="Loginsignup">
      <form className="loginform ">
        <div className="regbackbtn">
          <button className="signupbtn">Go Back</button>
        </div>

        <div className="signup1" style={{ justifyContent: "center" }}>
          <div className="signup11">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Username"
              value={uname}
              onChange={handleuname}
            />
          </div>
          <div className="signup11">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlepwd}
            />
          </div>
        </div>
        <div className="signupbtnfront">
          <button className="signupbtn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
