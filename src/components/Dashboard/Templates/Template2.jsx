import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import {resumeData} from '../../../data/resumeData';

const ResumeTemplate2 = ({ data }) => {
  return (
    <div className="w-[70vw] bg-white p-12 text-black">

      {/* TOP HEADER */}
      <div className="flex items-center gap-8 mb-10">

        {/* Name + Contact */}
        <div>
          <h1 className="text-4xl font-bold tracking-wider mb-2">
            {data.personalInfo.fullName}
          </h1>

          {/* Contact Section */}
          <div className="text-sm space-y-1">
            <p><strong>Address:</strong> {data.personalInfo.address}</p>
            <p className="flex items-center gap-2">
              <Phone size={14} /> {data.personalInfo.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} /> {data.personalInfo.email}
            </p>
            <p className="flex items-center gap-2">
              <Globe size={14} /> {data.personalInfo.website}
            </p>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          SUMMARY
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.summary}
        </p>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          WORK EXPERIENCE
        </h2>

        {data.workExperience.map((job, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between">
              <p className="font-bold text-gray-900">{job.position}, {job.company}</p>
              <p className="text-gray-600 text-sm">{job.duration}</p>
            </div>

            <ul className="text-sm text-gray-700 list-disc ml-5 mt-2 space-y-1">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* EDUCATION */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          EDUCATION
        </h2>

        {data.education.map((edu, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between">
              <p className="font-bold text-gray-900">{edu.degree}</p>
              <p className="text-gray-600 text-sm">{edu.duration}</p>
            </div>

            <p className="text-sm text-gray-700">{edu.institution}</p>

            {/* Bullet Points */}
            <ul className="text-sm text-gray-700 list-disc ml-5 mt-2 space-y-1">
              {edu.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ADDITIONAL INFORMATION */}
      <div>
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          ADDITIONAL INFORMATION
        </h2>

        <ul className="text-sm text-gray-700 space-y-2">
          {data.additionalInfo.map((info, index) => (
            <li key={index}>• {info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeTemplate2;
