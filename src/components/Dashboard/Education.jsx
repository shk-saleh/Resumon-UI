import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Education = () => {
  const {
    setActiveTab,
    activeResume,
    addEducation,
    updateEducation,
    removeEducation,
  } = useResumeStore();

  // Direct access — no mapping!
  const education = activeResume?.education || [];

  const [errors, setErrors] = useState({});

  // Add first education entry if none exist
  useEffect(() => {
    if (education.length === 0) {
      addEducation();
    }
  }, []);

  const validateRequired = () => {
    const newErrors = {};
    let valid = true;

    education.forEach((edu, idx) => {
      if (!edu.degree?.trim()) {
        newErrors[`degree-${idx}`] = "Degree is required";
        valid = false;
      }
      if (!edu.grade?.trim()) {
        newErrors[`grade-${idx}`] = "Grade/CGPA is required";
        valid = false;
      }
      if (!edu.institution?.trim()) {
        newErrors[`institution-${idx}`] = "School/University is required";
        valid = false;
      }
      if (!edu.startDate?.trim()) {
        newErrors[`startDate-${idx}`] = "Start date is required";
        valid = false;
      }
      if (!edu.currentlyEnrolled && !edu.endDate?.trim()) {
        newErrors[`endDate-${idx}`] = "End date required if not currently enrolled";
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const validateFormat = () => {
    const newErrors = {};
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const today = new Date();

    const parseDate = (str) => {
      const [d, m, y] = str.split("/").map(Number);
      return new Date(y, m - 1, d);
    };

    education.forEach((edu, idx) => {
      // Text validation
      if (edu.degree && !/^[A-Za-z0-9\s\.\,\-\(\)']+$/.test(edu.degree))
        newErrors[`degree-${idx}`] = "Invalid degree format";

      if (edu.institution && !/^[A-Za-z0-9\s\.\,\-\&']+$/.test(edu.institution))
        newErrors[`institution-${idx}`] = "Invalid school name";

      if (edu.grade && !/^[\d\.\+\-\/A-Za-z]+$/.test(edu.grade))
        newErrors[`grade-${idx}`] = "Invalid grade format";

      // Date format
      if (edu.startDate && !dateRegex.test(edu.startDate))
        newErrors[`startDate-${idx}`] = "Use DD/MM/YYYY";

      if (!edu.currentlyEnrolled && edu.endDate && !dateRegex.test(edu.endDate))
        newErrors[`endDate-${idx}`] = "Use DD/MM/YYYY";

      // Date logic
      if (edu.startDate && dateRegex.test(edu.startDate)) {
        const start = parseDate(edu.startDate);
        if (start > today) newErrors[`startDate-${idx}`] = "Start date cannot be in future";
      }

      if (!edu.currentlyEnrolled && edu.endDate && dateRegex.test(edu.endDate)) {
        const end = parseDate(edu.endDate);
        const start = parseDate(edu.startDate);
        if (end > today) newErrors[`endDate-${idx}`] = "End date cannot be in future";
        if (end <= start) newErrors[`endDate-${idx}`] = "End date must be after start date";
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setErrors({});
    if (!validateRequired()) return;
    if (!validateFormat()) return;
    setActiveTab("Skills");
  };

  return (
    <div className="space-y-8 text-gray-600">
      {education.map((edu, idx) => (
        <div
          key={edu._id}
          className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
        >
          {idx > 0 && (
            <button
              onClick={() => removeEducation(edu._id)}
              className="absolute top-4 right-4 p-2 hover:bg-red-50 rounded-full transition"
            >
              <Trash2 size={18} className="text-red-500" />
            </button>
          )}

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="Degree Title"
              placeholder="Bachelor of Science in Computer Science"
              value={edu.degree || ""}
              error={errors[`degree-${idx}`]}
              onChange={(v) => updateEducation(edu._id, { degree: v })}
            />

            <InputField
              label="Grade / CGPA"
              placeholder="3.8/4.0 or A+"
              value={edu.grade || ""}
              error={errors[`grade-${idx}`]}
              onChange={(v) => updateEducation(edu._id, { grade: v })}
            />
          </div>

          <div className="mt-6">
            <InputField
              label="School / University"
              placeholder="Stanford University"
              value={edu.institution || ""}
              error={errors[`institution-${idx}`]}
              onChange={(v) => updateEducation(edu._id, { institution: v })}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <InputField
              label="Start Date"
              placeholder="09/2018"
              value={edu.startDate || ""}
              error={errors[`startDate-${idx}`]}
              onChange={(v) => updateEducation(edu._id, { startDate: v })}
            />

            <InputField
              label="End Date"
              placeholder="Expected: 05/2025"
              value={edu.currentlyEnrolled ? "Present" : edu.endDate || ""}
              error={errors[`endDate-${idx}`]}
              disabled={edu.currentlyEnrolled}
              onChange={(v) => updateEducation(edu._id, { endDate: v })}
            />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <input
              type="checkbox"
              id={`current-${edu._id}`}
              checked={edu.currentlyEnrolled || false}
              onChange={(e) =>
                updateEducation(edu._id, {
                  currentlyEnrolled: e.target.checked,
                  endDate: e.target.checked ? null : edu.endDate,
                })
              }
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
            <label htmlFor={`current-${edu._id}`} className="text-sm font-medium text-gray-700">
              I am currently enrolled in this program
            </label>
          </div>

          <div className="mt-8">
            <label className="text-sm font-medium text-gray-700">
              Description / Achievements (Optional)
            </label>
            <textarea
              placeholder="• Dean's List for 6 semesters&#10;• Led university coding club&#10;• Published research on AI ethics..."
              value={edu.description || ""}
              onChange={(e) => updateEducation(edu._id, { description: e.target.value })}
              className="w-full text-sm mt-2 p-4 border border-gray-300 rounded-lg resize-none h-32 focus:border-green-500 outline-none"
            />
          </div>
        </div>
      ))}

      {/* Add Another */}
      <button
        onClick={addEducation}
        className="w-full py-4 border-2 border-dashed border-green-500 text-green-600 rounded-xl hover:bg-green-50 transition flex items-center justify-center gap-2 font-medium"
      >
        <Plus size={20} />
        Add Another Education
      </button>

      {/* Navigation */}
      <div className="flex justify-between mt-12">
        <button
          onClick={() => setActiveTab("Experience")}
          className="px-6 py-3 border cursor-pointer border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={handleNext}
          className="px-8 py-3 bg-[#2DC08D] hover:bg-[#25a877] cursor-pointer text-white rounded-lg flex items-center gap-2 font-medium transition"
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Education;