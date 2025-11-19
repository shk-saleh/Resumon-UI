import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useResumeStore } from "../store/useResumeStore";

const Education = () => {
  const setTab = useResumeStore((s) => s.setActiveTab);

  return (
    <div>
      <h2>Education Form</h2>

      <div className="flex justify-between mt-12">
        
        <button onClick={() => setTab("Experience")}
          className="px-3 py-1 border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer">
          <ArrowLeft size={18} color="#2DC08D" />
          Back
        </button>

        <button onClick={() => setTab("Skills")}
          className="px-3 py-1 bg-white border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer">
          Next
          <ArrowRight size={18} color="#2DC08D" />
        </button>

      </div>
    </div>
  );
};
export default Education;