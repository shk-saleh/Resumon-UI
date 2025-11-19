import React from "react";
import { BicepsFlexed, Sparkles } from "lucide-react";
import { useResumeStore } from "../store/useResumeStore";

const Step1 = () => {

    const { setMethod } = useResumeStore();

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <h3 className="text-xl md:text-2xl text-(--dark-color) text-center font-normal mb-10">
        How would you like to create your resume?
      </h3>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">

        <button
          onClick={() => setMethod("AI Build")}
          className="flex flex-col justify-center items-center gap-5 w-40 md:w-44 border border-gray-100 bg-white
            p-7 rounded-xl cursor-pointer shadow-[0_0_2px_#00000026] transition-all duration-200 hover:bg-[#F9FAFB]"
        >
          <Sparkles className="w-6 h-6 text-[#EB7C4A]" />
          <span className="text-sm md:text-base font-medium text-gray-700">
            Build with AI
          </span>
        </button>

        <button
          onClick={() => setMethod("Custom Build")}
          className="flex flex-col justify-center items-center gap-5 w-40 md:w-44 border border-gray-100 bg-white
            p-7 rounded-xl cursor-pointer shadow-[0_0_2px_#00000026] transition-all duration-200 hover:bg-[#F9FAFB]"
        >
          <BicepsFlexed className="w-6 h-6 text-[#EB7C4A]" />
          <span className="text-sm md:text-base font-medium text-gray-700">
            Custom Build
          </span>
        </button>
      </div>
    </div>
  );
};
export default Step1;