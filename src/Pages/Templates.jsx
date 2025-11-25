import React from "react";
import Navbar from "../components/Navbar";
import TemplatesHero from "../components/TemplatesHero";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import blob1 from '/src/assets/images/blob1.png';

const Templates = () => {
  return (
    <>
      <img src={blob1} alt="background blob"
            className="absolute top-0 left-0 w-[350px] sm:w-[500px] md:w-[800px] lg:w-[900px] opacity-90 z-10 pointer-events-none select-none"
      />
      <Navbar />
      <TemplatesHero />
      <FAQ />
      <CTA />
      <Footer />
    
      
    </>
  );
};
export default Templates;
