import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useResumeStore } from "../../../store/useResumeStore";

const Template4 = () => {
  const getFormattedResumeData = useResumeStore((s) => s.getFormattedResumeData);
  const data = getFormattedResumeData();

  console.log(data.education);

  // Reusable section component with timeline (your original code - untouched)
  const SectionWithTimeline = ({ title, items, type = "work" }) => {
    return (
      <div className="w-full flex gap-8 px-20 py-4 text-gray-800">
        {/* Timeline left side */}
        <div className="space-y-12 pt-12">
          {items.map((item, index) => {
            const company =
              type === "work"
                ? item.company
                : type === "education"
                  ? item.institution
                  : item.organization;
            const period = item.duration;

            return (
              <div
                key={index}
                className="relative flex flex-col items-end justify-start gap-1 w-40"
              >
                <div className="absolute -right-10 top-1.5 w-4 h-4 rounded-full bg-red-50 border-2 border-gray-600 z-10"></div>
                <p className="font-semibold text-end text-sm leading-tight">
                  {company}
                </p>
                <p className="text-xs text-gray-600 text-end mt-0.5">
                  {period}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content right side */}
        <div className="flex-1">
          <h2 className="text-md ps-4 font-semibold uppercase tracking-widest text-black mb-6">
            {title}
          </h2>
          <div className="space-y-8 border-l border-gray-300 px-4">
            {items.map((item, index) => {
              const title =
                type === "work"
                  ? item.position
                  : type === "education"
                    ? item.position
                    : item.title;
              const description = item.description || (type === "education" ? item.grade : "");

              return (
                <div key={index} className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-black">{title}</h3>
                  {description && (
                    <p className="text-xs text-gray-800 leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="template min-w-[70vw] w-auto overflow-hidden">
      {/* HEADER - unchanged */}
      <header className="flex items-center p-8 gap-16 px-20 py-12">
        <div className="flex-shrink-0">
          <img
            src={
              data.personalInfo.profileImage ||
              "https://via.placeholder.com/150"
            }
            alt={data.personalInfo.fullName || "Profile"}
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-sm"
          />
        </div>
        <div className="flex-1">
          <div className="border-b border-gray-300 mb-4 pb-4">
            <h1 className="text-4xl font-bold text-black">
              {data.personalInfo.fullName || "Your Name"}
            </h1>
            <p className="text-xs uppercase tracking-widest text-gray-700 font-semibold mt-2">
              {data.personalInfo.title || "Professional Title"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs text-gray-800">
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-600" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.address && (
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gray-600" />
                <span>{data.personalInfo.address}</span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-gray-600" />
                <span>{data.personalInfo.website}</span>
              </div>
            )}
            {data.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gray-600" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="px-14 space-y-4">
        {/* FIXED: Now correctly using .items from your store (like Template2) */}
        {data.workExperience?.items?.length > 0 && (
          <SectionWithTimeline
            title="Work Experience"
            items={data.workExperience.items}
            type="work"
          />
        )}

        {data.education?.items?.length > 0 && (
          <SectionWithTimeline
            title="Education"
            items={data.education.items}
            type="education"
          />
        )}

        {data.certifications?.items?.length > 0 && (
          <SectionWithTimeline
            title="Certification & Volunteer Work"
            items={data.certifications.items}
            type="certification"
          />
        )}
      </div>
    </div>
  );
};

export default Template4;