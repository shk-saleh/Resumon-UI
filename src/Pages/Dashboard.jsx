import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Main from "../components/Dashboard/Main";
import {useDashboardStore} from "../store/useDashboardStore";

const Dashboard = () => {

  const sidebarOpen = useDashboardStore((s) => s.sidebarOpen);

  return (
    <div className="flex w-full min-h-screen bg-gray-50/40">
      <Sidebar />
      <Main className={`${sidebarOpen ? "ml-72" : "ml-16"} transition-all duration-300`}/>
    </div>
  );
};
export default Dashboard;