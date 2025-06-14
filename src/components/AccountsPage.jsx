import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#fafbfc' }}>
      <div className="w-full max-w-[400px]">
        <div className="bg-white rounded-xl border border-[#e3e3e3] shadow-sm px-8 pt-8 pb-6 animate-fade-in" style={{ boxShadow: '0px 2px 8px 0px #0000000A' }}>
          <div className="mb-8">
            <h1 className="text-[18px] font-semibold text-[#232323] mb-6 text-left">Account Settings</h1>
            <div className="flex items-center mb-4">
              <div className="relative w-14 h-14 mr-4">
                <img
                  src={userData?.avatarUrl || 'https://randomuser.me/api/portraits/women/44.jpg'}
                  alt="avatar"
                  className="w-14 h-14 rounded-full object-cover border border-[#e3e3e3]"
                />
                <span className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full flex items-center justify-center border-2 border-white">
                  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><circle cx="8" cy="8" r="8" fill="#6C25FF"/><path d="M10.667 6.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 6c0-1.84 2.16-2.667 4-2.667 1.84 0 4 .827 4 2.667v.333a.667.667 0 0 1-.667.667H5.333A.667.667 0 0 1 4.667 13v-.333Z" fill="#fff"/></g></svg>
                </span>
              </div>
              <div>
                <h2 className="text-[16px] font-semibold text-[#232323] leading-tight">
                  {userData?.fullName || 'Marry Doe'}
                </h2>
                <p className="text-[14px] text-[#6C25FF] font-medium leading-tight">
                  {userData?.emailAddress || 'Marry@Gmail.Com'}
                </p>
              </div>
            </div>
            <p className="text-[14px] text-[#4d4d4d] leading-snug text-left">
              Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
          <button 
            onClick={handleBack}
            className="w-full bg-[#f7f8fa] hover:bg-[#edeef2] text-[#6C25FF] font-semibold py-3 rounded-lg transition-all duration-200 text-[16px]"
          >
            Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
