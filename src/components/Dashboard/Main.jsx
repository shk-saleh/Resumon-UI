import React, {useEffect} from 'react'
import Topbar from "./Topbar";
import BuildResume from "./BuildResume";
import Settings from "./Settings";
import Overview from "./Overview";
import { useDashboardStore } from "../../store/useDashboardStore";
import { useResumeStore } from "../../store/useResumeStore";
import ATS from './ATS';
import Template from './Template';

const Main = ({className = ""}) => {

  const { activePage,setSidebarOpen } = useDashboardStore();
    const { currentStep} = useResumeStore();

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
          {activePage === "upwork" && <div>Upwork Proposal Page</div>}
          {activePage === "ats score" && <ATS/>}
          {activePage === "templates" && <Template/>}
          {activePage === "settings" && <Settings />}
        </div>
    </div>
  )
}
export default Main