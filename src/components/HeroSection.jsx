import React from 'react'
import { Sparkles, ArrowRight} from 'lucide-react';


const HeroSection = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-0 md:pt-16 md:pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#24272E] leading-tight mb-5">
            Build Your{' '}
            <span className="text-[#2DC08D] italic underline decoration-2" 
               style={{ fontFamily: "Kaushan Script" }}
            >
              Perfect Resume
            </span>
            <br />
               Smarter, Faster, with AI.
          </h1>
          <p className="text-[#858383] text-sm sm:text-base mb-6 max-w-xl mx-auto font-normal">
            Professional resume made easy, create or upgrade with realtime smart suggestions
          </p>
    
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto bg-[#EB904A] border border-[#BC5729] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#d67f3d] cursor-pointer flex items-center justify-center gap-2 text-sm">
                Create your resume
              <Sparkles className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-[#2DC08D] border border-[#1A9369] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#26A97C] cursor-pointer flex items-center justify-center gap-2 text-sm">
                Explore Templates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
    
          <div className="mt-12 flex justify-center">
            <img src="/src/assets/images/home-mockup.png" className="w-auto max-w-full h-auto"/>
          </div>
    
        </div>
      </div>
    </section>
  )
}
export default HeroSection