import React from "react";
import { Download, Share2 } from "lucide-react";

const DownShare = () => {
  const score = 96;

  // Circle progress settings
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 leading-tight">
          Hurrah! You have build your
          <br />
          resume!
        </h1>

        {/* Circular ATS Score Gauge */}
        <div className="relative flex justify-center items-center my-10">
          <svg className="w-64 h-64 -rotate-90" viewBox="0 0 240 240">
            {/* Background circle */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="20"
              fill="none"
            />

            {/* Gradient progress circle */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              className="transition-all duration-1000 ease-out"
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="30%" stopColor="#f97316" />
                <stop offset="60%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-7xl font-black text-[#2DC08D]">{score}%</div>
            <div className="text-lg font-medium text-gray-600 mt-1">
              ATS Score
            </div>
          </div>

          {/* Labels */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <span className="absolute top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-green-600">
              EXCELLENT
            </span>
            <span className="absolute bottom-10 right-10 text-xs font-bold text-red-600">
              POOR
            </span>
          </div>
        </div>

        {/* Buttons - Now using exact #2DC08D */}
        <div className="flex gap-5 justify-center mt-12">
          <button
            style={{ backgroundColor: "#2DC08D" }}
            className="flex items-center gap-3 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:brightness-105"
          >
            <Download size={24} />
            Download
          </button>

          <button className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-10 py-4 rounded-2xl border-2 border-gray-200 shadow-lg transition transform hover:scale-105">
            <Share2 size={24} />
            Share
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-10">
          *Your Data remain saved to us and will not be exposed
        </p>
      </div>
    </div>
  );
};

export default DownShare;
