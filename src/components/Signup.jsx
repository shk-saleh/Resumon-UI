import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../store/useAuthStore';

const Signup = ({ setMode }) => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const {signup, loading, err} = useAuthStore();
  const [show, setShow] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const res = await signup(formData);
    if(res.success)
      {
      console.log("Signup/Auth successful");
      setMode("login");
    }
    else{
      console.log("Signup/Auth failed:", res);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="space-y-5 mt-8">
      <div>
        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2"> Full Name </label>
        <input
          type="text" id="fullName" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required
          className="w-full px-4 py-2.5 text-(--gray-color) rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
        />
      </div>

      <div>
        <label id="email" htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label>
        <input
          type="email" id="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required
          className="w-full px-4 py-2.5 text-(--gray-color) rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
        />
      </div>

      <div className='relative'>
        <label id="password" htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2"> Password </label>
          <input
            type={show? 'text': 'password'} id="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required
            className="w-full px-4 py-2.5 text-(--gray-color) rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1A9B7F] focus:border-transparent transition"
          />
          <button className='absolute right-3 top-9 text-lg cursor-pointer' onClick={() => setShow((prev) => !prev)}>{show ? "🙈" : "👁️"}</button>
      </div>

      <div className="text-sm text-gray-600 text-right"> Already have an account?{' '}
        <span onClick={() => setMode("login")} className="text-orange-300 font-medium cursor-pointer hover:underline">Sign in</span>
      </div>

      <button type="submit"
        className="w-full bg-[#2DC08D] text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#26A97C] transition shadow-md"
      >
        { loading ?  "Signing up..." : "Sign Up"}
      </button>
      {err && <p className="text-red-500 text-sm text-center">{err}</p>}
    </div>

    </form>
  );
};
export default Signup;