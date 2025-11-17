import React, { useState, useEffect} from "react";
import { ChevronDown, ChevronUp, ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { tools } from "../data/tools";
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toolsOpen) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toolsOpen]);

  return (
    <div className="fixed top-0 left-0 mt-4 right-0 z-[100] px-2 sm:px-2 lg:px-10">
      <nav className="max-w-5xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200 transition duration-300 text-gray-900">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Link to='/'> <img src={logo} alt="Resumon" className="w-30 rounded-lg object-contain" /></Link>
          </div>

          <div className="hidden sm:flex items-center gap-8">
            <div className="relative">
              <button onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1 text-[#24272E] hover:text-[#149369] font-normal text-sm cursor-pointer"
              >
                Tools {toolsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {toolsOpen && (
                <div className="absolute top-8 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-50">
                  {tools.map((tool, index) => (
                    <button key={index}
                      onClick={() => { navigate(tool.path); setToolsOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-[#24272E] hover:text-[#149369] hover:bg-gray-50 transition cursor-pointer">
                      {tool.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/pricing" className="text-[#24272E] hover:text-[#149369] font-normal text-sm cursor-pointer">
              Pricing
            </NavLink>
            <NavLink to="/templates" className="text-[#24272E] hover:text-[#149369] font-normal text-sm cursor-pointer">
              Templates
            </NavLink>
            <NavLink to="/support" className="text-[#24272E] hover:text-[#149369] font-normal text-sm cursor-pointer">
              Support
            </NavLink>
          </div>

          <div className="hidden sm:flex">
            <button onClick={() => navigate("/get-started")}
              className="flex justify-center items-center bg-[#EB904A] text-white px-4 py-2.5 rounded-lg font-normal text-sm sm:text-xs md:text-base duration-200 transition-all hover:bg-[#d67f3d] cursor-pointer">
              Get Started
              <ArrowUpRight className="w-4 h-4 inline-block ml-1" />
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button onClick={() => setMenu(!menu)}
              className="p-2 text-gray-800 hover:text-[#149369] transition">
              {menu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {menu && (
        <div className="absolute top-14 right-4 bg-white rounded-lg shadow-md flex flex-col w-37 py-2 px-2 transition-all duration-300 sm:hidden z-40">
          <button
            onClick={() => { navigate("/pricing"); setMenu(false); }}
            className="text-left text-sm cursor-pointer font-normal text-[#24272E] hover:text-[#149369] px-2 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Pricing
          </button>
          <button
            onClick={() => { navigate("/templates"); setMenu(false); }}
            className="text-left text-sm cursor-pointer font-normal text-[#24272E] hover:text-[#149369] px-2 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Templates
          </button>
          <button
            onClick={() => { navigate("/support"); setMenu(false); }}
            className="text-left text-sm cursor-pointer font-normal text-[#24272E] hover:text-[#149369] px-2 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Support
          </button>

          <button
            onClick={() => { navigate("/GetStarted"); setMenuOpen(false); }}
            className="mt-2 bg-[#FDE7D9] text-[#EB904A] w-full px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-200 cursor-pointer"
          >
            Get Started
          </button>

        </div>
      )}
    </div>
  );
};
export default Navbar;