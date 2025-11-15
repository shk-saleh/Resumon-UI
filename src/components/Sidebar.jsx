import React,{useState} from "react";
import { ChartPie, PanelRightOpen,LogOut, User, Files, Settings, FileText, FileCheck, CheckCheck } from "lucide-react";
import useDashboardStore from "../store/useDashboardStore";
import logo from '../assets/images/logo.png'
import Logout from "./Logout";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const activePage = useDashboardStore((state) => state.activePage);
  const setActivePage = useDashboardStore((state) => state.setActivePage);

  const getButton = (page) =>
    `flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors duration-200 w-full ${
      activePage === page ? "bg-[#E6FFF7] text-[#2DC08D]": "hover:bg-gray-100 text-[#24272E]"
    }`;

  return (
    <div
      className={`flex flex-col justify-between bg-white border border-gray-200 transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16" } rounded-2xl m-2`}>
      <div className="mt-4 px-2 flex flex-col gap-2">

        <div className="flex items-center justify-between">
          {sidebarOpen && ( <img src={logo} alt="Resumon" className="w-28 md:w-32 ml-2 rounded-lg object-contain" /> )}
          <button onClick={toggleSidebar}
            className="flex items-center justify-center p-2 cursor-pointer hover:bg-gray-100 rounded-md transition-colors duration-200"
           >
              <PanelRightOpen className="w-5 h-5 text-[#BCBBBB]" />
          </button>
        </div>

        <button 
          onClick={() => setActivePage("overview")} 
          className={`${getButton("overview")} mt-10`}>
          <ChartPie className="w-5 h-5 text-[#2DC08D] ml-1" />
          {sidebarOpen && <span className="text-[#1A9369] text-lg font-medium">Overview</span>}
        </button>

        {sidebarOpen && <span className="text-[#B1B1B1] text-sm ml-2 mt-1">TOOLS</span>}

        <div className="flex flex-col gap-2 pl-4">
           <button 
              onClick={() => setActivePage("buildresume")}
              className={getButton("buildresume")}>
              <FileText className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Resume Builder</span>}
           </button>

           <button 
              onClick={() => setActivePage("upwork")}
              className={getButton("upwork")}>
              <FileCheck className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Upwork Proposal</span>}
           </button>

           <button 
              onClick={() => setActivePage("ats score")}
              className={getButton("ats score")}>
              <CheckCheck className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">ATS Score</span>}
           </button>
        </div>

        <div className="flex flex-col gap-2">
           <button 
              onClick={() => setActivePage("templates")}
              className={getButton("templates")}>
              <Files className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Templates</span>}
           </button>

           <button 
              onClick={() => setActivePage("settings")}
              className={getButton("settings")}>
              <Settings className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Settings</span>}
           </button>
        </div>
     </div>

      <div className={`mb-4 px-4 flex ${sidebarOpen ? "flex-row justify-between" : "flex-col items-center gap-4"} items-center`}>
        <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-gray-600" />
                {sidebarOpen && (
                   <div className="flex flex-col">
                     <span className="text-gray-700 font-medium">User</span>
                     <span className="text-gray-400 text-xs">user@gmail.com</span>
                   </div>
                )
            }
        </div>

        <button onClick={() => setIsLogoutOpen(true)}
           className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200">
         <LogOut className="w-6 h-6 text-red-500" />
        </button>

        <Logout isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)}/>
      </div>
    </div>
  );
};
export default Sidebar;