import React from "react";
import { ArrowUpRight } from 'lucide-react'

const TemplateCard = ({ image, title, text, bgColor, border }) => {
  return (
    <div className={`rounded-2xl p-4 ${bgColor} ${border} flex flex-col w-full max-w-[280px] mx-auto`}>
      <div className="w-full relative rounded-xl overflow-hidden aspect-[4/5]">
        <img src={image} alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-base md:text-lg font-normal text-black">{title}</h3>
          <p className="text-xs text-gray-600">{text}</p>
        </div>
        <ArrowUpRight className="w-6 h-6 text-[#858383]" />
      </div>
    </div>
  );
};
export default TemplateCard;