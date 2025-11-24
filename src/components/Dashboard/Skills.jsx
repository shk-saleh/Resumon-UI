import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Plus, X } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";

const Skills = () => {
  const setTab = useResumeStore((s) => s.setActiveTab);
  const skills = useResumeStore((s) => s.skills);
  const addSkill = useResumeStore((s) => s.addSkill);
  const removeSkill = useResumeStore((s) => s.removeSkill);

  const [inputSkill, setInputSkill] = useState("");
  const [error, setError] = useState("");

  const handleAddSkill = () => {
    const trimmed = inputSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      addSkill(trimmed);
      setInputSkill("");
    }
  };

  const handleNext = () => {
    if (skills.length === 0) {
      setError("Please add at least one skill.");
      return;
    }
    setError("");
    setTab("Certifications");
  };

  return (
    <div>
      <label className="text-lg font-normal text-gray-800">
        Skills
      </label>
      <div className="flex items-center gap-2 mt-3 mb-2">
        <div className="flex flex-wrap items-center gap-2 bg-white border border-[#C8C8C8] rounded-lg px-2 py-2 flex-1">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-[#F1F0F0] text-gray-700 px-4 py-1 rounded-md text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="rounded-full"
              >
                <X size={18} color="#858383" />
              </button>
            </div>
          ))}

          <input
            type="text"
            value={inputSkill}
            onChange={(e) => setInputSkill(e.target.value)}
            className="flex-1 outline-none text-base  text-gray-700"
            onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
          />
        </div>
        <button
          onClick={handleAddSkill}
          className="flex items-center gap-1 px-4 py-3 cursor-pointer border border-[#2DC08D] bg-[#2DC08D]/10 text-[#000000] rounded-md text-sm hover:bg-[#2DC08D]/20"
        >
          <Plus size={18} color="#2DC08D" />
          Add
        </button>
      </div>
      {error && ( <p className="text-red-500 text-sm mt-1 mb-4">{error}</p>)}

      <div className="mt-6 mb-20">
        <h3 className="text-sm font-normal mb-3 text-[#2DC08D]">Suggested Skills</h3>
        <div className="flex gap-2">
          {["React", "Redux", "Tailwind"].map((skill) => (
            <button
              key={skill}
              className="px-4 py-1 bg-white text-gray-700 border border-[#C8C8C8] rounded-2xl text-sm"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={() => setTab("Education")}
          className="px-3 py-1 border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={18} color="#2DC08D" />
          Back
        </button>

        <button onClick={handleNext}
          className="px-3 py-1 bg-white border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          Next
          <ArrowRight size={18} color="#2DC08D" />
        </button>
      </div>
    </div>
  );
};
export default Skills;