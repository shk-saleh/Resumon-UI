import React from "react";
import BuildResume from "./BuildResume";
import Settings from "./Settings";
import Overview from "./Overview";
import useDashboardStore from "../store/useDashboardStore";

const MainContent = () => {
  const activePage = useDashboardStore((state) => state.activePage);
  
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6">
        {activePage === "overview" && <Overview />}
        {activePage === "buildresume" && <BuildResume />}
        {activePage === "upwork" && <div>Upwork Proposal Content</div>}
        {activePage === "ats score" && <div>ATS Score Page</div>}
        {activePage === "templates" && <div>Templates Page</div>}
        {activePage === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default MainContent;
