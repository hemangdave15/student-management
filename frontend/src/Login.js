import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import './Login.css';

const Login = () => {
  const [pwd, setPwd] = useState("");
  const [failed, setFailed] = useState(false);
  const navigate = useNavigate(); // Get navigate function

  const handleLogin = () => {
    axios
      .post("http://192.168.1.7:8000/login", { password: pwd })
      .then(() => {
        console.log("Logged in");
        navigate("/home"); // Navigate to home page on successful login
      })
      .catch((e) => {
        console.log("Couldn't login");
        setFailed(true);
      });
  };

  return (
    <div className="div-wrapper">
      <img src="/images/flexilogo.png" alt="Logo" className="login-logo" />
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <label className= "login-text" htmlFor="password">Enter Admin Password:</label>
        <input
          className="login-input"
          type="password"
          id="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => {
            console.log("Changed");
            setPwd(e.target.value);
          }}
        />
        {failed && <p className="login-error">Couldn't log in</p>}
        <button className= "login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
