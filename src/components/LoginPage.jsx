import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/account");
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="form-page-container">
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h1 className="form-heading">
              Signin to your
              <br />
              PopX account
            </h1>
            <p className="form-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form-content">
            <div className="form-input-container">
              <input
                type="email"
                placeholder="Enter email address"
                value={formData.emailAddress}
                onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                className="form-input"
                required
                id="login-email"
              />
              <label htmlFor="login-email" className="form-label">
                Email Address<span className="required">*</span>
              </label>
            </div>
            <div className="form-input-container">
              <input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="form-input"
                required
                id="login-password"
              />
              <label htmlFor="login-password" className="form-label">
                Password<span className="required">*</span>
              </label>
            </div>
            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
