import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const SignupPage =  () => {
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
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#fafbfc' }}>
      <div className="w-full max-w-[400px]">
        <div className="bg-white rounded-xl border border-[#e3e3e3] shadow-sm px-8 pt-8 pb-6 animate-fade-in" style={{ boxShadow: '0px 2px 8px 0px #0000000A' }}>
          <div className="mb-8">
            <h1 className="text-[24px] font-bold text-[#232323] leading-tight text-left">Create your<br />PopX account</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder=" "
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-5 pt-3 pb-2 rounded-lg border border-[#C6C6C6] bg-[#fafbfc] text-[#1D2226] placeholder-transparent focus:outline-none focus:border-[#6C25FF] transition-all duration-200 text-[18px]"
                required
                id="signup-fullname"
              />
              <label htmlFor="signup-fullname"
                className="absolute left-3 -top-3 bg-[#fafbfc] px-1 text-[15px] font-medium" style={{ color: '#6C25FF' }}>
                Full Name<span className="text-[#FF0000]">*</span>
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="tel"
                placeholder=" "
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="w-full px-5 pt-3 pb-2 rounded-lg border border-[#C6C6C6] bg-[#fafbfc] text-[#1D2226] placeholder-transparent focus:outline-none focus:border-[#6C25FF] transition-all duration-200 text-[18px]"
                required
                id="signup-phone"
              />
              <label htmlFor="signup-phone"
                className="absolute left-3 -top-3 bg-[#fafbfc] px-1 text-[15px] font-medium" style={{ color: '#6C25FF' }}>
                Phone number<span className="text-[#FF0000]">*</span>
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder=" "
                value={formData.emailAddress}
                onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                className="w-full px-5 pt-3 pb-2 rounded-lg border border-[#C6C6C6] bg-[#fafbfc] text-[#1D2226] placeholder-transparent focus:outline-none focus:border-[#6C25FF] transition-all duration-200 text-[18px]"
                required
                id="signup-email"
              />
              <label htmlFor="signup-email"
                className="absolute left-3 -top-3 bg-[#fafbfc] px-1 text-[15px] font-medium" style={{ color: '#6C25FF' }}>
                Email address<span className="text-[#FF0000]">*</span>
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
                id="signup-password"
              />
              <label htmlFor="signup-password"
                className="absolute left-3 -top-3 bg-[#fafbfc] px-1 text-[15px] font-medium" style={{ color: '#6C25FF' }}>
                Password<span className="text-[#FF0000]">*</span>
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                placeholder=" "
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full px-5 pt-3 pb-2 rounded-lg border border-[#C6C6C6] bg-[#fafbfc] text-[#1D2226] placeholder-transparent focus:outline-none focus:border-[#6C25FF] transition-all duration-200 text-[18px]"
                id="signup-company"
              />
              <label htmlFor="signup-company"
                className="absolute left-3 -top-3 bg-[#fafbfc] px-1 text-[15px] font-medium" style={{ color: '#6C25FF' }}>
                Company name
              </label>
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#6C25FF] mb-2 text-left">
                Are you an Agency?*
              </label>
              <div className="flex gap-8 mt-1">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={() => handleInputChange('isAgency', 'yes')}
                    className="accent-[#6C25FF] w-4 h-4"
                  />
                  <span className="ml-2 text-[16px] text-[#1D2226]">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={() => handleInputChange('isAgency', 'no')}
                    className="accent-[#6C25FF] w-4 h-4"
                  />
                  <span className="ml-2 text-[16px] text-[#1D2226]">No</span>
                </label>
              </div>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-[#6C25FF] hover:bg-[#5a1fd1] text-white font-semibold py-3 rounded-lg transition-all duration-200 text-[16px]">
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={handleLoginClick}
              className="text-[#6C25FF] text-[16px] font-medium hover:underline"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
