import React, { useState } from "react";
import { ArrowRight, Sparkles, ImageUp } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const BasicInfo = () => {
  const {
    activeResume,
    setPersonalInfo,
    setSummary,
    setActiveTab,
  } = useResumeStore();

  // Directly use activeResume values — no fallback object!
  const personalInfo = activeResume?.personalInfo || {};
  const summary = activeResume?.summary || "";

  const [errors, setErrors] = useState({});

  const validateRequired = () => {
    const newErrors = {};
    if (!personalInfo.fullName?.trim()) newErrors.fullName = "Full name is required";
    if (!personalInfo.title?.trim()) newErrors.jobTitle = "Job title is required";
    if (!personalInfo.phone?.trim()) newErrors.phone = "Phone is required";
    if (!personalInfo.email?.trim()) newErrors.email = "Email is required";
    if (!personalInfo.location?.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFormat = () => {
    const newErrors = {};

    if (personalInfo.fullName && !/^[A-Za-z\s]+$/.test(personalInfo.fullName))
      newErrors.fullName = "Name can contain only letters and spaces";

    if (personalInfo.title && !/^[A-Za-z\s\.\-']+$/.test(personalInfo.title))
      newErrors.jobTitle = "Invalid job title format";

    if (personalInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email))
      newErrors.email = "Enter a valid email";

    if (personalInfo.phone && !/^[\+]?[0-9\s\-\(\)]{7,15}$/.test(personalInfo.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid phone number";

    if (personalInfo.website && !/^https?:\/\/.+/i.test(personalInfo.website) && personalInfo.website !== "")
      newErrors.website = "Must be a valid URL (include https://)";

    if (personalInfo.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(personalInfo.linkedin))
      newErrors.linkedin = "Enter valid LinkedIn URL";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setErrors({}); // clear previous
    if (!validateRequired()) return;
    if (!validateFormat()) return;

    setActiveTab("Experience");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonalInfo({ profileImage: reader.result });
      };
      reader.readAsDataURL(file); // Better than createObjectURL for persistence
    }
  };

  return (
    <>
      {/* Profile Image */}
      <div className="flex items-center gap-6 mb-10">
        <label
          htmlFor="profileImageInput"
          className="w-30 h-30 rounded-full bg-[#F0F0F0] border border-[#DFDFDF] 
                     flex items-center justify-center cursor-pointer overflow-hidden hover:opacity-90 transition"
        >
          {personalInfo.profileImage ? (
            <img
              src={personalInfo.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageUp className="w-10 h-10 text-[#BCBBBB]" />
          )}
        </label>

        <div className="flex flex-col">
          <span className="text-lg font-normal text-[#000000]">Resume Image</span>
          <span className="text-xs text-[#858383] font-light">Choose a professional image</span>
        </div>

        <input
          type="file"
          id="profileImageInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="Full Name"
          type="text"
          placeholder="John Smith"
          value={personalInfo.fullName || ""}
          error={errors.fullName}
          onChange={(v) => setPersonalInfo({ fullName: v })}
        />
        <InputField
          label="Job Title"
          placeholder="Senior Web Developer"
          value={personalInfo.title || ""}
          error={errors.jobTitle}
          onChange={(v) => setPersonalInfo({ title: v })}
        />
        <InputField
          label="Phone no"
          placeholder="+92 333 1234567"
          value={personalInfo.phone || ""}
          error={errors.phone}
          onChange={(v) => setPersonalInfo({ phone: v })}
        />
        <InputField
          label="Email"
          placeholder="john@example.com"
          value={personalInfo.email || ""}
          error={errors.email}
          onChange={(v) => setPersonalInfo({ email: v })}
        />
      </div>

      <div className="mt-6">
        <InputField
          label="Address"
          placeholder="London, United Kingdom"
          value={personalInfo.location || ""}
          error={errors.address}
          onChange={(v) => setPersonalInfo({ location: v })}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <InputField
          label="Portfolio/Website Link"
          placeholder="https://john.dev"
          value={personalInfo.website || ""}
          error={errors.website}
          onChange={(v) => setPersonalInfo({ website: v })}
        />
        <InputField
          label="LinkedIn Profile Link"
          placeholder="https://linkedin.com/in/johnsmith"
          value={personalInfo.linkedin || ""}
          error={errors.linkedin}
          onChange={(v) => setPersonalInfo({ linkedin: v })}
        />
      </div>

      {/* Professional Summary */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-normal text-[#000000]">
            Professional Summary (About Yourself)
          </label>
          <button className="px-3 py-1 text-sm bg-[#2DC08D]/10 text-[#2DC08D] border border-[#2DC08D] rounded-lg flex items-center gap-1 hover:bg-[#2DC08D]/20 transition">
            <Sparkles size={16} />
            AI Generate
          </button>
        </div>
        <textarea
          placeholder=" Passionate full-stack developer with 5+ years of experience..."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full mt-2 p-4 text-sm bg-white border border-[#C8C8C8] text-gray-700 placeholder-[#9CA3AF] rounded-md h-40 outline-none focus:border-[#2DC08D] transition resize-none"
        />
      </div>

      {/* Next Button */}
      <div className="flex justify-end my-10">
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-[#2DC08D] text-white rounded-lg flex items-center gap-2 hover:bg-[#25a877] cursor-pointer transition font-medium"
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </>
  );
};

export default BasicInfo;