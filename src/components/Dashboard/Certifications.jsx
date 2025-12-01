import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import InputField from "./InputField";

const Certifications = () => {
  const {
    setActiveTab,
    setCurrentStep,
    activeResume,
    addCertification,
    updateCertification,
    removeCertification,
    createResume
  } = useResumeStore();

  const certifications = activeResume?.certifications || [];
  const [errors, setErrors] = useState({});
  const [isCreating, setIsCreating] = useState(false);
  const [createError, setCreateError] = useState("");


  console.log(activeResume);

  useEffect(() => {
    if (certifications.length === 0) {
      addCertification();
    }
  }, []);

  const validateRequired = () => {
    const newErrors = {};
    let valid = true;

    certifications.forEach((cert, idx) => {
      if (!cert.title?.trim()) {
        newErrors[`title-${idx}`] = "Certification title is required";
        valid = false;
      }
      if (!cert.organization?.trim()) {
        newErrors[`org-${idx}`] = "Organization is required";
        valid = false;
      }
      if (!cert.issueDate?.trim()) {
        newErrors[`date-${idx}`] = "Issue date is required";
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

    certifications.forEach((cert, idx) => {
      // Title & Organization: letters, spaces, basic punctuation
      if (cert.title && !/^[A-Za-z0-9\s\.\,\-\&\'\(\)]+$/.test(cert.title))
        newErrors[`title-${idx}`] = "Invalid title format";

      if (cert.organization && !/^[A-Za-z0-9\s\.\,\-\&\'\(\)]+$/.test(cert.organization))
        newErrors[`org-${idx}`] = "Invalid organization name";

      // Issue Date format
      if (cert.issueDate && !dateRegex.test(cert.issueDate)) {
        newErrors[`date-${idx}`] = "Use DD/MM/YYYY format";
      } else if (cert.issueDate) {
        const issueDate = parseDate(cert.issueDate);
        if (issueDate > today) {
          newErrors[`date-${idx}`] = "Issue date cannot be in the future";
        }
      }

      // Optional link validation
      if (cert.link && !/^https?:\/\/.+/i.test(cert.link)) {
        newErrors[`link-${idx}`] = "Must be a valid URL (include https://)";
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleFinish = async () => {
    setErrors({});
    setCreateError("");

    if (!validateRequired()) return;
    if (!validateFormat()) return;

    setIsCreating(true);

    try {

      let data =  await createResume("My Professional Resume"); 

      if(data.message === 'success'){
        setCurrentStep(5);
      }

    } catch (err) {
      console.error("Failed to create resume:", err);
      setCreateError(
        err.response?.data?.message || "Failed to save resume. Please try again."
      );
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="space-y-8 text-gray-600">

      {certifications.map((cert, idx) => (
        <div
          key={cert._id}
          className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
        >
          {idx > 0 && (
            <button
              onClick={() => removeCertification(cert._id)}
              className="absolute top-4 right-4 p-2 hover:bg-red-50 rounded-full transition"
            >
              <Trash2 size={18} className="text-red-500" />
            </button>
          )}

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="Certification Title"
              placeholder="AWS Certified Solutions Architect"
              value={cert.title || ""}
              error={errors[`title-${idx}`]}
              onChange={(v) => updateCertification(cert._id, { title: v })}
            />

            <InputField
              label="Issuing Organization"
              placeholder="Amazon Web Services, Google, Microsoft"
              value={cert.organization || ""}
              error={errors[`org-${idx}`]}
              onChange={(v) => updateCertification(cert._id, { organization: v })}
            />

            <InputField
              label="Issue Date"
              placeholder="15/06/2023"
              value={cert.issueDate || ""}
              error={errors[`date-${idx}`]}
              onChange={(v) => updateCertification(cert._id, { issueDate: v })}
            />

            <InputField
              label="Credential URL (Optional)"
              placeholder="https://www.credly.com/badges/abc123"
              value={cert.link || ""}
              error={errors[`link-${idx}`]}
              onChange={(v) => updateCertification(cert._id, { link: v })}
            />
          </div>
        </div>
      ))}

      {/* Add Another */}
      <button
        onClick={addCertification}
        className="w-full py-4 border-2 border-dashed border-green-500 text-green-600 rounded-xl hover:bg-green-50 transition flex items-center justify-center gap-2 font-medium"
      >
        <Plus size={20} />
        Add Another Certification
      </button>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button
          onClick={() => setActiveTab("Skills")}
          className="px-6 py-3 border border-gray-300 cursor-pointer rounded-xl hover:bg-gray-50 flex items-center gap-2 font-medium transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={handleFinish}
          disabled={isCreating}
          className={`px-8 py-3 rounded-xl cursor-pointer flex items-center gap-3 font-medium transition shadow-md ${
            isCreating
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#2DC08D] hover:bg-[#25a877] text-white"
          }`}
        >
          {isCreating ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Creating Resume...
            </>
          ) : (
            <>
              Finish & Download
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Certifications;