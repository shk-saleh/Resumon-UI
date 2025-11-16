import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#FFFFFF] to-[#F1FFFB]">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col min-h-0">
        <Topbar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
