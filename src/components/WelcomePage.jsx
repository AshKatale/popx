import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#fafbfc' }}>
      <div className="w-full max-w-[400px]">
        <div className="bg-white rounded-xl border border-[#e3e3e3] shadow-sm px-8 pt-8 pb-6 flex flex-col justify-end min-h-[700px]" style={{ boxShadow: '0px 2px 8px 0px #0000000A' }}>
          <div className="flex-1 flex flex-col justify-end">
            <div className="mb-10 mt-auto">
              <h1
                style={{
                  textAlign: 'left',
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 500,
                  fontSize: '28px',
                  lineHeight: '17px',
                  letterSpacing: '0px',
                  color: '#1D2226',
                  width: '231px',
                  height: '33px',
                  opacity: 1,
                }}
              >
                Welcome to PopX
              </h1>
              <p 
                style={{
                  textAlign: 'left',
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '26px',
                  letterSpacing: '0px',
                  color: '#000000',
                  opacity: 0.6,
                  width: '232px',
                  height: '48px',
                  margin: '0 0 0 0',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="space-y-4">
              <button 
                onClick={handleCreateAccount}
                style={{
                  width: '335px',
                  height: '46px',
                  borderRadius: '6px',
                  backgroundColor: '#6C25FF',
                  color: '#FFFFFF',
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '17px',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  opacity: 1,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Create Account
              </button>
              <button 
                onClick={handleLogin}
                style={{
                  width: '335px',
                  height: '46px',
                  borderRadius: '6px',
                  backgroundColor: '#EDE2FF',
                  color: '#000000',
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '17px',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  opacity: 1,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Already Registered? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
