import React, { useState } from 'react';
import './contactForm.css'; // Import custom CSS file

const ContactForm = () => {
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign-up and log-in

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
      <div className="form-card2">
        <div className={`auth-form-container ${isSignUp ? 'sign-up' : 'log-in'}`}>
          {/* Sign Up Form */}
          {isSignUp && (
            <form className="form">
              <p className="form-heading">Sign Up</p>
              <div className="form-field">
                <input
                  required
                  placeholder="Name"
                  className="input-field"
                  type="text"
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Email"
                  className="input-field"
                  type="email"
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Password"
                  className="input-field"
                  type="password"
                />
              </div>
              <button className="auth-btn">Sign Up</button>
              <p className="toggle-text">
                Already have an account? <span onClick={() => setIsSignUp(false)}>Log In</span>
              </p>
            </form>
          )}

          {/* Log In Form */}
          {!isSignUp && (
            <form className="form">
              <p className="form-heading">Log In</p>
              <div className="form-field">
                <input
                  required
                  placeholder="Email"
                  className="input-field"
                  type="email"
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Password"
                  className="input-field"
                  type="password"
                />
              </div>
              <button className="auth-btn">Log In</button>
              <p className="toggle-text">
                Don't have an account? <span onClick={() => setIsSignUp(true)}>Sign Up</span>
              </p>
            </form>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
