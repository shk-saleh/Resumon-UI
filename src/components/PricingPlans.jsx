import React, { useState } from "react";
import { ArrowUpRight, Check, X, Crown, Key, Swords } from "lucide-react";

const Plans = () => {
  const [mode, setMode] = useState("Monthly");

  // Base monthly prices
  const prices = {
    free: 0,
    pro: 6.5,
    elite: 12.5,
  };

  // Calculate price based on mode
  const getPrice = (amount) => {
    if (mode === "Monthly") return amount.toFixed(1);
    const yearlyPrice = amount * 12 * 0.75; // 25% OFF
    return (yearlyPrice / 12).toFixed(1); // show per-month discounted price
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      {/* Toggle Button */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex bg-white border border-gray-300 p-1 rounded-full gap-1">
          <button
            onClick={() => setMode("Monthly")}
            className={`cursor-pointer px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium transition ${
              mode === "Monthly"
                ? "bg-[#F1F0F0] text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setMode("Yearly -25%")}
            className={`cursor-pointer px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium transition ${
              mode === "Yearly -25%"
                ? "bg-[#F1F0F0] text-[#2DC08D]"
                : "text-[#2DC08D] hover:text-[#24a870]"
            }`}
          >
            Yearly -25%
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-auto">
        {/* Free Plan */}
        <div className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
          <div className="card-body">
            <span className="badge badge-base bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2 mb-3">
              <Key className="w-4 h-4 text-[#2DC08D]" /> Free
            </span>

            <h2 className="text-4xl font-medium text-[#24272E] mb-1">
              ${getPrice(prices.free)}/{" "}
              <span className="text-xl font-light text-[#BCBBBB]">
                {mode === "Monthly" ? "month" : " yearly"}
              </span>
            </h2>
            <p className="text-sm text-[#858383]">Start generating your resume today!</p>

            <ul className="mt-8 flex flex-col gap-2 text-sm text-[#858383]">
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Resume Creation</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Access to 5+ Templates</span>
              </li>
              <li>
                <X className="size-4 me-2 inline-block text-[#EB7C4A]" />
                <span>No Watermark</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Multilingual</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Save as PDF</span>
              </li>
            </ul>
            <button className="bg-[#EAEAEA] text-[#24272E] mt-9 px-8 py-3 rounded-lg font-semibold text-sm md:text-base duration-200 transition-all hover:bg-[#D6D6D6] cursor-pointer">
              Start Free Trial
              <ArrowUpRight className="w-5 h-5 inline-block ml-2 text-[#2DC08D]" />
            </button>
          </div>
        </div>

        {/* PRO PLAN */}
        <div className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
          <div className="card-body">
            <span className="badge badge-base bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2 mb-3">
              <Swords className="w-4 h-4 text-[#2DC08D]" /> Pro
            </span>

            <h2 className="text-4xl font-medium text-[#24272E] mb-1">
              ${getPrice(prices.pro)}/{" "}
              <span className="text-xl font-light text-[#BCBBBB]">
                {mode === "Monthly" ? "month" : " yearly"}
              </span>
            </h2>
            <p className="text-sm text-[#858383]">Increase your chance by 80%</p>

            <ul className="mt-8 flex flex-col gap-2 text-sm text-[#858383]">
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Resume Creation</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Access to 5+ Templates</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>No Watermark</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Multilingual</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Save as PDF</span>
              </li>
            </ul>

            <button className="bg-[#2DC08D] text-white mt-9 px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:bg-[#26A97C] cursor-pointer">
              Buy Now
              <ArrowUpRight className="w-5 h-5 inline-block ml-2" />
            </button>
          </div>
        </div>

        {/* ELITE PLAN */}
        <div className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
          <div className="card-body">
            <span className="badge badge-base bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2 mb-3">
              <Crown className="w-4 h-4 text-[#2DC08D]" /> Elite
            </span>

            <h2 className="text-4xl font-medium text-[#24272E] mb-1">
              ${getPrice(prices.elite)}/{" "}
              <span className="text-xl font-light text-[#BCBBBB]">
                {mode === "Monthly" ? "month" : " yearly"}
              </span>
            </h2>
            <p className="text-sm text-[#858383]">Start generating your resume today!</p>

            <ul className="mt-8 flex flex-col gap-2 text-sm text-[#858383]">
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Resume Creation</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Access to 5+ Templates</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>No Watermark</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Multilingual</span>
              </li>
              <li>
                <Check className="size-4 me-2 inline-block text-[#2DC08D]" />
                <span>Save as PDF</span>
              </li>
            </ul>

            <button className="bg-[#2DC08D] text-[#FFFFFF] mt-9 px-8 py-3 rounded-lg font-semibold text-sm md:text-base duration-200 transition-all hover:bg-[#26A97C] cursor-pointer">
              Buy Now
              <ArrowUpRight className="w-5 h-5 inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
