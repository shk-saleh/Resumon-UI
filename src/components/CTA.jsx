import React from 'react'
import { useNavigate} from "react-router-dom";
import {ArrowUpRight } from 'lucide-react';

const CTA = () => {
  
  const navigate = useNavigate();

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-semibold mb-2 text-[#2DC08D]">
            Crack your dream job 
          <span className="text-[#24272E] italic"> today!</span>
        </h1>
          <p className="text-[#858383] text-sm my-6">
            Type your details or just give a short prompt Resumon's smart AI will craft a job-winning resume in seconds.
          </p>
        <button 
          onClick={() => navigate("/get-started")}
          className="bg-[#24272E] border text-white mt-4 px-6 py-2.5 rounded-lg font-light hover:bg-[#3a3c44] transition flex items-center justify-center gap-2 cursor-pointer mx-auto">
            Generate with AI
          <ArrowUpRight className="w-4 h-4" />
        </button>
    </div>
  )
}
export default CTA