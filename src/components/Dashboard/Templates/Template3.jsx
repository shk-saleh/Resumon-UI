// Resume.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {resumeData} from '../../../data/resumeData';

const Resume = ({ data }) => {
  return (
    <div className="w-[70vw] bg-white p-12 text-black mx-auto shadow-lg">
      {/* HEADER SECTION */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold tracking-wider mb-2">
          {data.personalInfo.fullName}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {data.personalInfo.title}
        </p>

        {/* Contact Info */}
        <div className="flex justify-center items-center gap-8 text-sm text-gray-700">
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
            <span>{data.personalInfo.address}</span>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 my-6" />

      {/* ABOUT ME SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          ABOUT ME
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.about}
        </p>
      </div>

      <hr className="border-t-2 border-gray-300 my-6" />

      {/* EDUCATION SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          EDUCATION
        </h2>

        {data.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <p className="font-semibold text-gray-600">
                {edu.university} | {edu.period}
              </p>
            </div>

            <p className="font-bold text-gray-900 text-lg mb-2">
              {edu.position}
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-300 my-6" />

      {/* WORK EXPERIENCE SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          WORK EXPERIENCE
        </h2>

        {data.workExperience.map((work, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <p className="font-semibold text-gray-600">
                {work.company} | {work.period}
              </p>
            </div>

            <p className="font-bold text-gray-900 text-lg mb-2">
              {work.position}
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              {work.description}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-300 my-6" />

      {/* SKILLS SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-widest mb-4 pb-1">
          SKILLS
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {data.skills.map((skill, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-gray-900">•</span>
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-700 h-12 -mx-12 -mb-12 mt-8"></div>
    </div>
  );
};

export default Resume;