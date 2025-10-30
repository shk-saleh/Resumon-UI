import React from 'react'
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
// import GetStarted from "./GetStarted";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/src/assets/images/logo.png" alt="Resumon" className="w-42 h-42 mx-auto mb-3 rounded-lg object-contain"/>
            </div>
            <div className="flex items-center gap-8 max-md:gap-4 max-sm:hidden">
              <button className="flex items-center gap-1 text-[#24272E] hover:text-[#149369] font-medium cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Tools
                <ChevronDown className="w-4 h-4" />
              </button>
              <NavLink to="/pricing" className="text-[#24272E] hover:text-[#149369] font-medium cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Pricing
              </NavLink>
              <NavLink to="/templates" className="text-[#24272E] hover:text-[#149369] font-medium cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Templates
              </NavLink>
              <NavLink to="/support" className="text-[#24272E] hover:text-[#149369] font-medium cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Support
              </NavLink>
            </div>
            <div className="max-sm:hidden">
              <button onClick={() => navigate("/GetStarted")} 
                className="bg-[#EB904A] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#d67f3d] cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Get Started
                <ArrowUpRight className="w-4 h-4 inline-block ml-2" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar