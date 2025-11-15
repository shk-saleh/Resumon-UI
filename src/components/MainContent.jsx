import React from 'react'
import BuildResume from "./BuildResume";
import Settings from "./Settings";
import useDashboardStore from '../store/useDashboardStore'

const MainContent = () => {
    const activePage = useDashboardStore((state) => state.activePage);
  return (
    <div className="p-6 pt-10 flex-1 overflow-auto">
        {activePage === "overview" && <div>Welcome to Resumon!</div>}
        {activePage === "buildresume" && <BuildResume />}
        {activePage === "upwork" && <div>Upwork Proposal Content</div>}
        {activePage === "ats score" && <div>ATS Score Page</div>}
        {activePage === "templates" && <div>Templates Page</div>}
        {activePage === "settings" && <Settings />}
    </div>
  )
}
export default MainContent