import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2, Sparkles } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Experience = () => {
  const { setActiveTab, experiences, addExperience, updateExperience, removeExperience} = useResumeStore();
  const [errors, setErrors] = useState({});

  const employmentTypes = ["Full Time", "Part Time", "Internship", "Contract"];
  const locations = ["Remote", "On-site", "Hybrid"];

  useEffect(() => {
    if (!experiences || experiences.length === 0) addExperience();
  }, []);

  const validateRequired = () => {
    const newErrors = {};
    experiences.forEach((exp, idx) => {
      if (!exp.jobTitle) newErrors[`jobTitle-${idx}`] = "This field is required";
      if (!exp.company) newErrors[`company-${idx}`] = "This field is required";
      if (!exp.start) newErrors[`start-${idx}`] = "This field is required";
      if (!exp.currentlyWorking && !exp.end) newErrors[`end-${idx}`] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFormat = () => {
  const newErrors = {};
  const today = new Date();

  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  const parseDate = (d) => {
    const [day, month, year] = d.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  experiences.forEach((exp, idx) => {

      if (!/^[A-Za-z\s\.\-']+$/.test(exp.jobTitle))
        newErrors[`jobTitle-${idx}`] = "Title can contain only letters, spaces, or .,-";

      if (!/^[A-Za-z\s\.\-']+$/.test(exp.company))
        newErrors[`company-${idx}`] = "Company Name can contain only letters, spaces, or .,-";

    if (!dateRegex.test(exp.start)) {
      newErrors[`start-${idx}`] = "Enter a valid date (DD/MM/YYYY)";
      return;
    }

    // Validate (only if user is not currently working)
    if (!exp.currentlyWorking && exp.end && !dateRegex.test(exp.end)) {
      newErrors[`end-${idx}`] = "Enter a valid date (DD/MM/YYYY)";
      return;
    }

    const startDate = parseDate(exp.start);
    const endDate = exp.currentlyWorking ? null : exp.end ? parseDate(exp.end) : null;

    //START DATE <= TODAY
    if (startDate > today) {
      newErrors[`start-${idx}`] = "Start date cannot be in the future.";
    }

    //END DATE <= TODAY
    if (endDate && endDate > today) {
      newErrors[`end-${idx}`] = "End date cannot be in the future.";
    }

    //START < END (if end exists)
    if (endDate && startDate >= endDate) {
      newErrors[`end-${idx}`] = "End date must be greater than start date.";
    }
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleNext = () => {
    if (!validateRequired()) return;
    if (!validateFormat()) return;
    setActiveTab("Education");
  };

  return (
    <div>
      {experiences.map((exp, idx) => (
        <div key={exp.id} className="rounded-lg mb-6">
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
              <label className="mb-2 text-[#000000] text-sm">Employment Type</label>
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
              <label className="text-sm text-[#000000] mb-2">Location</label>
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
              disabled={exp.currentlyWorking}
              onChange={(v) => updateExperience(exp.id, { end: v })}
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

              <button className="px-3 py-1 text-sm bg-[#2DC08D]/10 text-[#2DC08D] border border-[#2DC08D] rounded-lg flex items-center gap-1 cursor-pointer">
                <Sparkles size={16} color="#2DC08D" />
                AI Generate
              </button>
            </div>

            <textarea
              placeholder="I have worked ...."
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
              className="w-full mt-4 p-3 bg-white border text-gray-700 placeholder-[#9CA3AF] border-[#C8C8C8] rounded-md h-40 outline-none"
            />
          </div>
        </div>
      ))}


      <div>
        <button onClick={addExperience}
          className="w-full flex items-center justify-center gap-2 mt-6 mb-12 px-3 py-2 border border-dashed border-[#2DC08D] text-[#000000]/60 rounded-lg bg-transparent"
        >
          <Plus size={16} color="#2DC08D" />
          Add Another Experience
        </button>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={() => setActiveTab("Basic Info")}
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