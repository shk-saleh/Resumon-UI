import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Certifications = () => {
  const setTab = useResumeStore((s) => s.setActiveTab);
  const certifications = useResumeStore((s) => s.certifications);
  const addCertification = useResumeStore((s) => s.addCertification);
  const updateCertification = useResumeStore((s) => s.updateCertification);
  const removeCertification = useResumeStore((s) => s.removeCertification);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (certifications.length === 0) addCertification();
  }, []);

  const validate = () => {
    const newErrors = {};
    certifications.forEach((cert, idx) => {
      if (!cert.title) newErrors[`title-${idx}`] = "This field is required";
      if (!cert.organization) newErrors[`org-${idx}`] = "This field is required";
      if (!cert.issueDate) newErrors[`date-${idx}`] = "This field is required";
      if (!cert.link) newErrors[`link-${idx}`] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    setTab("Download&Share");
  };

  return (
    <div>
      {certifications.map((cert, idx) => (
        <div key={cert.id} className="relative rounded-lg mb-6">
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
          onClick={() => setTab("Skills")}
          className="px-3 py-1 border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={18} color="#2DC08D" />
          Back
        </button>

        <button
          onClick={handleNext}
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