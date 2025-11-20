// Step4.jsx
import React, { useState } from "react";
import { useDashboardStore } from "../store/useDashboardStore";
import BasicInfo from "./BasicInfo";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import { useResumeStore } from "../store/useResumeStore";
import { tipsData } from "../data/tipsData";
import Classic from "./Templates/Classic";

const Step4 = () => {
  const tabs = ["Basic Info", "Experience", "Education", "Skills", "Certifications"];
  const sidebarOpen = useDashboardStore((s) => s.sidebarOpen);
  const activeTab = useResumeStore((s) => s.activeTab);

  // local state for modal
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="flex gap-16 w-full">
      {/* LEFT: FORM SIDE */}
      <div className="flex-1">
        <h3 className="text-[23px] text-(--dark-color) font-normal my-1">
          Resume Builder
        </h3>
        <p className="text-sm text-(--dark-color) font-light mb-7">
          Create your professional resume step-by-step
        </p>

        <div className="flex gap-9 mb-6 pb-3 border-b border-[#D9D9D9]">
          {tabs.map((tab) => {
            const active = activeTab === tab;
            return (
              <div key={tab} className="flex items-center gap-3">
                <div
                  className={`h-2 w-2 rounded-full mt-1 ${
                    active ? "bg-[#2DC08D]" : "bg-[#D9D9D9]"
                  }`}
                />
                <span
                  className={`text-lg font-normal ${
                    active ? "text-[#2DC08D]" : "text-[#D9D9D9]"
                  }`}
                >
                  {tab}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          {activeTab === "Basic Info" && <BasicInfo />}
          {activeTab === "Experience" && <Experience />}
          {activeTab === "Education" && <Education />}
          {activeTab === "Skills" && <Skills />}
          {activeTab === "Certifications" && <Certifications />}
        </div>
      </div>

      {/* RIGHT: PREVIEW + TIPS */}
      {!sidebarOpen && (
        <div className="w-[310px] pl-5 flex flex-col gap-6">
          {/* CLICKABLE PREVIEW CARD */}
          <div
            className="p-3 rounded-xl bg-white h-[350px] shadow-[0_0_2px_#00000026] cursor-pointer"
            onClick={() => setIsPreviewOpen(true)}
          >
            <div className="w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
              {/* Centered & scaled resume */}
              <div className="transform origin-center scale-[0.28]">
                <Classic />
              </div>
            </div>
          </div>


          {/* Tips */}
          <div className="pt-1">
            <h3 className="text-lg font-normal mb-2">Tips</h3>
            <ul className="list-disc list-outside text-sm font-light text-[#858383] marker:text-[#000000]/40 space-y-2">
              {tipsData[activeTab].map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* FULLSCREEN MODAL PREVIEW */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8">
            {/* Close button */}
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Close preview"
            >
              ✕
            </button>

            <div className="flex justify-center">
              <Classic />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step4;
