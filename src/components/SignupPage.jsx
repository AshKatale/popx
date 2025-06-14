import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/account');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="form-page-container">
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h1 className="form-heading">
              Create your<br />PopX account
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="form-content">
            {/* Full Name Input */}
            <div className="form-input-container">
              <input
                type="text"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="form-input"
                required
                id="signup-fullname"
              />
              <label htmlFor="signup-fullname" className="form-label">
                Full Name<span className="required">*</span>
              </label>
            </div>

            {/* Phone Number Input */}
            <div className="form-input-container">
              <input
                type="tel"
                placeholder="Marry Doe"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="form-input"
                required
                id="signup-phone"
              />
              <label htmlFor="signup-phone" className="form-label">
                Phone number<span className="required">*</span>
              </label>
            </div>

            {/* Email Address Input */}
            <div className="form-input-container">
              <input
                type="email"
                placeholder="Marry Doe"
                value={formData.emailAddress}
                onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                className="form-input"
                required
                id="signup-email"
              />
              <label htmlFor="signup-email" className="form-label">
                Email address<span className="required">*</span>
              </label>
            </div>

            {/* Password Input */}
            <div className="form-input-container">
              <input
                type="password"
                placeholder="Marry Doe"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="form-input"
                required
                id="signup-password"
              />
              <label htmlFor="signup-password" className="form-label">
                Password<span className="required">*</span>
              </label>
            </div>

            {/* Company Name Input */}
            <div className="form-input-container">
              <input
                type="text"
                placeholder="Marry Doe"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="form-input"
                id="signup-company"
              />
              <label htmlFor="signup-company" className="form-label">
                Company name
              </label>
            </div>

            {/* Are you an Agency? Radio Buttons */}
            <div className="form-radio-group">
              <label className="form-radio-label">
                Are you an Agency?<span className="required">*</span>
              </label>
              <div className="form-radio-options">
                <label className="form-radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={() => handleInputChange('isAgency', 'yes')}
                    className="form-radio-input"
                  />
                  <span className="form-radio-text">Yes</span>
                </label>
                <label className="form-radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={() => handleInputChange('isAgency', 'no')}
                    className="form-radio-input"
                  />
                  <span className="form-radio-text">No</span>
                </label>
              </div>
            </div>

            <button type="submit" className="form-button form-button-primary">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
