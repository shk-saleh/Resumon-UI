import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = ({ setMode }) => {
  
  const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, password} = formData;
    try {
     
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="space-y-5 mt-8">
      <div>
        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2"> Full Name </label>
        <input
          type="text" name="fullname" placeholder="Enter your name" value={formData.fullname} onChange={handleChange} required
          className="w-full px-4 py-2.5 text-(--gray-color) rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label>
        <input
          type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required
          className="w-full px-4 py-2.5 text-(--gray-color) rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label>
          <input
            type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required
            className="w-full px-4 py-2.5 text-(--gray-color) border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
          />
      </div>

      <div className="text-sm text-gray-600 text-right"> Already have an account?{' '}
        <span onClick={() => setMode("login")} className="text-orange-300 font-medium cursor-pointer hover:underline">Sign in</span>
      </div>

      <button type="submit"
        className="w-full bg-[#2DC08D] text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#26A97C] transition shadow-md"
      >
        Sign up
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>

    </form>
  );
};
export default Signup;