import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

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
          "Led strategic consulting initiatives for Fortune 500 clients...",
      },
      {
        company: "Borcelle Industries",
        period: "2020–2022",
        position: "Account Sales Executive",
        description: "Managed key accounts and drove 150% revenue growth...",
      },
      {
        company: "Liceria & Co.",
        period: "2018–2019",
        position: "Senior Property Manager",
        description: "Oversaw portfolio of 50+ commercial properties...",
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
          "Led community outreach programs and managed 200+ volunteers.",
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
    <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden print:shadow-none print:max-w-none print:text-black">
      {/* HEADER */}
      <header className="bg-gray-100 p-8 flex flex-col sm:flex-row items-start gap-8">
        <div className="flex-shrink-0">
          <img
            src={personalInfo.profileImage || "https://via.placeholder.com/150"}
            alt={personalInfo.fullName}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900">
            {personalInfo.fullName}
          </h1>
          <p className="text-xl text-blue-600 font-medium mt-1 mb-6">
            {personalInfo.title}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-600" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.address && (
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-600" />
                <span>{personalInfo.address}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-gray-600" />
                <span>{personalInfo.website}</span>
              </div>
            )}
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-600" />
                <span>{personalInfo.email}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDEBAR - Perfect Timeline */}
        <aside className="w-full lg:w-1/3 bg-gray-50 p-8 relative">
          {/* Continuous Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Work Experience */}
          {workExperience.length > 0 && (
            <div className="relative space-y-10">
              {workExperience.map((work, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="pb-8">
                    <p className="font-bold text-gray-900 text-sm leading-tight">
                      {work.company}
                    </p>
                    <p className="text-xs text-gray-600">{work.period}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="relative mt-12 space-y-10">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="pb-8">
                    <p className="font-bold text-gray-900 text-sm leading-tight">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-600">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="relative mt-12 space-y-10">
              {certifications.map((cert, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="pb-8">
                    <p className="font-bold text-gray-900 text-sm leading-tight">
                      {cert.organization}
                    </p>
                    <p className="text-xs text-gray-600">{cert.period}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* RIGHT CONTENT */}
        <main className="w-full lg:w-2/3 p-8 space-y-12">
          {/* Work Experience */}
          {workExperience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600">
                Work Experience
              </h2>
              {workExperience.map((work, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h3 className="text-lg font-bold text-gray-900">
                    {work.position}
                  </h3>
                  <p className="text-sm text-gray-600 italic mb-2">
                    {work.company} • {work.period}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600">
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {edu.institution} • {edu.period}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm font-medium text-blue-600 mt-1">
                      {edu.gpa}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600">
                Certification & Volunteer Work
              </h2>
              {certifications.map((cert, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-bold text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cert.organization} • {cert.period}
                  </p>
                  {cert.description && (
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Template4;
