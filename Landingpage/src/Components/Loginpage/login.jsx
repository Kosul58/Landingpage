import React from "react";
import Navbar from "../Navbar";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [uname, setuname] = useState(null);
  const navigate = useNavigate();
  const handleuname = (event) => {
    setuname(event.target.value);
  };

  const [password, setpassword] = useState(null);
  const handlepwd = (event) => {
    setpassword(event.target.value);
  };

  const hanglelogin = async (event) => {
    event.preventDefault(); // Prevent form refresh
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uname, password }),
      });

      if (response.ok) {
        const [result] = await response.json();
        // Store user details in localStorage or context (optional)
        localStorage.setItem("userDetails", JSON.stringify(result));
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        console.error("Login failed");
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Server error, please try again later");
    }
  };
  return (
    <>
      <Navbar />
      <div className="Loginsignup">
        <form className="loginform " onSubmit={hanglelogin}>
          <div className="regbackbtn">
            <Link to="/">
              <button className="signupbtn">Go Back</button>
            </Link>
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
            <button className="signupbtn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
