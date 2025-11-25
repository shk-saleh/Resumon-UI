import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const BasicInfo = () => {
  const setTab = useResumeStore((s) => s.setActiveTab);
  const profile = useResumeStore((s) => s.profile);
  const setField = useResumeStore((s) => s.setProfileField);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!profile.fullName) newErrors.fullName = "This field is required";
    if (!profile.jobTitle) newErrors.jobTitle = "This field is required";
    if (!profile.phone) newErrors.phone = "This field is required";
    if (!profile.email) newErrors.email = "This field is required";
    if (!profile.address) newErrors.address = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    setTab("Experience");
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="Full Name"
          placeholder="John Smith"
          type="text"
          value={profile.fullName}
          error={errors.fullName}
          onChange={(v) => setField("fullName", v)}
        />

        <InputField
          label="Job Title"
          placeholder="Web Developer"
          type="text"
          value={profile.jobTitle}
          error={errors.jobTitle}
          onChange={(v) => setField("jobTitle", v)}
        />

        <InputField
          label="Phone no"
          placeholder="+92 0333 1234567"
          type="tel"
          value={profile.phone}
          error={errors.phone}
          onChange={(v) => setField("phone", v)}
        />

        <InputField
          label="Email"
          placeholder="johnsmith@gmail.com"
          type="email"
          value={profile.email}
          error={errors.email}
          onChange={(v) => setField("email", v)}
        />
      </div>

      <div className="mt-6">
        <InputField
          label="Address"
          placeholder="St Paul Street, UK"
          type="text"
          value={profile.address}
          error={errors.address}
          onChange={(v) => setField("address", v)}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <InputField
          label="Portfolio/Website Link"
          placeholder="www.portfolio.com"
          type="url"
          value={profile.website}
          onChange={(v) => setField("website", v)}
        />

        <InputField
          label="LinkedIn Profile Link"
          placeholder="linkedin.com/johnsmith"
          type="url"
          value={profile.linkedin}
          onChange={(v) => setField("linkedin", v)}
        />
      </div>

      <div className="mt-12">
        <div className="flex justify-between items-center">
          <label className="text-sm font-normal  text-[#000000]">
            Professional Summary (About Yourself)
          </label>

          <button className="px-3 py-1 text-sm bg-[#2DC08D]/10 text-[#2DC08D] border border-[#2DC08D] rounded-lg flex items-center gap-1 cursor-pointer">
            <Sparkles size={16} color="#2DC08D" />
            AI Generate
          </button>
        </div>

        <textarea
          placeholder="I am a full stack developer....."
          value={profile.summary}
          onChange={(e) => setField("summary", e.target.value)}
          className="w-full mt-4 p-3 text-sm bg-white border border-[#C8C8C8] text-gray-700 placeholder-[#9CA3AF] rounded-md h-40 outline-none"
        />
      </div>

      <div className="flex justify-end my-10">
        <button onClick={handleNext}
          className="px-3 py-1 bg-white border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          Next
          <ArrowRight size={18} color="#2DC08D" />
        </button>
      </div>
    </>
  );
};
export default BasicInfo;