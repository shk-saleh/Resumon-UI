import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BicepsFlexed, Sparkles, ChevronLeft } from 'lucide-react';
import { useResumeStore } from "../store/useResumeStore";
import Navbar from "../components/Navbar";

const BuildResume = () => {
  const {
    method, template, currentStep,
    setMethod, setTemplate, setCurrentStep, resetResumeBuilder,
  } = useResumeStore();

  const navigate = useNavigate();

  useEffect(() => {
    resetResumeBuilder();
    setCurrentStep(1);
  }, []);

  useEffect(() => {
    if (currentStep === 1 && method) 
    {
      setCurrentStep(2);
    }
  }, [method]);

  useEffect(() => {
    if (currentStep === 2 && template) 
    {
      setCurrentStep(3);
    }
  }, [template]);

  useEffect(() => {
    if (currentStep === 3) 
    {
      const timer = setTimeout(() => {
        resetResumeBuilder();
        navigate("/dashboard");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen z-0 bg-gradient-to-r from-[#FFFFFF] to-[#F1FFFB] px-4 sm:px-6 md:px-0">

      <Navbar />

      <div className="max-w-6xl w-full mx-auto">

        {currentStep === 1 && (
          <div className="w-full flex flex-col items-center justify-center pt-60">
            <h3 className="text-xl md:text-2xl text-(--dark-color) text-center font-medium mb-4">Choose one of two options</h3>

            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full">
              <button
                onClick={() => setMethod("AI Build")}
                className="flex justify-center items-center gap-3 w-40 md:w-45 border border-[#BC5729] bg-[#EB7C4A] text-white px-4 py-2.5 m-2 rounded-lg font-normal text-sm md:text-base duration-200 transition-all hover:bg-[#D9733C] cursor-pointer">
                    AI Build
                <Sparkles className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMethod("Custom Build")}
                className="flex justify-center items-center gap-3 w-40 md:w-45 border border-[#1A9369] bg-[#1A9369] text-white px-4 py-2.5 m-2 rounded-lg font-normal text-sm md:text-base duration-200 transition-all hover:bg-[#0f7f5e] cursor-pointer">
                    Custom Build
                <BicepsFlexed className="w-4 h-4"/>
              </button>
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <div className={`w-2 h-2 rounded-full ${currentStep >= 1 ? "bg-[#EB7C4A]" : "bg-gray-300"}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep >= 2 ? "bg-[#EB7C4A]" : "bg-gray-300"}`}></div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="w-full flex flex-col items-center justify-center pt-40">
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

            <div className="flex gap-3 justify-center mt-4">
              <div className={`w-2 h-2 rounded-full ${currentStep == 1 ? "bg-[#EB7C4A]" : "bg-gray-300"}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep == 2 ? "bg-[#EB7C4A]" : "bg-gray-300"}`}></div>
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
    </div>
  );
}
export default BuildResume