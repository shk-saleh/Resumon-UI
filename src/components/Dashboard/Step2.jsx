import React from "react";
import { ChevronLeft,ArrowUpRight } from "lucide-react";
import { cardData } from "../../data/cardData";
import { useResumeStore } from "../../store/useResumeStore";

const Step2 = () => {

    const { setMethod,setTemplate, setCurrentStep, } = useResumeStore();

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <div className="flex items-center justify-center gap-7 w-full max-w-md mb-20">
        <h3 className="text-xl md:text-2xl text-(--dark-color) font-medium text-center">
          Pick Your Template
        </h3>
        <button
          onClick={() => { setMethod(null); setCurrentStep(1); }}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <div key={index} className={`rounded-2xl p-4 ${card.bgColor} ${card.border} flex flex-col w-full max-w-[280px] mx-auto`}>
            <div className="w-full relative rounded-xl overflow-hidden aspect-[4/5]">
              <img src={card.image} alt={card.title} className="w-full h-full blur-none object-cover" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-normal text-black"> {card.title} </h3>
                <p className="text-xs md:text-sm text-gray-600">{card.text}</p>
              </div>
              <ArrowUpRight
                onClick={() => {
                    setTemplate(card.id);
                    console.log(card.id);
                }}
                className="w-6 h-6 text-[#858383] cursor-pointer transition-transform duration-300 hover:rotate-90 hover:text-[#1DA1F2] hover:scale-125" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Step2;