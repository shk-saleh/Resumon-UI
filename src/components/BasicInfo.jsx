import React from "react";
import { ArrowRight } from "lucide-react";
import { useResumeStore } from "../store/useResumeStore";

const BasicInfo = () => {
  const setTab = useResumeStore((s) => s.setActiveTab);

  return (
    <div>
      <h2>Basic Info Form</h2>

      <div className="flex justify-end mt-12">
        <button onClick={() => setTab("Experience")}
          className="px-3 py-1 bg-white border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer">
          Next
          <ArrowRight size={18} color="#2DC08D" />
        </button>
      </div>
    </div>
  );
};
export default BasicInfo;