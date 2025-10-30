import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = formData;
    try {

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    
     <div className="space-y-3 mt-8">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label>
        <input
          type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label>
        <input
            type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
          />
      </div>

      <div className="text-right">
        <a href="#" className="text-sm text-gray-600 hover:underline font-medium"> Forgot Password? </a>
      </div>

      <button type="submit"
        className="w-full bg-[#2DC08D] text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#26A97C] transition shadow-md"
      >
        Login
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
    </form>
  );
};
export default Login;