import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../store/useAuthStore';

const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login, loading, err } = useAuthStore;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(formData);
    if (res.success) 
      {
      console.log("Login successful");
    }
    else
    {
      console.log("Login failed: " , err);
      navigate("/buildResume");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="space-y-3 mt-8">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label>
          <input
            type="email" id="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required
            className="w-full px-4 py-2.5 text-(--gray-color) rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label>
          <input
            type="password" id="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required
            className="w-full px-4 py-2.5 text-(--gray-color) rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
          />
        </div>

        <div className="text-right">
          <a href="#" className="text-sm text-gray-600 hover:underline font-medium"> Forgot Password? </a>
        </div>

        <button type="submit"
          className="w-full bg-[#2DC08D] text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#26A97C] transition shadow-md"
        >
          { loading ?  "Logging in..." : "Login"}
        </button>
        {err && <p className="text-red-500 text-sm text-center">{err}</p>}
      </div>
    </form>
  );
};
export default Login;