import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useResumeStore } from '../../../store/useResumeStore';
import './Template.css';

const Template4 = ({ data }) => {
  const defaultData = {
    personalInfo: {
      fullName: "Adeline Palmerston",
      title: "Business Consultant",
      phone: "+123-456-7890",
      website: "www.reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      email: "hello@reallygreatsite.com",
      profileImage: "https://via.placeholder.com/150",
    },
    workExperience: [
      {
        company: "Fauget Company",
        period: "2022–Present",
        position: "Business Consultant",
        description:
          "Led strategic consulting initiatives for Fortune 500 clients with a focus on operational efficiency and digital transformation.",
      },
      {
        company: "Borcelle Industries",
        period: "2020–2022",
        position: "Account Sales Executive",
        description:
          "Managed high-value client relationships and exceeded annual sales targets by 150% through strategic account planning.",
      },
      {
        company: "Liceria & Co.",
        period: "2018–2019",
        position: "Senior Property Manager",
        description:
          "Oversaw a portfolio of 50+ commercial properties valued at over $120M in total assets.",
      },
    ],
    education: [
      {
        institution: "Borcelle University",
        period: "2016–2018",
        degree: "Bachelor of Business Management",
        gpa: "3.84 GPA",
      },
    ],
    certifications: [
      {
        organization: "Fauget Church",
        period: "2010–2015",
        title: "Volunteer Administrator",
        description:
          "Led community outreach programs and coordinated 200+ volunteers across multiple initiatives.",
      },
      {
        organization: "Borcelle Company",
        period: "2012",
        title: "Inbound Sales and Marketing Certificate",
      },
    ],
  };

  const resume = data || defaultData;
  const {
    personalInfo = {},
    workExperience = [],
    education = [],
    certifications = [],
  } = resume;

  return (
    <div className="template min-w-[70vw] w-auto p-12 bg-red-50/20 overflow-hidden">
      {/* HEADER */}
      <header className=" flex items-center p-8 gap-16">
        <div className="flex-shrink-0">
          <img
            src={personalInfo.profileImage || "https://via.placeholder.com/150"}
            alt={personalInfo.fullName || "Profile"}
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        <div className="flex-1">
          <div className="border-b-1 border-gray-200 mb-4">
            <h1 className="text-3xl font-bold text-black">
              {personalInfo.fullName || "Your Name"}
            </h1>
            <p className="text-xs uppercase tracking-widest text-gray-700 font-semibold mt-1 mb-4">
              {personalInfo.title || "Professional Title"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-gray-800">
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.address && (
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{personalInfo.address}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe size={14} />
                <span>{personalInfo.website}</span>
              </div>
            )}
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>{personalInfo.email}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT WITH PERFECT TIMELINE */}
      <div className="flex">
        {/* LEFT SIDEBAR - TIMELINE */}
        <aside className="w-40 bg-white border-r border-gray-300 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-black"></div>

          <div className="pt-8 pb-8 pl-16 pr-6 space-y-12">
            {/* Work Experience */}
            {workExperience.length > 0 && (
              <div className="relative space-y-10">
                {workExperience.map((work, index) => (
                  <div key={index} className="flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-26px] top-1.5 w-4 h-4 bg-black rounded-full border-4 border-white shadow-sm z-10"></div>
                    <div className="pt-0.5">
                      <p className="font-bold text-sm leading-tight">
                        {work.company}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {work.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="relative space-y-10">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="absolute left-[-26px] top-1.5 w-4 h-4 bg-black rounded-full border-4 border-white shadow-sm z-10"></div>
                    <div className="pt-0.5">
                      <p className="font-bold text-sm leading-tight">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div className="relative space-y-10">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="absolute left-[-26px] top-1.5 w-4 h-4 bg-black rounded-full border-4 border-white shadow-sm z-10"></div>
                    <div className="pt-0.5">
                      <p className="font-bold text-sm leading-tight">
                        {cert.organization}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {cert.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1 p-8 bg-gray-50">
          <div className="space-y-10">
            {/* Work Experience */}
            {workExperience.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6 pb-2 border-b-2 border-black inline-block">
                  Work Experience
                </h2>
                <div className="space-y-8">
                  {workExperience.map((work, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-bold text-black">
                        {work.position}
                      </h3>
                      <p className="text-xs text-gray-700 mt-1 mb-3">
                        {work.company} • {work.period}
                      </p>
                      <p className="text-xs text-gray-800 leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {education.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6 pb-2 border-b-2 border-black inline-block">
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-bold text-black">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-gray-700 mt-1">
                        {edu.institution} • {edu.period}
                      </p>
                      {edu.gpa && (
                        <p className="text-xs font-semibold text-black mt-2">
                          {edu.gpa}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6 pb-2 border-b-2 border-black inline-block">
                  Certifications & Volunteer Work
                </h2>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-bold text-black">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-700 mt-1 mb-2">
                        {cert.organization} • {cert.period}
                      </p>
                      {cert.description && (
                        <p className="text-xs text-gray-800 leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Template4;
