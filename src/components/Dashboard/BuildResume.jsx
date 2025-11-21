import React, { useState, useEffect } from "react";
import { useResumeStore } from "../../store/useResumeStore";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const BuildResume = () => {
  const {
    method, template, currentStep, setCurrentStep, resetResumeBuilder,
  } = useResumeStore();

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
        setCurrentStep(4);
        //resetResumeBuilder();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className=" w-full mx-auto">
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}
    </div>
  );
}
export default BuildResume