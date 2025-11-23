import React from "react";
import { Search, User, ChevronUp } from "lucide-react";

const Topbar = () => {
  return (
    <div className="fixed top-0 z-50 bg-white w-[95%] flex items-center justify-between px-4 h-16">
      <div className="relative flex-1 max-w-sm z-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search for document..."
          className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-[#D9D9D9] bg-[#D9D9D9]/30 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1A9369] focus:border-[#1A9369] transition-all duration-200"
        />
      </div>

      <div className="flex items-center gap-2 ml-4 cursor-pointer">
        <button className="border border-gray-300 bg-[#E6FFF7] p-2 text-sm text-gray-600 rounded-lg">
          <span>Credits: </span>
          <span>10/10</span>
        </button>
        <User className="w-9 h-9 bg-gray-200 p-2  border border-gray-300 rounded-full text-gray-700" />
        {/* <button className="flex items-center gap-1 text-gray-800 font-medium">
          <ChevronUp className="w-4 h-4" />
        </button> */}
      </div>
    </div>
  );
};
export default Topbar;