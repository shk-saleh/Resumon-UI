import React, { useState, useEffect } from "react";
import { BicepsFlexed, Sparkles, ChevronLeft } from 'lucide-react';
import { useResumeStore } from "../store/useResumeStore";
import { cardData } from "../data/cardData";
import { ArrowUpRight } from 'lucide-react'
import loader from "/src/assets/images/Loader2.gif";

const BuildResume = () => {
  const {
    method, template, currentStep,
    setMethod, setTemplate, setCurrentStep, resetResumeBuilder,
  } = useResumeStore();

  useEffect(() => {
    resetResumeBuilder();
    setCurrentStep(1);
  }, []);

  useEffect(() => {
    if (currentStep === 1 && method) {
      setCurrentStep(2);
    }
  }, [method]);

  useEffect(() => {
    if (currentStep === 2 && template) {
      setCurrentStep(3);
    }
  }, [template]);

  useEffect(() => {
    if (currentStep === 3) {
      const timer = setTimeout(() => {
        //setCurrentStep(4);
        resetResumeBuilder();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="max-w-6xl w-full mx-auto pt-17">

      {currentStep === 1 && (
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl text-(--dark-color) text-center font-normal mb-10">How would you like to create your resume?</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">

            <button
              onClick={() => setMethod("AI Build")}
              className="flex flex-col justify-center items-center gap-5 w-40 md:w-44 border border-gray-100 bg-white
                p-7 rounded-xl cursor-pointer shadow-[0_0_2px_#00000026] transition-all duration-200 hover:bg-[#F9FAFB]">

              <Sparkles className="w-6 h-6 text-[#EB7C4A]" />
              <span className="text-sm md:text-base font-medium text-gray-700">
                Build with AI
              </span>
            </button>

            <button
              onClick={() => setMethod("Custom Build")}
              className="flex flex-col justify-center items-center gap-5 w-40 md:w-44 border border-gray-100 bg-white
                p-7 rounded-xl cursor-pointer shadow-[0_0_2px_#00000026] transition-all duration-200 hover:bg-[#F9FAFB]">

              <BicepsFlexed className="w-6 h-6 text-[#EB7C4A]" />
              <span className="text-sm md:text-base font-medium text-gray-700">
                Custom Build
              </span>
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-7 w-full max-w-md mb-20">
            <h3 className="text-xl md:text-2xl text-(--dark-color) font-medium text-center">
              Pick Your Template
            </h3>
            <button
              onClick={() => { setMethod(null); setCurrentStep(1); }}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cardData.map((card, index) => (
              <div key={index}
                className={`rounded-2xl p-4 ${card.bgColor} ${card.border} flex flex-col w-full max-w-[280px] mx-auto`}
              >
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
      )}

      {currentStep === 3 && (
        <div className="w-full flex flex-col items-center justify-center pt-15">
          <h3 className="text-xl md:text-2xl text-(--dark-color) text-center font-medium mb-4">
            Creating environment for you!
          </h3>
          <img src={loader} alt="Loading..." className="w-40 h-40 md:w-24 md:h-24 mt-4 bg-none" />
        </div>
      )}
    </div>
  );
}
export default BuildResume