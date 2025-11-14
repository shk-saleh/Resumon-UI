import React from "react";
import image1 from "/src/assets/images/screen1.png";
import image2 from "/src/assets/images/screen2.png";
import image3 from "/src/assets/images/screen3.png";
import image4 from "/src/assets/images/screen4.png";

export const steps = [
    {
      id: 1,
      title: "Choose Your Mode.",
      description: "Start your journey by selecting how you want to create your resume:",
      points: [
        { type: "AI Mode", text: "Simply describe yourself, your experience, and your skills in a short prompt. ResumeOn's AI will handle the rest.", color: "text-[#2DC08D]" },
        { type: "Manual Mode", text: "Prefer control? Fill out step-by-step forms to craft your resume manually.", color: "text-[#2DC08D]" }
      ],
      button: { bg: "bg-[#2DC08D]",border: "border border-[#1A9369]", hoverBg: "hover:bg-[#26A97C]",},
      image: image1
    },
    {
      id: 2,
      title: "Pick a Template.",
      points: [
        { text: "Browse from a collection of modern, professional templates.", color: "text-[#EB904A]" },
        { text: "Each template is ATS-friendly and customizable, ensuring your resume stands out to recruiters and systems alike.", color: "text-[#EB904A]" }
      ],
      button: { bg: "bg-[#EB904A]", border: "border border-[#CC6A24]",hoverBg: "hover:bg-[#d67f3d]",},
      image: image2
    },
    {
      id: 3,
      title: "Add Your Information.",
      points: [
        { text: "If you selected AI mode, the system will automatically generate your resume content using your prompt.", color: "text-[#2DC08D]" },
        { text: "In Manual Mode, you can input your education, experience, projects, and skills using simple guided forms.", color: "text-[#2DC08D]" }
      ],
      button: {bg: "bg-[#2DC08D]",border: "border border-[#1A9369]",hoverBg: "hover:bg-[#26A97C]",},
      image: image3
    },
    {
      id: 4,
      title: "Share & Download.",
      points: [
        { text: "Instantly check your ATS compatibility score.", color: "text-[#EB904A]" },
        { text: "Download it as a PDF or Word Document.", color: "text-[#EB904A]" },
        { text: "Print or share it directly with recruiters.", color: "text-[#EB904A]" }
      ],
      button: {bg: "bg-[#EB904A]",border: "border border-[#CC6A24]",hoverBg: "hover:bg-[#d67f3d]",},
      image: image4
    }
  ];