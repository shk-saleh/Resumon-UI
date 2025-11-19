import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BuildResume from "../components/BuildResume";
import Settings from "../components/Settings";
import Overview from "../components/Overview";
import {useDashboardStore} from "../store/useDashboardStore";
import { useResumeStore } from "../store/useResumeStore";

const Dashboard = () => 
{
  const activePage = useDashboardStore((s) => s.activePage);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  
  const currentStep = useResumeStore((s) => s.currentStep);

  useEffect(() => {
    if (activePage === "buildresume" && currentStep === 4) {
      setSidebarOpen(false);
    }
  }, [activePage, currentStep]);

  return (
    <div className="flex h-screen min-h-0 bg-gradient-to-r from-[#FFFFFF] to-[#F1FFFB]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
        <Topbar />
        <div className="p-6 pt-4">
          {activePage === "overview" && <Overview />}
          {activePage === "buildresume" && <BuildResume />}
          {activePage === "upwork" && <div>Upwork Proposal Content</div>}
          {activePage === "ats score" && <div>ATS Score Page</div>}
          {activePage === "templates" && <div>Templates Page</div>}
          {activePage === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;