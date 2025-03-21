import React, { useState } from "react";
import "./stylesheet.css";

const App = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleSubmit = (formType) => {
    // Handle form submission - placeholder for actual logic
    console.log(`${formType} form submitted`);
    // You would add authentication/registration logic here
  };

  return (
    <div className="container">
      <video autoPlay loop muted playsInline className="background-clip">
        <source src="/src/assets/Video.mp4" type="video/mp4" />
      </video>
      
      {!activeForm && (
        <>
          <h1 id="heading">Welcome to Ultimate Cook Book</h1>
          
          {/* Navigation Buttons */}
          <div className="nav-button">
            <button className="btn" onClick={() => setActiveForm("login")}>
              Sign In
            </button>
            <button className="btn" onClick={() => setActiveForm("register")}>
              Sign Up
            </button>
          </div>
        </>
      )}

      {/* Form Box */}
      <div className="form-box">
        {/* Login Form */}
        {activeForm === "login" && (
          <div className="form-container login-container">
            <div className="top">
              <span>
                Don't have an account?{" "}
                <a href="#" onClick={() => setActiveForm("register")}>
                  Sign Up
                </a>
              </span>
              <header>Login</header>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Username or Email" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input 
                type="submit" 
                className="submit" 
                value="Sign In" 
                onClick={() => handleSubmit('login')}
              />
            </div>
            <button className="close-btn" onClick={() => setActiveForm(null)}>
              Close
            </button>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check">Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">Forgot password?</a>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Registration Form */}
        {activeForm === "register" && (
          <div className="form-container register-container">
            <div className="top">
              <span>
                Have an account?{" "}
                <a href="#" onClick={() => setActiveForm("login")}>
                  Login
                </a>
              </span>
              <header>Sign Up</header>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Firstname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Lastname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input 
                type="submit" 
                className="submit" 
                value="Register" 
                onClick={() => handleSubmit('register')}
              />
            </div>
            <button className="close-btn" onClick={() => setActiveForm(null)}>
              Close
            </button>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check">Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">Terms & Conditions</a>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;