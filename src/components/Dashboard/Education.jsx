import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Education = () => {
  const setTab = useResumeStore((s) => s.setActiveTab);
  const educationList = useResumeStore((s) => s.education);
  const addEducation = useResumeStore((s) => s.addEducation);
  const updateEducation = useResumeStore((s) => s.updateEducation);
  const removeEducation = useResumeStore((s) => s.removeEducation);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (educationList.length === 0) addEducation();
  }, []);

  const validate = () => {
    const newErrors = {};
    educationList.forEach((edu, idx) => {
      if (!edu.degree) newErrors[`degree-${idx}`] = "This field is required";
      if (!edu.grade) newErrors[`grade-${idx}`] = "This field is required";
      if (!edu.school) newErrors[`school-${idx}`] = "This field is required";
      if (!edu.startDate) newErrors[`start-${idx}`] = "This field is required";
      if (!edu.currentlyEnrolled && !edu.endDate)
        newErrors[`end-${idx}`] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    setTab("Skills");
  };

  return (
    <div>
      {educationList.map((edu, idx) => (
        <div key={edu.id} className="relative p-4 rounded-lg mb-6">
          {idx > 0 && (
            <button onClick={() => removeEducation(edu.id)}
              className="absolute top-2 right-2 p-1 hover:bg-red-100 rounded-full"
            >
              <Trash2 size={16} color="#FF4D4F" />
            </button>
          )}

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="Degree Title"
              placeholder="Bachelors in CS"
              value={edu.degree}
              error={errors[`degree-${idx}`]}
              onChange={(v) => updateEducation(edu.id, { degree: v })}
            />
            <InputField
              label="Grade/CGPA"
              placeholder="3.8"
              value={edu.grade}
              error={errors[`grade-${idx}`]}
              onChange={(v) => updateEducation(edu.id, { grade: v })}
            />
          </div>

          <div className="my-4">
            <InputField
              label="School / University"
              placeholder="National University"
              value={edu.school}
              error={errors[`school-${idx}`]}
              onChange={(v) => updateEducation(edu.id, { school: v })}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="Start Date"
              placeholder="DD/MM/YYYY"
              value={edu.startDate}
              error={errors[`start-${idx}`]}
              onChange={(v) => updateEducation(edu.id, { startDate: v })}
            />
            <InputField
              label="End Date"
              placeholder="DD/MM/YYYY"
              type="text"
              value={edu.endDate}
              error={errors[`end-${idx}`]}
              onChange={(v) => updateEducation(edu.id, { endDate: v })}
              disabled={edu.currentlyEnrolled}
            />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={edu.currentlyEnrolled || false}
              onChange={(e) =>
                updateEducation(edu.id, { currentlyEnrolled: e.target.checked, endDate: "" })
              }
              id={`current-${edu.id}`}
            />
            <label htmlFor={`current-${edu.id}`} className="text-sm">
              I am currently enrolled here
            </label>
          </div>
        </div>
      ))}

      <button onClick={addEducation}
        className="w-full flex items-center justify-center gap-2 mt-6 mb-12 px-3 py-2 border border-dashed border-[#2DC08D] text-[#000000]/60 rounded-lg bg-transparent"
      >
        <Plus size={16} color="#2DC08D" />
        Add Another Education
      </button>

      <div className="flex justify-between mt-12">
        <button onClick={() => setTab("Experience")}
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
export default Education;