import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Education = () => {
  const { setActiveTab, education, addEducation, updateEducation,removeEducation} = useResumeStore();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (education.length === 0) addEducation();
  }, []);

  const validateRequired = () => {
    const newErrors = {};

    education.forEach((edu, idx) => {
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

  const validateFormat = () => {
    const newErrors = {};
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const today = new Date();

    const parseDate = (d) => {
      const [day, month, year] = d.split("/").map(Number);
      return new Date(year, month - 1, day);
    };

    education.forEach((edu, idx) => {
      if (!/^[A-Za-z\s\.\-']+$/.test(edu.degree))
        newErrors[`degree-${idx}`] = "Degree can contain only letters, spaces, or .,-";

      if (!/^[A-Za-z\s\.\-']+$/.test(edu.school))
        newErrors[`school-${idx}`] = "School can contain only letters, spaces, or .,-";

      if (!/^[A-Za-z0-9\+\.\-]+$/.test(edu.grade))
        newErrors[`grade-${idx}`] = "Grade can contain only letters, numbers or +.-";

      if (!dateRegex.test(edu.startDate))
        newErrors[`start-${idx}`] = "Enter a valid date (DD/MM/YYYY)";

      // Validate (only if user is not currently Enrolled)
      if (!edu.currentlyEnrolled && edu.endDate && !dateRegex.test(edu.endDate)) {
        newErrors[`end-${idx}`] = "Enter a valid date (DD/MM/YYYY)";
      }

      const startDate = parseDate(edu.startDate);
      const endDate = edu.currentlyEnrolled ? null : edu.endDate ? parseDate(edu.endDate) : null;

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
    setActiveTab("Skills");
  };

  return (
    <div>
      {education.map((edu, idx) => (
        <div key={edu.id} className="rounded-lg mb-6">
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

          <div className="mt-6 flex items-center gap-2">
            <input
              type="checkbox"
              checked={edu.currentlyEnrolled || false}
              onChange={(e) =>
                updateEducation(edu.id, { currentlyEnrolled: e.target.checked, endDate: "Present" })
              }
              id={`current-${edu.id}`}
              className="w-4 h-4 accent-[#2DC08D]"
            />
            <label htmlFor={`current-${edu.id}`} className="text-sm text-gray-800">
              I am currently enrolled here
            </label>
          </div>

          <div className="mt-6">
            <label className="text-base font-normal text-[#000000]">
              Description / Achievements
            </label>
            <textarea
              placeholder="What did you learn or achieve..."
              value={edu.description}
              onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
              className="w-full mt-3 p-3 bg-white border border-[#C8C8C8] text-gray-700 placeholder-[#9CA3AF] rounded-md h-32 outline-none"
            />
          </div>
        </div>
      ))}

      <div>
        <button onClick={addEducation}
          className="w-full flex items-center justify-center gap-2 mt-6 mb-12 px-3 py-2 border border-dashed border-[#2DC08D] text-[#000000]/60 rounded-lg bg-transparent"
        >
          <Plus size={16} color="#2DC08D" />
          Add Another Education
        </button>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={() => setActiveTab("Experience")}
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