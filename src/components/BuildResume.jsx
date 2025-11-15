import React, { useState, useEffect } from "react";
import { BicepsFlexed, Sparkles, ChevronLeft } from 'lucide-react';
import { useResumeStore } from "../store/useResumeStore";

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
            <div className="absolute bottom-4 mt-2 flex flex-col items-center justify-center text-center text-sm text-gray-500 font-light ">
              <span> Your data will be processed in accordance with our{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </span>
              <span className="mt-1"> &copy; 2025, Resumon. All rights reserved.</span>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-7 w-full max-w-md mb-4">
              <h3 className="text-xl md:text-2xl text-(--dark-color) font-medium text-center">
                Pick Your Template
              </h3>
              <button
                onClick={() => { setMethod(null); setCurrentStep(1); }}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer">
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="absolute bottom-4 mt-2 flex flex-col items-center justify-center text-center text-sm text-gray-500 font-light">
              <span> Your data will be processed in accordance with our{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </span>
              <span className="mt-1"> &copy; 2025, Resumon. All rights reserved.</span>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="w-full flex flex-col items-center justify-center pt-60">
            <h3 className="text-xl md:text-2xl text-(--dark-color) text-center font-medium mb-4">
              Creating environment for you!
            </h3>
            <img src="/src/assets/images/loader.gif" alt="Loading..." className="w-40 h-40 md:w-24 md:h-24 mt-4 bg-none" />
          </div>
        )}
    </div>
  );
}
export default BuildResume