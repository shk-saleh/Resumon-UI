import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10">
      <nav className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="px-2">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <img src="/src/assets/images/logo.png" alt="Resumon" className="w-30 mx-auto rounded-lg object-contain"/>
            </div>
            <div className="flex items-center gap-8 max-md:gap-4 max-sm:hidden">
              <button className="flex items-center gap-1 text-(--dark-color) hover:text-[#149369] font-normal text-sm cursor-pointer">
                Tools
                <ChevronDown className="w-4 h-4" />
              </button>
              <NavLink to="/pricing" className="text-(--dark-color) hover:text-[#149369] font-normal text-sm cursor-pointer">
                Pricing
              </NavLink>
              <NavLink to="/templates" className="text-(--dark-color) hover:text-[#149369] font-normal text-sm cursor-pointer">
                Templates
              </NavLink>
              <NavLink to="/support" className="text-(--dark-color) hover:text-[#149369] font-normal text-sm cursor-pointer">
                Support
              </NavLink>
            </div>
            <div className="max-sm:hidden">
              <button onClick={() => navigate("/GetStarted")} 
                className="flex justify-center items-center bg-[#EB904A] text-white px-4 py-2.5 rounded-lg font-normal duration-200 transition-all hover:bg-[#d67f3d] cursor-pointer" >
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