import React from 'react';
import { Phone, Mail, Globe, Map } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const Template2 = () => {
  const getFormattedResumeData = useResumeStore((s) => s.getFormattedResumeData);
  const data = getFormattedResumeData();

  return (
    <div className="template min-w-[70vw] w-auto p-12 bg-white text-gray-800">

      {/* Header - Name & Contact */}
      <div className="flex items-start gap-10 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-wider text-gray-900 mb-2">
            {data.personalInfo.fullName || "Your Name"}
          </h1>
          <p className="text-xl font-medium text-gray-700 mb-6">
            {data.personalInfo.title || "Professional Title"}
          </p>

          <div className="text-sm space-y-2 text-gray-600">
            {data.personalInfo.location && (
              <p className="flex items-center gap-2">
                <Map size={14} /> {data.personalInfo.location}
              </p>
            )}
            {data.personalInfo.phone && (
              <p className="flex items-center gap-2">
                <Phone size={14} /> {data.personalInfo.phone}
              </p>
            )}
            {data.personalInfo.email && (
              <p className="flex items-center gap-2">
                <Mail size={14} /> {data.personalInfo.email}
              </p>
            )}
            {data.personalInfo.linkedin && (
              <p className="flex items-center gap-2">
                <Globe size={14} /> {data.personalInfo.linkedin}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {data.aboutMe?.description && (
        <div className="mb-10">
          <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800 uppercase">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {data.aboutMe.description}
          </p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience?.items?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800 uppercase">
            Work Experience
          </h2>
          {data.workExperience.items.map((job, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {job.position} • {job.company}
                  </h3>
                  {job.type && (
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {job.type} • {job.location || "Remote"}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-600 italic">
                  {job.duration}
                </span>
              </div>
              {job.description && (
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                  {job.description.split('\n').map((line, i) => line.trim() && (
                    <li key={i}>{line.replace(/^[-•]\s*/, '')}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education?.items?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800 uppercase">
            Education
          </h2>
          {data.education.items.map((edu, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.position}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {edu.institution} {edu.grade && `• ${edu.grade}`}
                  </p>
                </div>
                <span className="text-sm text-gray-600 italic">
                  {edu.duration}
                </span>
              </div>
              {edu.description && (
                <p className="mt-2 text-sm text-gray-700">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certifications - NEW SECTION */}
      {data.certifications?.items?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800 uppercase">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.certifications.items.map((cert, index) => (
              <div key={index} className='w-full flex justify-between items-start'>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {cert.organization}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-start gap-1 mt-2">
                  <span className="text-xs text-gray-600 italic">
                    Issued: {cert.issueDate}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link.startsWith('http') ? cert.link : `https://${cert.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills?.items?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-bold tracking-widest mb-4 pb-2 border-b-2 border-gray-800 uppercase">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.items.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Template2;