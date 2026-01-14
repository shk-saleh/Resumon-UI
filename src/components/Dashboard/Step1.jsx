import React from "react";
import { BicepsFlexed, Sparkles } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";

const Step1 = () => {

    const { setMethod } = useResumeStore();

  return (
    <div className="h-100 w-full flex flex-col items-center justify-center mt-10">
      <h3 className="text-xl md:text-2xl text-(--dark-color) text-center font-normal mb-10">
        How would you like to create your resume?
      </h3>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">

        <button
          onClick={() => setMethod("ai")}
          className="flex flex-col justify-center items-center gap-5 w-44 md:w-50 border border-gray-100 bg-white
            p-10 rounded-xl cursor-pointer shadow-[0_0_2px_#00000026] transition-all duration-200 hover:bg-[#F9FAFB]"
        >
          <Sparkles className="w-6 h-6 text-[#EB7C4A]" />
          <span className="text-sm md:text-base font-medium text-gray-700">
            Build with AI
          </span>
        </button>

        <button
          onClick={() => setMethod("smart")}
          className="flex flex-col justify-center items-center gap-5 w-44 md:w-50 border border-gray-100 bg-white
            p-10 rounded-xl cursor-pointer shadow-[0_0_2px_#00000026] transition-all duration-200 hover:bg-[#F9FAFB]"
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