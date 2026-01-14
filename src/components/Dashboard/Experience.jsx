import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2, Sparkles } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Experience = () => {

  const {
    setActiveTab,
    activeResume,
    addExperience,
    updateExperience,
    removeExperience,
  } = useResumeStore();


  const experiences = activeResume?.experience || [];

  const [errors, setErrors] = useState({});

  // Auto-add first experience if none exist
  useEffect(() => {
    if (experiences.length === 0) {
      addExperience();
    }
  }, []);

  const validateRequired = () => {
    const newErrors = {};
    let isValid = true;

    experiences.forEach((exp, idx) => {
      if (!exp.position?.trim()) {
        newErrors[`position-${idx}`] = "Job title is required";
        isValid = false;
      }
      if (!exp.company?.trim()) {
        newErrors[`company-${idx}`] = "Company is required";
        isValid = false;
      }
      if (!exp.startDate?.trim()) {
        newErrors[`startDate-${idx}`] = "Start date is required";
        isValid = false;
      }
      if (!exp.current && !exp.endDate?.trim()) {
        newErrors[`endDate-${idx}`] =
          "End date is required if not currently working";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const validateFormat = () => {
    const newErrors = {};
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const today = new Date();

    const parseDate = (str) => {
      const [d, m, y] = str.split("/");
      return new Date(`${y}-${m}-${d}`);
    };

    experiences.forEach((exp, idx) => {
      // Text format
      if (exp.position && !/^[A-Za-z\s\.\-,'&]+$/.test(exp.position))
        newErrors[`position-${idx}`] = "Invalid characters";

      if (exp.company && !/^[A-Za-z\s\.\-,'&0-9]+$/.test(exp.company))
        newErrors[`company-${idx}`] = "Invalid company name";

      // Start date format
      if (exp.startDate && !dateRegex.test(exp.startDate)) {
        newErrors[`startDate-${idx}`] = "Use DD/MM/YYYY";
      } else if (exp.startDate) {
        const start = parseDate(exp.startDate);
        if (start > today)
          newErrors[`startDate-${idx}`] = "Cannot be in future";
      }

      // End date format (only if not current)
      if (!exp.current && exp.endDate) {
        if (!dateRegex.test(exp.endDate)) {
          newErrors[`endDate-${idx}`] = "Use DD/MM/YYYY";
        } else {
          const end = parseDate(exp.endDate);
          const start = parseDate(exp.startDate);
          if (end > today) newErrors[`endDate-${idx}`] = "Cannot be in future";
          if (end <= start)
            newErrors[`endDate-${idx}`] = "Must be after start date";
        }
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setErrors({});
    if (!validateRequired()) return;
    if (!validateFormat()) return;
    setActiveTab("Education");
  };

  const employmentTypes = [
    "Full Time",
    "Part Time",
    "Internship",
    "Contract",
    "Freelance",
  ];
  const workLocations = ["Remote", "On-site", "Hybrid"];

  return (
    <div className="space-y-8 text-gray-600">
      {experiences.map((exp, idx) => (
        <div
          key={exp._id}
          className="relative bg-white border border-gray-200 rounded-xl p-6"
        >
          {idx > 0 && (
            <button
              onClick={() => removeExperience(exp._id)}
              className="absolute top-4 right-4 p-2 hover:bg-red-50 rounded-full transition"
            >
              <Trash2 size={18} className="text-red-500" />
            </button>
          )}

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="Job Title"
              placeholder="Senior Frontend Developer"
              value={exp.position || ""}
              error={errors[`position-${idx}`]}
              onChange={(v) => updateExperience(exp._id, { position: v })}
            />

            <InputField
              label="Company Name"
              placeholder="Google Inc."
              value={exp.company || ""}
              error={errors[`company-${idx}`]}
              onChange={(v) => updateExperience(exp._id, { company: v })}
            />

            <div className="space-y-2">
              <label className="text-sm font-medium">Employment Type</label>
              <select
                value={exp.type || ""}
                onChange={(e) =>
                  updateExperience(exp._id, { type: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              >
                <option value="">Select type</option>
                {employmentTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Work Location</label>
              <select
                value={exp.location || ""}
                onChange={(e) =>
                  updateExperience(exp._id, { location: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              >
                <option value="">Select location</option>
                {workLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <InputField
              label="Start Date"
              placeholder="15/03/2021"
              value={exp.startDate || ""}
              error={errors[`startDate-${idx}`]}
              onChange={(v) => updateExperience(exp._id, { startDate: v })}
            />

            <InputField
              label="End Date"
              placeholder="Present"
              value={exp.current ? "Present" : exp.endDate || ""}
              error={errors[`endDate-${idx}`]}
              disabled={exp.current}
              onChange={(v) => updateExperience(exp._id, { endDate: v })}
            />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <input
              type="checkbox"
              id={`current-${exp._id}`}
              checked={exp.current || false}
              onChange={(e) => {
                updateExperience(exp._id, {
                  current: e.target.checked,
                  endDate: e.target.checked ? null : exp.endDate,
                });
              }}
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
            <label
              htmlFor={`current-${exp._id}`}
              className="text-sm font-medium text-gray-700"
            >
              I currently work here
            </label>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-3">
              <label className="font-medium text-sm">
                Job Description & Achievements
              </label>
              <button className="text-sm text-[#2DC08D] flex items-center gap-1 hover:underline cursor-pointer">
                <Sparkles size={16} />
                Generate with AI
              </button>
            </div>
            <textarea
              placeholder="• Led a team of 5 developers...
• Reduced load time by 60%...
• Built scalable microservices..."
              value={exp.description || ""}
              onChange={(e) =>
                updateExperience(exp._id, { description: e.target.value })
              }
              className="w-full text-sm p-4 border border-gray-300 rounded-lg resize-none h-32 focus:border-green-500 outline-none"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="w-full py-4 border-2 border-dashed border-green-500 text-green-600 rounded-xl hover:bg-green-50 transition flex items-center justify-center gap-2 font-medium"
      >
        <Plus size={20} />
        Add Another Experience
      </button>

      <div className="flex justify-between mt-12">
        <button
          onClick={() => setActiveTab("Basic Info")}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={handleNext}
          className="px-8 py-3 bg-[#2DC08D] hover:bg-[#25a877] text-white rounded-lg cursor-pointer flex items-center gap-2 font-medium"
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Experience;
