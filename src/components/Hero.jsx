import { Sparkles, ArrowRight } from 'lucide-react';
import imgHero from '/src/assets/images/home-mockup.png';

const Hero = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-32 lg:pt-38 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-(--dark-color) leading-tight mb-5">
            Build Your{' '}
            <span
              className="text-[#2DC08D] underline font-medium"
              style={{ fontFamily: 'var(--font-kaushan)' }}
            >
              Perfect Resume
            </span>
            <br />
            Smarter, Faster, with AI.
          </h1>
          <p className="text-(--dark-color) text-mdd mb-6 font-normal">
            Professional resume made easy, create or upgrade with realtime smart suggestions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto bg-[#EB904A] border border-[#BC5729] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#d67f3d] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-sm">
              Create your resume
              <Sparkles className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-[#2DC08D] border border-[#1A9369] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#26A97C] cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 text-sm">
              Explore Templates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 flex justify-center">
            <img src= {imgHero} className="w-auto max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
