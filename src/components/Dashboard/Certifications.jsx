import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Certifications = () => {
  const {
    setActiveTab,setCurrentStep,
    certifications, addCertification, updateCertification, removeCertification,
  } = useResumeStore();


  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (certifications.length === 0) addCertification();
  }, []);

  const validateRequired = () => {
    const newErrors = {};
    certifications.forEach((cert, idx) => {
      if (!cert.title) newErrors[`title-${idx}`] = "This field is required";
      if (!cert.organization) newErrors[`org-${idx}`] = "This field is required";
      if (!cert.issueDate) newErrors[`date-${idx}`] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const validateFormat = () => {
  const newErrors = {};

  certifications.forEach((cert, idx) => {
    if (!/^[A-Za-z\s]+$/.test(cert.title))
      newErrors[`title-${idx}`] = "Title can contain only letters and spaces";

    if (!/^[A-Za-z\s]+$/.test(cert.organization))
      newErrors[`org-${idx}`] = "Organization can contain only letters and spaces";

    if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(cert.issueDate))
      newErrors[`date-${idx}`] = "Enter a valid date (DD/MM/YYYY)";

    if (
      cert.link &&
      !/^(https?:\/\/)?(?!localhost|127\.0\.0\.1)([\w-]+\.)+[\w-]{2,}([\/\w@:%_+.~#?&\-=]*)?$/.test(
        cert.link
      )
    )
      newErrors[`link-${idx}`] = "Enter a valid URL";
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleNext = () => {
    if (!validateRequired()) return;
    if (!validateFormat()) return;
    setCurrentStep(5);
  };

  return (
    <div>
      {certifications.map((cert, idx) => (
        <div key={cert.id} className="rounded-lg mb-6">
          {idx > 0 && (
            <button
              onClick={() => removeCertification(cert.id)}
              className="absolute top-2 right-2 p-1 hover:bg-red-100 rounded-full"
            >
              <Trash2 size={16} color="#FF4D4F" />
            </button>
          )}

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="Certification Title"
              placeholder="Frontend Development"
              value={cert.title}
              error={errors[`title-${idx}`]}
              onChange={(v) => updateCertification(cert.id, { title: v })}
            />
            <InputField
              label="Issuing Organization"
              placeholder="Udemy, Coursera"
              value={cert.organization}
              error={errors[`org-${idx}`]}
              onChange={(v) => updateCertification(cert.id, { organization: v })}
            />
            <InputField
              label="Issue Date"
              placeholder="DD/MM/YYYY"
              value={cert.issueDate}
              error={errors[`date-${idx}`]}
              onChange={(v) => updateCertification(cert.id, { issueDate: v })}
            />
            <InputField
              label="Credential Link"
              placeholder="www.udemy/frontend-dev"
              value={cert.link}
              error={errors[`link-${idx}`]}
              onChange={(v) => updateCertification(cert.id, { link: v })}
            />
          </div>
        </div>
      ))}

      <div>
        <button onClick={addCertification}
          className="w-full flex items-center justify-center gap-2 mt-6 mb-12 py-2 border border-dashed border-[#2DC08D] text-[#000000]/60 rounded-lg bg-transparent"
        >
          <Plus size={16} color="#2DC08D" />
          Add Another Certificate
        </button>
      </div>

      <div className="flex justify-between mt-12">
        <button
          onClick={() => setActiveTab("Skills")}
          className="px-3 py-1 border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={18} color="#2DC08D" />
          Back
        </button>

        <button onClick={handleNext}
          className="px-3 py-1 bg-white border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          Finish
          <ArrowRight size={18} color="#2DC08D" />
        </button>
      </div>
    </div>
  );
};
export default Certifications;