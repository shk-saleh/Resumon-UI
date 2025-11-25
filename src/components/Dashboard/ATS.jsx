import React, { useState, useRef, useCallback } from "react";
import { Upload, FileText, CheckCircle, Loader } from "lucide-react";

const ATS = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const fileInputRef = useRef(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => setIsDragging(false), []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length !== 1) {
      setError("Please upload exactly one PDF or DOCX file.");
      return;
    }

    const file = files[0];
    const isValid =
      file.type === "application/pdf" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (!isValid) {
      setError("Only PDF or DOCX files are allowed.");
      return;
    }

    setError("");
    setUploadedFile(file);
    simulateUpload();
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 150);
  };

  const startScanning = () => {
    setIsScanning(true);
    // API call to check ats score
  };

  return (
    <div className="max-w-xl mx-auto text-center my-12 font-sans">
      <h1 className="mb-8 text-[#00264D] font-semibold text-2xl">
        Scan Your Resume for ATS
      </h1>

      {!isScanning && (
        <>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
            className="p-10 border-2 rounded-xl border-[#00A4A3] border-dashed cursor-pointer transition-all flex flex-col items-center justify-center"
          >
            {!uploadedFile ? (
              <>
                <Upload className="w-12 h-12 text-[#FF8064]/70 mb-4" />
                <p className="text-[#00264D] font-medium mb-4 text-lg">
                  Drag & drop a PDF or DOCX here
                </p>
                <button className="text-[#0052A0] bg-[#CADFE2] text-sm py-2 px-6 rounded-2xl cursor-pointer hover:bg-[#b7d1d6] transition">
                  Upload Your Resume
                </button>
              </>
            ) : (
              <>
                <FileText className="w-12 h-12 text-[#FF8064]/70 mb-4" />

                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-[#00264D] font-medium text-md truncate max-w-xs">
                    {uploadedFile.name}
                  </p>
                </div>

                <button className="text-[#0052A0] font-medium border border-dashed border-[#0052A0] text-sm py-2 px-6 rounded-2xl cursor-pointer hover:bg-[#f0fdfa] transition">
                  Change File
                </button>
              </>
            )}

            <input
              type="file" ref={fileInputRef} style={{ display: "none" }} accept=".pdf,.docx"
              onChange={handleFileInputChange}
            />
          </div>

          {!uploadedFile || uploadProgress < 100 ? (
            uploadProgress > 0 && (
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 bg-[#2DC08D] transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-2 text-gray-700">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )
          ) : (
            <div className="mt-6">
              <button
                onClick={startScanning}
                className="text-white bg-[#2DC08D] text-lg py-2 px-5 rounded-xl cursor-pointer 
                 transform transition-transform duration-200 ease-out
                 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2DC08Daa]"
              >
                Start Scanning
              </button>
            </div>
          )}

          {error && (<p className="mt-4 text-red-500 text-sm font-medium">{error}</p>)}
        </>
      )}

      {isScanning && (
        <div className="mt-10 p-10 bg-[#F0FFFA] rounded-xl border-2 border-[#2DC08D]/30 border-dashed">
          <h2 className="text-2xl font-semibold text-[#00264D] mb-4">
            Scanning your resume...
          </h2>
          <div className="flex justify-center mb-4">
            <Loader className="w-10 h-10 animate-spin text-[#2DC08D]" />
          </div>
        </div>
      )}
    </div>
  );
};
export default ATS;