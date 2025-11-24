import React, {useEffect} from 'react'
import Topbar from "./Dashboard/Topbar";
import BuildResume from "./Dashboard/BuildResume";
import Settings from "./Dashboard/Settings";
import Overview from "./Dashboard/Overview";
import { useDashboardStore } from "../store/useDashboardStore";
import { useResumeStore } from "../store/useResumeStore";

const Main = ({className = ""}) => {
  
  const activePage = useDashboardStore((s) => s.activePage);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const currentStep = useResumeStore((s) => s.currentStep);

  useEffect(() => {
    if (activePage === "buildresume" && currentStep === 4) {
      setSidebarOpen(false);
    }
  }, [activePage, currentStep]);


  return (
    <div className={`flex w-full flex-col ${className}`}>
        <Topbar />
        <div className="p-4 pt-8">
          {activePage === "overview" && <Overview />}
          {activePage === "buildresume" && <BuildResume />}
          {activePage === "upwork" && <div>Upwork Proposal Content</div>}
          {activePage === "ats score" && <div>ATS Score Page</div>}
          {activePage === "templates" && <div>Templates Page</div>}
          {activePage === "settings" && <Settings />}
        </div>
    </div>
  )
}

export default Main