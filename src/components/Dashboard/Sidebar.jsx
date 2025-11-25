import React, { useState } from "react";
import { ChartPie, PanelRightOpen, LogOut, User,Files, Settings, FileText, FileCheck, CheckCheck} from "lucide-react";
import { useDashboardStore } from "../../store/useDashboardStore";
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
  const activePage = useDashboardStore((s) => s.activePage);
  const setActivePage = useDashboardStore((s) => s.setActivePage);

  const currentStep = useResumeStore((s) => s.currentStep);
  const setMethod = useResumeStore((s) => s.setMethod);
  const setCurrentStep = useResumeStore((s) => s.setCurrentStep);

  const menuSections = [
    {
      label: null,
      items: [
        { page: "overview", icon: ChartPie, label: "Overview", gapTop: "mt-10" },
      ]
    },
    {
      label: "Tools",
      items: [
        { page: "buildresume", icon: FileText, label: "Resume Builder" },
        { page: "upwork", icon: FileCheck, label: "Upwork Proposal" },
        { page: "ats score", icon: CheckCheck, label: "ATS Score" },
      ]
    },
    {
      label: null,
      items: [
        { page: "templates", icon: Files, label: "Templates" },
        { page: "settings", icon: Settings, label: "Settings" },
      ]
    }
  ];

  const handlePageChange = (page) => {
    if (activePage === "buildresume" && currentStep === 4 && page !== "buildresume") {
      setConfirmAction(page);
      setShowConfirm(true);
    } else {
      setActivePage(page);
    }
  };

  const handleConfirm = () => {
    setActivePage(confirmAction);
    setMethod(null);
    setCurrentStep(1);
    setShowConfirm(false);
    setConfirmAction(null);
  };

  const getButtonClass = (page) =>
    `flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors duration-200 w-full ${
      activePage === page
        ? "bg-[#2DC08D]/15 text-[#2DC08D]"
        : "hover:bg-gray-100 text-[#24272E]"
    }`;

  return (
    <div
      className={`fixed top-0 h-screen flex flex-col bg-white border border-gray-200 transition-all duration-300 ${
        sidebarOpen ? "w-72" : "w-14"
      }`}
    >
      <div className="mt-4 px-2 flex gap-2 justify-between items-center">
        {sidebarOpen && (
          <img src={logo} alt="Logo" className="w-28 md:w-32 ml-2 rounded-lg object-contain" />
        )}
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-md"
        >
          <PanelRightOpen className="w-5 h-5 text-[#BCBBBB]" />
        </button>
      </div>

      <div className="px-2 flex flex-col gap-3 mt-2">
        {menuSections.map((section, index) => (
          <div key={index}>

            {section.label && sidebarOpen && (
              <span className="text-[#B1B1B1] text-sm ml-2 mb-1 block">
                {section.label}
              </span>
            )}

            <div className={`${sidebarOpen ? "pl-2" : ""} flex flex-col gap-2`}>
              {section.items.map(({ page, icon: Icon, label, gapTop }) => (
                <Tippy key={page} content={label} placement="right" disabled={sidebarOpen}>
                  <button
                    className={`${getButtonClass(page)} ${gapTop ?? ""}`}
                    onClick={() => handlePageChange(page)}
                  >
                    <Icon className="w-5 h-5 text-[#BCBBBB]" />
                    {sidebarOpen && <span className="text-sm">{label}</span>}
                  </button>
                </Tippy>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`absolute bottom-0 mb-4 w-full px-2 flex items-center ${
          sidebarOpen ? "justify-between" : "justify-center"
        }`}
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
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <LogOut className="w-6 h-6 text-red-500" />
          </button>
        </Tippy>

        <Logout isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)} />
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Leave Resume Builder?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Your progress is saved as a draft. You can continue later.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-20"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-[#2DC08D] text-white rounded-lg hover:bg-[#25a575]"
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