import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import {resumeData} from '../../../data/resumeData';


const ResumeTemplate = ({ data = resumeData}) => {
  return (
    <div className="w-[70vw] bg-white p-12 text-black  ">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider mb-2">
          {data.personalInfo.fullName}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {data.personalInfo.title}
        </p>
        
        {/* Contact Info */}
        <div className="flex justify-center items-center gap-8 text-sm mb-4 pb-4 border-b-2 border-gray-800">
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

      {/* About Me Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-3 pb-2 border-b-2 border-gray-800">
          {data.aboutMe.title}
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.aboutMe.description}
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800">
          {data.education.title}
        </h2>
        <div className="space-y-5">
          {data.education.items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600">
                    {item.institution} | {item.duration}
                  </p>
                  <p className="font-bold text-gray-800">{item.position}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800">
          {data.workExperience.title}
        </h2>
        <div className="space-y-5">
          {data.workExperience.items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600">
                    {item.company} | {item.duration}
                  </p>
                  <p className="font-bold text-gray-800">{item.position}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800">
          {data.skills.title}
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {data.skills.items.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-2">
              {column.map((skill, skillIndex) => (
                skill && (
                  <li key={skillIndex} className="text-sm text-gray-700 flex items-start">
                    <span className="mr-3">•</span>
                    <span>{skill}</span>
                  </li>
                )
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;