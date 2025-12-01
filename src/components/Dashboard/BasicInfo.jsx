import React, { useState } from "react";
import { ArrowRight, Sparkles, ImageUp } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const BasicInfo = () => {
  const { setActiveTab, profile, setProfileField } = useResumeStore();

  const [errors, setErrors] = useState({});

  const validateRequired = () => {
    const newErrors = {};
    if (!profile.fullName.trim()) newErrors.fullName = "This field is required";
    if (!profile.jobTitle.trim()) newErrors.jobTitle = "This field is required";
    if (!profile.phone.trim()) newErrors.phone = "This field is required";
    if (!profile.email.trim()) newErrors.email = "This field is required";
    if (!profile.address.trim()) newErrors.address = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFormat = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(profile.fullName))
      newErrors.fullName = "Name can contain only letters and spaces";

    if (!/^[A-Za-z\s\.\-']+$/.test(profile.jobTitle))
      newErrors.jobTitle = "Job Title can contain only letters and spaces";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email))
      newErrors.email = "Enter a valid email address";

    if (!/^\+?\d{7,15}$/.test(profile.phone.replace(/\s+/g, "")))
      newErrors.phone = "Enter a valid phone number";

    if (
      profile.website &&
      !/^(https?:\/\/)?(?!localhost|127\.0\.0\.1)([\w-]+\.)+[\w-]{2,}([\/\w@:%_+.~#?&\-=]*)?$/.test(profile.website)
    ) {
      newErrors.website = "Enter a valid URL";
    }

    if (profile.linkedin && !/^((https?:\/\/)?(www\.)?linkedin\.com\/.*)$/i.test(profile.linkedin))
      newErrors.linkedin = "Enter a valid LinkedIn profile link";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateRequired()) return;
    if (!validateFormat()) return;

    setActiveTab("Experience");
  };

  return (
    <>
      <div className="flex items-center gap-6 mb-10">
        <label htmlFor="profileImageInput"
          className="w-30 h-30 rounded-full bg-[#F0F0F0] border border-[#DFDFDF]
               flex items-center justify-center cursor-pointer overflow-hidden"
        >
          {profile.image ? 
          ( <img src={profile.image} alt="profile" className="w-full h-full object-cover"/> ) 
          : 
          ( <ImageUp className="w-10 h-10 text-[#BCBBBB]" /> )
          }
        </label>

        <div className="flex flex-col">
          <span className="text-lg font-normal text-[#000000]"> Resume Image  </span>
          <span className="text-xs text-[#858383] font-light"> Choose a professional image </span>
        </div>

        <input
          type="file" id="profileImageInput" accept="image/*" className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file); 
              setProfileField("image", imageUrl);
            }
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="Full Name"
          placeholder="John Smith"
          value={profile.fullName}
          error={errors.fullName}
          onChange={(v) => setProfileField("fullName", v)}
        />
        <InputField
          label="Job Title"
          placeholder="Web Developer"
          value={profile.jobTitle}
          error={errors.jobTitle}
          onChange={(v) => setProfileField("jobTitle", v)}
        />
        <InputField
          label="Phone no"
          placeholder="+92 0333 1234567"
          value={profile.phone}
          error={errors.phone}
          onChange={(v) => setProfileField("phone", v)}
        />
        <InputField
          label="Email"
          placeholder="johnsmith@gmail.com"
          value={profile.email}
          error={errors.email}
          onChange={(v) => setProfileField("email", v)}
        />
      </div>

      <div className="mt-6">
        <InputField
          label="Address"
          placeholder="St Paul Street, UK"
          value={profile.address}
          error={errors.address}
          onChange={(v) => setProfileField("address", v)}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <InputField
          label="Portfolio/Website Link"
          placeholder="www.portfolio.com"
          value={profile.website}
          error={errors.website}
          onChange={(v) => setProfileField("website", v)}
        />
        <InputField
          label="LinkedIn Profile Link"
          placeholder="linkedin.com/johnsmith"
          value={profile.linkedin}
          error={errors.linkedin}
          onChange={(v) => setProfileField("linkedin", v)}
        />
      </div>

      <div className="mt-12">
        <div className="flex justify-between items-center">
          <label className="text-sm font-normal text-[#000000]">
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
          onChange={(e) => setProfileField("summary", e.target.value)}
          className="w-full mt-4 p-3 text-sm bg-white border border-[#C8C8C8] text-gray-700 placeholder-[#9CA3AF] rounded-md h-40 outline-none"
        />
      </div>

      <div className="flex justify-end my-10">
        <button
          onClick={handleNext}
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