import React from "react";
import { ChevronLeft,ArrowUpRight } from "lucide-react";
import { cardData } from "../../data/cardData";
import { useResumeStore } from "../../store/useResumeStore";

const Step2 = () => {

    const { setMethod, setTemplate, setCurrentStep, } = useResumeStore();

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <div className="flex items-start justify-start gap-60 w-full max-w-4xl mb-10">
         <button onClick={() => { setMethod(null); setCurrentStep(1); }}
          className="px-3 py-1 bg-white border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft size={18} color="#2DC08D" />
          Back
        </button>
        <h3 className="text-xl md:text-2xl text-(--dark-color) font-normal text-center">
          Pick Your Template
        </h3> 
      </div>

      <div className="flex gap-4 w-auto max-w-4xl overflow-x-auto cursor-grab touch-pan-x snap-x snap-mandatory scroll-smooth">
        {cardData.map((card, index) => (
          <div key={index} onClick={() => {setTemplate(card.id)}} className={`rounded-2xl p-4 w-[250px] min-w-[250px] max-w-[250px] ${card.bgColor} ${card.border} flex flex-col flex-shrink-0 snap-start`}>
            <div className="w-full relative rounded-xl overflow-hidden aspect-[4/5]">
              <img src={card.image} alt={card.title} className="w-full h-full blur-none object-cover" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-normal text-black"> {card.title} </h3>
                <p className="text-xs md:text-sm text-gray-600">{card.text}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-[#858383] cursor-pointer transition-transform duration-300 hover:rotate-45 hover:text-[#2DC08D]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Step2;