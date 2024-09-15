"use client"
import React, { useState } from "react";

import "./page.css";

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="main-container">
      <div className="login-contaainer">
        <div className="content">
          {isSignUp ? (
            <div className="Sign-up">
              <h1>Register</h1>
              <h3>"Preserve and share memories"</h3>
            <form className="form" id="signup-form">
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
              <p>
                Already have an account?{" "}
                <span className="link" onClick={toggleForm}>
                  Sign In
                </span>
              </p>
            </form>
            </div>
          ) : (
            <div className="sign-in">
              <h1>Welcome back, </h1>
              <h3 className="text-center">"Preserve Your Cherished Moments"</h3>
            <form className="form" id="login-form">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
              <p>
                Don't have an account?{" "}
                <span className="link" onClick={toggleForm}>
                  Sign Up
                </span>
              </p>
            </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
