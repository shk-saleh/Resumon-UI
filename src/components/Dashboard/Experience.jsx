import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2, Sparkles } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Experience = () => {
  const setTab = useResumeStore((s) => s.setActiveTab);
  const experiences = useResumeStore((s) => s.experiences);
  const addExperience = useResumeStore((s) => s.addExperience);
  const updateExperience = useResumeStore((s) => s.updateExperience);
  const removeExperience = useResumeStore((s) => s.removeExperience);

  const [errors, setErrors] = useState({});

  const employmentTypes = ["Full Time", "Part Time", "Internship", "Contract"];
  const locations = ["Remote", "On-site", "Hybrid"];

  useEffect(() => {
    if (!experiences || experiences.length === 0) addExperience();
  }, []);

  const validate = () => {
    const newErrors = {};
    (experiences || []).forEach((exp, idx) => {
      if (!exp.jobTitle) newErrors[`jobTitle-${idx}`] = "This field is required";
      if (!exp.company) newErrors[`company-${idx}`] = "This field is required";
      if (!exp.start) newErrors[`start-${idx}`] = "This field is required";
      if (!exp.currentlyWorking && !exp.end) newErrors[`end-${idx}`] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    setTab("Education");
  };

  return (
    <div>
      {experiences.map((exp, idx) => (
        <div key={exp.id} className="relative p-4 rounded-lg mb-6">
          {idx > 0 && (
            <button
              onClick={() => removeExperience(exp.id)}
              className="absolute top-2 right-2 p-1 hover:bg-red-100 rounded-full"
            >
              <Trash2 size={16} color="#FF4D4F" />
            </button>
          )}

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="Job Title"
              placeholder="Web Developer"
              value={exp.jobTitle}
              error={errors[`jobTitle-${idx}`]}
              onChange={(v) => updateExperience(exp.id, { jobTitle: v })}
            />
            <InputField
              label="Company Name"
              placeholder="XeroSoft Tech"
              value={exp.company}
              error={errors[`company-${idx}`]}
              onChange={(v) => updateExperience(exp.id, { company: v })}
            />

            <div className="flex flex-col">
              <label className="text-base mb-2">Employment Type</label>
              <select
                value={exp.type || employmentTypes[0]}
                onChange={(e) => updateExperience(exp.id, { type: e.target.value })}
                className="border border-[#C8C8C8] text-gray-700 bg-white px-3 py-2 rounded-lg focus:outline-none"
              >
                {employmentTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-base mb-2">Location</label>
              <select
                value={exp.location || locations[0]}
                onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                className="border border-[#C8C8C8] text-gray-700 bg-white px-3 py-2 rounded-lg focus:outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <InputField
              label="Start Date"
              placeholder="DD/MM/YYYY"
              value={exp.start}
              error={errors[`start-${idx}`]}
              onChange={(v) => updateExperience(exp.id, { start: v })}
            />

            <InputField
              label="End Date"
              placeholder="DD/MM/YYYY"
              value={exp.end}
              error={errors[`end-${idx}`]}
              onChange={(v) => updateExperience(exp.id, { end: v })}
              disabled={exp.currentlyWorking}
            />
          </div>

          <div className="mt-6 flex items-center gap-2">
            <input
              type="checkbox"
              checked={exp.currentlyWorking || false}
              onChange={(e) =>
                updateExperience(exp.id, { currentlyWorking: e.target.checked, end: "" })
              }
              id={`current-${exp.id}`}
               className="w-4 h-4 accent-[#2DC08D]"
            />
            <label htmlFor={`current-${exp.id}`} className="text-sm text-[#000000]">
              I am currently working here
            </label>
          </div>

          <div className="mt-12">
            <div className="flex justify-between items-center">
              <label className="text-base font-normal text-[#000000]">
                Job Description and Achievements
              </label>

              <button className="px-3 py-1 text-sm bg-[#2DC08D]/10 border border-[#2DC08D] rounded-lg flex items-center gap-1 cursor-pointer">
                <Sparkles size={16} color="#2DC08D" />
                AI Generate
              </button>
            </div>

            <textarea
              placeholder="I have worked ...."
              className="w-full mt-4 p-3 bg-white border text-gray-700 placeholder-[#9CA3AF] border-[#C8C8C8] rounded-md h-40 outline-none"
            />
          </div>
        </div>
      ))}


      <div className="px-4">
        <button onClick={addExperience}
          className="w-full flex items-center justify-center gap-2 mt-6 mb-12 px-3 py-2 border border-dashed border-[#2DC08D] text-[#000000]/60 rounded-lg bg-transparent"
        >
          <Plus size={16} color="#2DC08D" />
          Add Another Experience
        </button>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={() => setTab("Basic Info")}
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
export default Experience;