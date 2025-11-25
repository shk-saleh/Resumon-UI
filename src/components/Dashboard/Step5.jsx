import React, { useState , useRef} from "react";
import { Download, Share2, ArrowLeft, PencilIcon } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import Gauge from '../../assets/images/Gauge.png'
import html2pdf from "html2pdf.js";
import Classic from "./Templates/Classic";
import Modern from "./Templates/Modern";
import Template3 from "./Templates/Template3";

const Step5 = () => {

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { template, setCurrentStep } = useResumeStore();
  const templateRef = useRef(null);

  const atsScore = 75; // we call api and fetch the ats score on the basis of docuument

  const renderTemplate = () => {
    if (template === 1) return <Modern />;
    if (template === 2) return <Classic />;
    if (template === 3) return <Template3 />;
    return null;
  };

  const handleDownloadPDF = () => {

    const element = templateRef.current;
    
    if (!element) {
      console.error("Template element not found");
      return;
    }else{
      console.log("hello")
    }

    const options = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, backgroundColor: "#ffffff" }, // ★ FIX
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    };


    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="relative flex justify-center gap-20">

      <button
        onClick={() => setCurrentStep(4)}
        className="absolute top-4 left-4 px-3 py-1 bg-white border border-[#D9D9D9] text-[#000000] rounded-lg flex items-center gap-2 cursor-pointer"
      >
        <PencilIcon size={18} color="#2DC08D" />
        Edit
      </button>

      <div className="w-[430px] mt-4">
        <div
          className="p-3 rounded-xl bg-white h-[500px] border border-gray-300 cursor-pointer group-hover:brightness-95 transition-all duration-200"
          onClick={() => setIsPreviewOpen(true)}
        >
          <div className="w-full h-[580px] rounded-lg flex items-center justify-center overflow-hidden">
            <div className="scale-[0.45] origin-top mt-8" ref={templateRef}>
              {renderTemplate()}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[400px] flex flex-col gap-6 pt-20">
        <h2 className="text-lg text-center text-gray-700">
          Hurrah! You have built your resume!
        </h2>

        <div className="flex flex-col justify-center items-center bg-[#F3F9F8] border border-gray-300 rounded-xl p-6">
          <div className="flex items-center gap-30">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-normal text-[#A9A9A9]">ATS Score:</h3>
              <span className="text-4xl text-[#28BF8A] font-medium">
                {atsScore}%
              </span>
            </div>
            <img src={Gauge} className="w-auto h-16" alt="gauge" />
          </div>

          <div className="w-full flex gap-3 mt-9">
            <button onClick={handleDownloadPDF} className="flex-1 flex items-center justify-center gap-2 bg-[#2DC08D] hover:bg-[#27a77b] text-white py-2 rounded-lg transition cursor-pointer">
              Download
              <Download size={22} />
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition cursor-pointer">
              Share
              <Share2 size={18} color="#28BF8A" />
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-5">
            *Your data remains saved with us and will not be exposed.
          </p>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>

            <div className="flex justify-center">{renderTemplate()}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Step5;