import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useResumeStore } from '../../../store/useResumeStore';
import './Template.css';

const Template3 = () => {
  const getFormattedResumeData = useResumeStore((s) => s.getFormattedResumeData);
  const data = getFormattedResumeData();

  return (
    <div
      className="template min-w-[70vw] w-auto p-12"
      style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)" }}
    >

      <div className="text-center mb-8">
        <h1
          className="text-5xl font-semibold uppercase tracking-wider mb-2"
          style={{ color: "rgb(39, 39, 42)" }}  // zinc-800
        >
          {data.personalInfo.fullName}
        </h1>

        <p
          className="text-2xl mb-6"
          style={{ color: "rgb(82, 82, 91)" }}  // zinc-600
        >
          {data.personalInfo.title}
        </p>

        <div
          className="flex justify-center items-center gap-16 text-sm"
          style={{ color: "rgb(63, 63, 70)" }}  // gray-700
        >
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{data.personalInfo.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{data.personalInfo.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
      </div>

      <hr
        className="my-6"
        style={{ borderTop: "2px solid rgb(212, 212, 212)" }} // gray-300
      />

      {/* ABOUT ME */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          ABOUT ME
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgb(63, 63, 70)" }} // gray-700
        >
          {data.aboutMe.description}
        </p>
      </div>

      <hr
        className="my-6"
        style={{ borderTop: "2px solid rgb(212, 212, 212)" }}
      />

      {/* EDUCATION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          EDUCATION
        </h2>

        {data.education.items.map((edu, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <p
                className="font-semibold"
                style={{ color: "rgb(82, 82, 91)" }} // gray-600
              >
                {edu.institution} | {edu.duration}
              </p>
            </div>

            <p
              className="font-bold text-lg mb-2"
              style={{ color: "rgb(24, 24, 27)" }} // gray-900
            >
              {edu.position}
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgb(63, 63, 70)" }} // gray-700
            >
              {edu.description}
            </p>
          </div>
        ))}
      </div>

      <hr
        className="my-6"
        style={{ borderTop: "2px solid rgb(212, 212, 212)" }}
      />

      {/* WORK EXPERIENCE */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          WORK EXPERIENCE
        </h2>

        {data.workExperience.items.map((work, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <p
                className="font-semibold"
                style={{ color: "rgb(82, 82, 91)" }} // gray-600
              >
                {work.company} | {work.duration}
              </p>
            </div>

            <p
              className="font-bold text-lg mb-2"
              style={{ color: "rgb(24, 24, 27)" }} // gray-900
            >
              {work.position}
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgb(63, 63, 70)" }} // gray-700
            >
              {work.description}
            </p>
          </div>
        ))}
      </div>

      <hr
        className="my-6"
        style={{ borderTop: "2px solid rgb(212, 212, 212)" }}
      />

      {/* SKILLS */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          SKILLS
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {data.skills.items.map((skill, index) => (
            <div key={index} className="flex items-start gap-2">
              <span style={{ color: "rgb(24, 24, 27)" }}>•</span> {/* bullet */}
              <span
                className="text-sm"
                style={{ color: "rgb(63, 63, 70)" }} // gray-700
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div
        style={{
          backgroundColor: "rgb(63, 63, 70)", // gray-700
          height: "16px",
          marginTop: "32px"
        }}
      ></div>
    </div>
  );
};

export default Template3;
