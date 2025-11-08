import { Wand2, ScrollText, CircleGauge, BicepsFlexed } from "lucide-react";

export const featuresData = [
  {
    title: "AI Resume Builder",
    description: "Just write your prompt or select your favourite template and your resume ready boom!",
    icon: Wand2,
    gradientFrom: "#2DC08D", gradientTo: "#106648",
    color: "#2DC08D",
  },
  {
    title: "Smart Resume Builder",
    description: "Select your favourite template enter your details and your downloadable + shareable resume get ready!",
    icon: BicepsFlexed,
    gradientFrom: "#EB904A", gradientTo: "#EB7C4A",
    color: "#EB904A",
  },
  {
    title: "ATS Score Checker",
    description: "Just write your prompt or select your favourite template and your resume ready boom!",
    icon: CircleGauge,
    gradientFrom: "#2DC08D", gradientTo: "#106648",
    color: "#2DC08D",
  },
  {
    title: "Upwork Proposal Gen",
    description: "Just need to provide the client job requirements we will generate your optimized proposal!",
    icon: ScrollText,
    gradientFrom: "#EB904A", gradientTo: "#EB7C4A",
    button: { text: "Coming soon!", textColor: "text-black", bgColor: "bg-white" },
    color: "#EB904A",
  },
];