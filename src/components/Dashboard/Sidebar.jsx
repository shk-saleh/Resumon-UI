import React, { useState } from "react";
import { ChartPie, PanelRightOpen, LogOut, User, Files, Settings, FileText, FileCheck, CheckCheck } from "lucide-react";
import {useDashboardStore} from "../../store/useDashboardStore";
import { useResumeStore } from "../../store/useResumeStore";
import logo from "../../assets/images/logo.png";
import Logout from "../Logout";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";


const Sidebar = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);

  const sidebarOpen = useDashboardStore((s) => s.sidebarOpen); 
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar); 
  const activePage = useDashboardStore((state) => state.activePage); 
  const setActivePage = useDashboardStore((state) => state.setActivePage);
  const currentStep = useResumeStore((s) => s.currentStep);
  const setMethod = useResumeStore((s) => s.setMethod);
  const setCurrentStep = useResumeStore((s) => s.setCurrentStep);

  const handlePageChange = (page) => {
    // If navigating away from resume builder at step 4, show confirmation
    if (activePage === "buildresume" && currentStep === 4 && page !== "buildresume") {
      setConfirmAction(page);
      setShowConfirm(true);
    } else {
      setActivePage(page);
    }
  };

  const handleConfirm = () => {
    setActivePage(confirmAction);
    setShowConfirm(false);
    setConfirmAction(null);
    setMethod(null);
    setCurrentStep(1);
  };

  const getButton = (page) =>
    `flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors duration-200 w-full ${activePage === page
      ? "bg-[#2DC08D]/15 text-[#2DC08D]"
      : "hover:bg-gray-100 text-[#24272E]"
    }`;

  return (
    <div className={`fixed top-0 h-screen flex flex-col bg-white border border-gray-200 transition-all duration-300 ${sidebarOpen ? "w-72" : "w-14"} `}
    >
      <div className="mt-4 px-2 flex gap-2 justify-between items-center">
        {sidebarOpen && (
          <img src={logo} alt="Resumon" className="w-28 md:w-32 ml-2 rounded-lg object-contain" />
        )}
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 cursor-pointer hover:bg-gray-100 rounded-md transition-colors duration-200"
        >
          <PanelRightOpen className="w-5 h-5 text-[#BCBBBB]" />
        </button>
      </div>

      <div className="px-2 flex flex-col gap-2">
        <Tippy content="Overview" placement="right" disabled={sidebarOpen}>
          <button
            onClick={() => handlePageChange("overview")}
            className={`${getButton("overview")} mt-10`}
          >
            <ChartPie className="w-5 h-5 text-[#BCBBBB]" />
            {sidebarOpen && (
              <span className="text-[#24272E] text-sm">Overview</span>
            )}
          </button>
        </Tippy>

        {sidebarOpen && (
          <span className="text-[#B1B1B1] text-sm ml-2 mt-1">Tools</span>
        )}

        <div className={`flex flex-col gap-2 ${sidebarOpen ? "pl-2" : "pl-0"}`}>
          <Tippy content="Resume Builder" placement="right" disabled={sidebarOpen}>
            <button
              onClick={() => handlePageChange("buildresume")}
              className={getButton("buildresume")}
            >
              <FileText className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Resume Builder</span>}
            </button>
          </Tippy>

          <Tippy content="Upwork Proposal" placement="right" disabled={sidebarOpen}>
            <button
              onClick={() => handlePageChange("upwork")}
              className={getButton("upwork")}
            >
              <FileCheck className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Upwork Proposal</span>}
            </button>
          </Tippy>

          <Tippy content="ATS Score" placement="right" disabled={sidebarOpen}>
            <button
              onClick={() => handlePageChange("ats score")}
              className={getButton("ats score")}
            >
              <CheckCheck className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">ATS Score</span>}
            </button>
          </Tippy>
        </div>

        <div className="flex flex-col gap-2">
          <Tippy content="Templates" placement="right" disabled={sidebarOpen}>
            <button
              onClick={() => handlePageChange("templates")}
              className={getButton("templates")}
            >
              <Files className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Templates</span>}
            </button>
          </Tippy>

          <Tippy content="Settings" placement="right" disabled={sidebarOpen}>
            <button
              onClick={() => handlePageChange("settings")}
              className={getButton("settings")}
            >
              <Settings className="w-5 h-5 text-[#BCBBBB]" />
              {sidebarOpen && <span className="text-[#24272E] text-sm">Settings</span>}
            </button>
          </Tippy>
        </div>
      </div>

      <div
        className={`absolute bottom-0 mb-4 w-full px-2 flex items-center 
         ${sidebarOpen ? "justify-between" : "justify-center"}`}
       >
        {sidebarOpen && (
          <div className="flex items-center gap-3 px-2">
            <User className="w-6 h-6 text-gray-600" />
            <div className="flex flex-col">
              <span className="text-gray-700 font-medium">User</span>
              <span className="text-gray-400 text-xs">user@gmail.com</span>
            </div>
          </div>
        )}

        <Tippy content="Logout" placement="right" disabled={sidebarOpen}>
          <button
            onClick={() => setIsLogoutOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200">
            <LogOut className="w-6 h-6 text-red-500" />
          </button>
        </Tippy>

        <Logout isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)} />
      </div>

      {/* Confirmation Modal for Page Change */}
      {showConfirm && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Leave Resume Builder?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Your current form data will be preserved. You can access this from draft!
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-[#2DC08D] text-white rounded-lg hover:bg-[#25a575] transition-colors duration-200"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;