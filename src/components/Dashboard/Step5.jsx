import React, { useState , useRef} from "react";
import { Download, Share2, PencilIcon } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";
import Gauge from '../../assets/images/Gauge.png'
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";
import Template5 from "./Templates/Template5";

const Step5 = () => {

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { template, setCurrentStep } = useResumeStore();
  const templateRef = useRef();
  const printRef = useRef();

  const atsScore = 75;

  const renderTemplate = () => {
    if (template === 1) return <Template1 />;
    if (template === 2) return <Template2 />;
    if (template === 3) return <Template3 />;
    if (template === 4) return <Template4 />;
    if (template === 5) return <Template5 />;
    return null;
  };


  const handleDownloadPDF = () => {
  const printWindow = window.open('', '', 'width=900,height=1200');
  
  if (templateRef.current) {
    const content = templateRef.current.innerHTML;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              background: white;
              font-family: "Montserrat", sans-serif;
            }
            
            @page {
              size: Letter;
              margin: 0;
              padding: 4px;
            }
            
            @media print {
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              
              body {
                margin: 0 !important;
                padding: 0 !important;
                background: white !important;
              }
              
              .template {
                margin: 0 !important;
                padding: 0 !important;
                transform: none !important;
                scale: 0.90 !important;
              }
            }
            
            body {
              padding: 0;
              margin: 0;
            }
            
            .template {
              transform: none !important;
              scale: 0.94 !important;
              width: 100%;
              page-break-after: avoid;
            }
          </style>
        </head>
        <body>
          <div class="template">
            ${content}
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
  }
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
          <div className="w-full h-auto rounded-lg flex items-center justify-center overflow-hidden">
            <div className={`scale-[0.40] origin-top ${template == 5 ? 'bg-100-600' : ''} `} ref={templateRef}>
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
            <button 
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2DC08D] hover:bg-[#27a77b] disabled:opacity-50 text-white py-2 rounded-lg transition cursor-pointer"
            >
              {isDownloading ? 'Generating...' : 'Download'}
              <Download size={22} />
            </button>

            <button 
              onClick={handleDownloadPDF}
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition cursor-pointer"
            >
              Print
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

            <div className="flex justify-center">
              <div ref={printRef}>
                {renderTemplate()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Step5;