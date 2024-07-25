import React, { useState, useRef } from 'react';
import './contactForm.css'; // Import custom CSS file
import background from "../../Assets/3dBackground.jpg";
import buttonSound from "../../Assets/buttonClick.mp3"

const ContactForm = () => {
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign-up and log-in
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }

  };

  return (
    <div className="relative overflow-hidden h-screen">
      <img
        src={background}
        className="absolute top-0 left-0 h-full w-full object-cover object-center"
        alt="background"
        loading="lazy"
      />
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
                  <button className="auth-btn" onClick={playSound}>Sign Up</button>
                  <p className="toggle-text">
                    Already have an account? <span onClick={() => setIsSignUp(false)}>Log In</span>
                  </p>
                  <audio ref={audioRef} src={buttonSound} />

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
                  <button className="auth-btn" onClick={playSound}>Log In</button>
                  <p className="toggle-text">
                    Don't have an account? <span onClick={() => setIsSignUp(true)}>Sign Up</span>
                  </p>
                  <audio ref={audioRef} src={buttonSound} />

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
