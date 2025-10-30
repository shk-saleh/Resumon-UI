import React from 'react'
import { useState } from 'react';
import Navbar from "./Navbar";
import HowItWorksSection from './HowItWorksSection';
import { Sparkles, Wand2, ScrollText, CircleGauge, BicepsFlexed,ArrowRight,ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const templates = [
    { id: 1, image: '/src/assets/images/template-1.png' },
    { id: 2, image: '/src/assets/images/template-2.png' },
    { id: 3, image: '/src/assets/images/template-3.png' },
    { id: 4, image: '/src/assets/images/template-4.png' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === templates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? templates.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white relative ">

      <Navbar />

       <img src="/src/assets/images/blob1.png"
          className="absolute top-0 left-0 w-[350px] sm:w-[500px] md:w-[800px] lg:w-[900px] opacity-90 z-10 pointer-events-none select-none"
       />

      <div className="pt-20">
        <section className="relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#24272E] leading-tight mb-5">
                Build Your{' '}
                <span
                  className="text-[#2DC08D] italic underline decoration-2"
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
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-3xl text-[#000000] text-center mb-10">
              Explore Popular Templates!
            </h2>

            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2.5 shadow-md hover:shadow-lg border border-gray-200 cursor-pointer"
              >
                <ChevronLeft strokeWidth={2.5} className="w-5 h-5 text-white" />
              </button>

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {templates.map((template, index) => (
                    <div key={index} className="min-w-full flex gap-4 px-1">
                      {templates.map((t) => (
                        <div key={t.id} className="w-1/4 flex-shrink-0">
                          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 p-3 cursor-pointer">
                            <img
                              src={t.image}
                              alt={`Template ${t.id}`}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2.5 shadow-md hover:shadow-lg border border-gray-200 cursor-pointer"
              >
                <ChevronRight strokeWidth={2.5} className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </section>

        <section className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
          {/* <img src="/src/assets/images/blob2.png"
            className="absolute right-[-60px] top-[65%] transform -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] opacity-80 z-10 pointer-events-none select-none"
          /> */}

          <img 
              src="/src/assets/images/blob2.png"
              className="fixed -right-0 top-[40vh] w-[700px] h-[800px] object-fill pointer-events-none z-0 opacity-80"
            style={{ right: '0', marginRight: '0' }}
            />

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#EB904A]" />
                <h2 className="text-2xl sm:text-2xl md:text-3xl text-[#000000]">
                  Our Features
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="bg-[#F3F3F3] rounded-xl p-6 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
                <div className="w-12 h-12 bg-[#149369] rounded-lg flex items-center justify-center mb-4">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-[550] text-[#000000] mb-2">AI Resume Builder</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  Just write your prompt or select your favourite template and your resume ready boom!
                </p>
              </div>

              <div className="bg-[#F3F3F3] rounded-xl p-6 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
                <div className="w-12 h-12 bg-[#EB904A] rounded-lg flex items-center justify-center mb-4">
                  <BicepsFlexed className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-[550] text-[#000000] mb-2">Smart Resume Builder</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  Select your favourite template enter your details and your downloadable + shareable resume get ready!
                </p>
              </div>

              <div className="bg-[#F3F3F3] rounded-xl p-6 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
                <div className="w-12 h-12 bg-[#149369] rounded-lg flex items-center justify-center mb-4">
                  <CircleGauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-[550] text-[#000000] mb-2">ATS Score Checker</h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  Just write your prompt or select your favourite template and your resume ready boom!
                </p>
              </div>

              <div className="bg-[#F3F3F3] rounded-xl p-6 border-t-2 border-r-2 border-[#D9D9D9] border-l border-b">
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

      </div>
    </div>
  );
}
export default Home