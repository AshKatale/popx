import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const AccountsPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="account-container">
      <div className="account-card">
        <div className="account-card-content">
          <h1 className="account-header">Account Settings</h1>
          <div className="account-profile">
            <div className="account-avatar">
              <img
                src={userData?.avatarUrl || 'https://randomuser.me/api/portraits/women/44.jpg'}
                alt="avatar"
              />
              <span className="account-avatar-edit">
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle cx="8" cy="8" r="8" fill="#6C25FF"/>
                    <path d="M10.667 6.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 6c0-1.84 2.16-2.667 4-2.667 1.84 0 4 .827 4 2.667v.333a.667.667 0 0 1-.667.667H5.333A.667.667 0 0 1 4.667 13v-.333Z" fill="#fff"/>
                  </g>
                </svg>
              </span>
            </div>
            <div className="account-info">
              <h2>{userData?.fullName || 'Marry Doe'}</h2>
              <p>{userData?.emailAddress || 'Marry@Gmail.Com'}</p>
            </div>
          </div>
          <p className="account-description">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
