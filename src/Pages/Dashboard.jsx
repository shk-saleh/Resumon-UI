import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Dashboard = () => {

  return (
    <div className="h-screen flex bg-gradient-to-r from-[#FFFFFF] to-[#F1FFFB]">
      <Sidebar />
      <Main/>
    </div>
  );
};

export default Dashboard;
