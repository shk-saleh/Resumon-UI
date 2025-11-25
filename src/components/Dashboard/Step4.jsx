import React, { useState } from "react";
import { File} from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import { useDashboardStore } from "../../store/useDashboardStore";
import BasicInfo from "./BasicInfo";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import { tipsData } from "../../data/tipsData";
import Classic from "./Templates/Classic";
import Modern from "./Templates/Modern"
import Template3 from "./Templates/Template3";
import DownShare from "./DownShare";

const Step4 = () => {

   const renderTemplate = () => {
    if (template === 1) return <Modern />;
    if (template === 2) return <Classic />;
    if (template === 3) return <Template3 />;
    return null;
  };

  const tabs = ["Basic Info", "Experience", "Education", "Skills", "Certifications"];
  const sidebarOpen = useDashboardStore((s) => s.sidebarOpen);
  const setActivePage = useDashboardStore((s) => s.setActivePage);
  const { activeTab, template,resetResumeBuilder} = useResumeStore();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleSaveAsDraft = () => {
    //Here we can call an API to save the current store data, then reset store
    resetResumeBuilder();
    setActivePage("overview");
  };

  return (
    <div className="flex gap-10 w-full">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-7">
          <div>
            <h3 className="text-[23px] text-(--dark-color) font-normal my-1">
              Resume Builder
            </h3>
            <p className="text-sm text-(--dark-color) font-light">
              Create your professional resume step-by-step
            </p>
          </div>
          <button
            onClick={handleSaveAsDraft}
            className="flex items-center gap-2 px-2 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 rounded-lg cursor-pointer transition-colors duration-200"
          >
            <File size={18} />
            Save as Draft
          </button>
        </div>

        <div className="flex gap-9 mb-6 pb-3 border-b border-[#D9D9D9]">
          {tabs.map((tab) => {
            const active = activeTab === tab;
            return (
              <div
                key={tab}
                className={`flex items-center gap-3 transition-colors duration-200 ${
                  active ? "opacity-100" : "opacity-60"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    active ? "bg-[#2DC08D]" : "bg-[#D9D9D9]"
                  }`}
                />
                <span className={`text-md font-normal ${
                    active ? "text-[#2DC08D]" : "text-[#D9D9D9]"
                  }`}
                >
                  {tab}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          {activeTab === "Basic Info" && <BasicInfo />}
          {activeTab === "Experience" && <Experience />}
          {activeTab === "Education" && <Education />}
          {activeTab === "Skills" && <Skills />}
          {activeTab === "Certifications" && <Certifications />}
        </div>
      </div>

      {!sidebarOpen && (
        <div className="w-[310px] flex flex-col gap-6 pt-30">
          <div className="relative group">
            <div
              className="p-3 rounded-xl bg-white h-[350px] border border-gray-300 cursor-pointer group-hover:brightness-95 transition-all duration-200"
              onClick={() => setIsPreviewOpen(true)}
            > 
              <div className="w-full h-[580px] rounded-lg flex items-center justify-center">
                <div className="transform origin-top mt-7 scale-[0.28]"> {renderTemplate()} </div>
              </div>
            </div>
          </div>

          <div className="pt-1">
            <h3 className="text-lg font-medium mb-2 text-[#2DC08D]">Tips</h3>
            <ul className="list-disc list-outside text-xs font-light text-[#858383] marker:text-[#000000]/40 space-y-2 ps-4">
              {(tipsData[activeTab] || tipsData["Basic Info"] || []).map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Close preview"
            >
              ✕
            </button>
            <div className="flex justify-center"> {renderTemplate()} </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Step4;