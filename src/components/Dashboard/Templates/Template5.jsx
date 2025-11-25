import React from 'react';
import { useResumeStore } from '../../../store/useResumeStore';

const Template5 = () => {
  const getFormattedResumeData = useResumeStore((s) => s.getFormattedResumeData);
  const data = getFormattedResumeData();

  return (
    <div className="w-[70vw] bg-[#F8F7F3] p-12 text-[#454641]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider text-[#030301]"> {data.personalInfo.fullName}</h1>
        <p className="text-base text-[#353530] font-semibold">{data.personalInfo.title}</p>
        <div className="flex justify-center items-center gap-1 text-[#030301] text-sm font-normal mb-4 pb-4">
          <span>{data.personalInfo.email} | </span>
          <span>{data.personalInfo.phone} | </span>
          <span>{data.personalInfo.address}</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-40 top-0 h-full border-r-2 border-[#BDBCBB]"></div>

        <div className="flex flex-col gap-12">
          <div className="flex gap-6">
            <div className="w-40 pr-12">
              <h2 className="text-xl font-semibold text-[#030301]">SUMMARY</h2>
            </div>
            <div className="flex-1">
              <p className="text-sm leading-normal text-justify">{data.summary}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-40 pr-12">
              <h2 className="text-xl font-semibold text-[#272825]">WORK EXPERIENCE</h2>
            </div>
            <div className="flex-1 space-y-5">
              {data.workExperience.items.map((job, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-sm">{job.position}</p>
                    <p className="font-bold text-sm">{job.duration}</p>
                  </div>
                  {/* <ul className="list-disc pl-4 mt-1 space-y-1">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm">{resp}</li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-40 pr-12">
              <h2 className="text-xl font-semibold text-[#030301]">EDUCATION</h2>
            </div>
            <div className="flex-1 space-y-5">
              {data.education.items.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-sm">{edu.degree}</p>
                    <p className="font-bold text-sm">{edu.duration}</p>
                  </div>
                  <p className="text-sm mb-1">{edu.institution}</p>
                  {/* <ul className="list-disc pl-4 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-sm">{detail}</li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-40 pr-12">
              <h2 className="text-xl font-semibold text-[#030301]">KEY SKILLS</h2>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-x-8">
              <ul className="list-disc pl-4 space-y-1 col-span-2">
                {data.skills.items.map((skill, i) => (
                  <li key={i} className="text-sm">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template5;