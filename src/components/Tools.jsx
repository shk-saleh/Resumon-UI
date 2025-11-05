import React from 'react';
import { toolsData } from "../data/toolsData";

const Tools = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-0 pb-16 bg-white">
      <div className="max-w-6xl mx-auto text-justify">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
            Why our tools?
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#858383] mb-16">
            Creating the perfect resume shouldn't be stressful!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {toolsData.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="rounded-xl p-6 border border-[#D9D9D9] transition transform hover:-translate-y-2">
                <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${tool.iconColor}`} />
                </div>
                <h3 className="text-lg font-medium text-[#000000] mb-2">{tool.title}</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">{tool.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Tools;