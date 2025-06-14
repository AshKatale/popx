import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/account');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#fafbfc' }}>
      <div className="w-full max-w-[400px]">
        <div className="bg-white rounded-xl border border-[#e3e3e3] shadow-sm px-8 pt-8 pb-6 animate-fade-in" style={{ boxShadow: '0px 2px 8px 0px #0000000A' }}>
          <div className="mb-8">
            <h1 className="text-[24px] font-bold text-[#232323] leading-tight mb-2 text-left">Signin to your<br />PopX account</h1>
            <p className="text-[16px] text-[#4d4d4d] text-left leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative mb-6">
              <input
                type="email"
                placeholder=" "
                value={formData.emailAddress}
                onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                className="w-full px-5 pt-3 pb-2 rounded-lg border border-[#C6C6C6] bg-[#fafbfc] text-[#1D2226] placeholder-transparent focus:outline-none focus:border-[#6C25FF] transition-all duration-200 text-[18px]"
                required
                id="login-email"
              />
              <label htmlFor="login-email"
                className="absolute left-3 -top-3 bg-[#fafbfc] px-1 text-[15px] font-medium" style={{ color: '#6C25FF' }}>
                Email Address<span className="text-[#FF0000]">*</span>
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                placeholder=" "
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-5 pt-3 pb-2 rounded-lg border border-[#C6C6C6] bg-[#fafbfc] text-[#1D2226] placeholder-transparent focus:outline-none focus:border-[#6C25FF] transition-all duration-200 text-[18px]"
                required
                id="login-password"
              />
              <label htmlFor="login-password"
                className="absolute left-3 -top-3 bg-[#fafbfc] px-1 text-[15px] font-medium" style={{ color: '#6C25FF' }}>
                Password<span className="text-[#FF0000]">*</span>
              </label>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-[#CBCBCB] hover:bg-[#b0b0b0] text-[#fff] font-semibold py-3 rounded-lg transition-all duration-200 text-[16px]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;