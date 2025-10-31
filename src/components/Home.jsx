import React from 'react'
import Navbar from "./Navbar";
import HeroSection from './HeroSection';
import TemplatesCarousel from './TemplatesCarousel';
import HowItWorksSection from './HowItWorksSection';
import ToolsSection from './ToolsSection';
import { Sparkles, Wand2, ScrollText, CircleGauge, BicepsFlexed } from 'lucide-react';


const Home = () => {
  return (
    <div className="min-h-screen bg-white relative ">

      <Navbar />

      <img src="/src/assets/images/blob1.png"
        className="absolute top-0 left-0 w-[350px] sm:w-[500px] md:w-[800px] lg:w-[900px] opacity-90 z-10 pointer-events-none select-none"
      />

      <div className="pt-20">

        <HeroSection />
        <TemplatesCarousel />

        <section className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
          {/* <img src="/src/assets/images/blob2.png"
            className="absolute right-[-60px] top-[65%] transform -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] opacity-80 z-10 pointer-events-none select-none"
          /> */}

          {/* <img src="/src/assets/images/blob2.png" style={{ right: '0', marginRight: '0' }}
              className="fixed -right-0 top-[40vh] w-[700px] h-[800px] object-fill pointer-events-none z-0 opacity-80"
            /> */}

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#EB904A]" />
                <h2 className="text-2xl sm:text-3xl text-[#000000]">  Our Features </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="bg-[#F3F3F3] rounded-xl p-10 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
                <div className="w-16 h-16 bg-gradient-to-t from-(--primary-color) to-[#106648] rounded-lg flex items-center justify-center mb-4">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-(--dark-color) mb-4">AI Resume Builder</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  Just write your prompt or select your favourite template and your resume ready boom!
                </p>
              </div>

              <div className="bg-[#F3F3F3] rounded-xl p-10 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
                <div className="w-12 h-12 bg-[#EB904A] rounded-lg flex items-center justify-center mb-4">
                  <BicepsFlexed className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-[550] text-[#000000] mb-2">Smart Resume Builder</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  Select your favourite template enter your details and your downloadable + shareable resume get ready!
                </p>
              </div>

              <div className="bg-[#F3F3F3] rounded-xl p-10 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
                <div className="w-12 h-12 bg-[#149369] rounded-lg flex items-center justify-center mb-4">
                  <CircleGauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-[550] text-[#000000] mb-2">ATS Score Checker</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  Just write your prompt or select your favourite template and your resume ready boom!
                </p>
              </div>

              <div className="bg-[#F3F3F3] rounded-xl p-10 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
                <div className="w-12 h-12 bg-[#EB904A] rounded-lg flex items-center justify-center mb-4">
                  <ScrollText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-[550] text-[#000000] mb-2">Upwork Proposal Gen</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  Just need to provide the client job requirements we will generate your optimized proposal!
                </p>
              </div>
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <ToolsSection />

        <div>
          <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div className="collapse-title font-semibold">What is Resumon?</div>
            <div className="collapse-content text-sm">
              Resumon is an online resume builder that hepls you craete a professional looking resume in minutes. Just fill in your details,choose a template, and download your resume instantly.
              </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div className="collapse-title font-semibold">Do I need to create an account to use Resumon?</div>
            <div className="collapse-content text-sm">
              Yes,
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div className="collapse-title font-semibold">Can I download my Resume for free?</div>
            <div className="collapse-content text-sm">
              Go to 
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div className="collapse-title font-semibold">Is my data safe on Resumon?</div>
            <div className="collapse-content text-sm">
              Yes
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Home