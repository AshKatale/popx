import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="welcome-content">
          <div className="welcome-header">
            <h1 className="form-heading">
              Welcome to PopX
            </h1>
            <p className="form-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="form-content">
            <button 
              onClick={handleCreateAccount}
              className="form-button form-button-primary"
            >
              Create Account
            </button>
            <button 
              onClick={handleLogin}
              className="form-button form-button-secondary"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
