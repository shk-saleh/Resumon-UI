import React from "react";
import { Search, User} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore"
import { useCreditStore } from "../../store/useCreditStore";

const Topbar = () => {

  const { user } = useAuthStore();
  const { credits } = useCreditStore();
  
  return (
    <div className="bg-white w-full flex items-center justify-between px-4 h-16">
      <div className="flex items-center gap-2 justify-start max-w-sm w-full px-3 py-2 text-sm rounded-lg border border-[#D9D9D9] bg-[#D9D9D9]/30 text-gray-800 ">
        <Search className="text-gray-700 w-4 h-4" />
        <input
          type="text"
          placeholder="Search for document..."
          className="outline-none"
        />
      </div>

      <div className="flex items-center gap-2 ml-4 cursor-pointer">
        <button className="border border-gray-300 bg-[#00ce8c] p-2 text-sm text-white rounded-lg">
          <span>Credits: </span>
          <span>{credits.total}/{credits.remaining}</span>
        </button>
        {user.avatar ? (
          <img src={user.avatar} className="w-8 h-8 rounded-full object-cover"/>
        ) : (
          <User className="w-9 h-9 bg-gray-200 p-2  border border-gray-300 rounded-full text-gray-700" />
        )}
      </div>
    </div>
  );
};
export default Topbar;