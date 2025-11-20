import React, {useEffect} from 'react'
import Topbar from "../components/Topbar";
import BuildResume from "../components/BuildResume";
import Settings from "../components/Settings";
import Overview from "../components/Overview";
import { useDashboardStore } from "../store/useDashboardStore";
import { useResumeStore } from "../store/useResumeStore";

const Main = () => {
  
  const activePage = useDashboardStore((s) => s.activePage);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const currentStep = useResumeStore((s) => s.currentStep);

  useEffect(() => {
    if (activePage === "buildresume" && currentStep === 4) {
      setSidebarOpen(false);
    }
  }, [activePage, currentStep]);


  return (
    <div className="flex flex-col h-auto w-full">
        <Topbar />
        <div className="overflow-y-auto p-4 pt-4">
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