import React from 'react';
import { Phone, Mail,Globe } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const Modern = () => {
  
    const getFormattedResumeData = useResumeStore((s) => s.getFormattedResumeData);
    const data = getFormattedResumeData();
  
    return (
    <div className="w-[70vw] bg-white p-12 text-black">

      <div className="flex items-center gap-8 mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-wider mb-2">
            {data.personalInfo.fullName}
          </h1>

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

      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          SUMMARY
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.summary}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          WORK EXPERIENCE
        </h2>

        {data.workExperience.items.map((job, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between">
              <p className="font-bold text-gray-900">{job.position}, {job.company}</p>
              <p className="text-gray-600 text-sm">{job.duration}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          EDUCATION
        </h2>

        {data.education.items.map((edu, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between">
              <p className="font-bold text-gray-900">{edu.degree}</p>
              <p className="text-gray-600 text-sm">{edu.duration}</p>
            </div>

            <p className="text-sm text-gray-700">{edu.institution}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-1 border-b-2 border-gray-800">
          ADDITIONAL INFORMATION
        </h2>
      </div>
    </div>
  );
};
export default Modern;