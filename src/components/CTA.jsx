import React from 'react'
import {ArrowUpRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="mt-9 mb-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 text-[#2DC08D]">
            Crack your dream job{' '}
          <span className="text-[#24272E]">today!</span>
        </h1>
          <p className="text-[#858383] text-sm">
            Type your details or just give a short prompt Resumon's smart AI will craft a job-winning resume in seconds.
          </p>
        <button className="bg-[#24272E] border text-white mt-6 px-6 py-2.5 rounded-lg font-medium hover:bg-[#3a3c44] transition flex items-center justify-center gap-2 cursor-pointer mx-auto">
            Generate with AI
          <ArrowUpRight className="w-4 h-4" />
        </button>
    </div>
  )
}
export default CTA