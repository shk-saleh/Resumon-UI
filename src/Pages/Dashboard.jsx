import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Main from "../components/Main";

const Dashboard = () => {

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#FFFFFF] to-[#F1FFFB]">
      <Sidebar />
      <Main/>
    </div>
  );
};

export default Dashboard;
