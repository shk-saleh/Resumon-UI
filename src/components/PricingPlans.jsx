import React, { useState } from "react";
import { plansData } from "../data/plansData";
import { ArrowUpRight, Check, X, Crown, Key, Swords } from "lucide-react";

const Plans = () => {
  const [mode, setMode] = useState("Monthly");
  const prices = { free: 0, pro: 6.5, elite: 12.5, };

  const getPrice = (amount) => {
    if (mode === "Monthly") return amount.toFixed(1);
    const yearlyPrice = amount * 12 * 0.75;
    return (yearlyPrice / 12).toFixed(1);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      <div className="flex justify-center mb-20">
        <div className="inline-flex bg-white border border-gray-300 p-1 rounded-full gap-1">
          <button
            onClick={() => setMode("Monthly")}
            className={`cursor-pointer px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium transition ${mode === "Monthly"
              ? "bg-[#F1F0F0] text-gray-900"
              : "text-gray-700 hover:text-gray-900"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setMode("Yearly -25%")}
            className={`cursor-pointer px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium transition ${mode === "Yearly -25%"
              ? "bg-[#F1F0F0] text-[#2DC08D]"
              : "text-[#2DC08D] hover:text-[#24a870]"
              }`}
          >
            Yearly -25%
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-auto">
        {plansData.map((plan, Index) => {
          const IconComponent = plan.icon;
          return (
            <div key={Index}
              className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
              <div className="card-body">
                <span className="badge badge-base bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2 mb-3">
                  <IconComponent className={`w-4 h-4 ${plan.badgeColor}`} /> {plan.name}
                </span>

                <h2 className="text-4xl font-medium text-[#24272E] mb-1">
                  ${getPrice(prices[plan.name.toLowerCase()])}/{" "}
                  <span className="text-xl font-light text-[#BCBBBB]">
                    {mode === "Monthly" ? "month" : "yearly"}
                  </span>
                </h2>
                <p className="text-sm text-[#858383]">{plan.description}</p>

                <ul className="mt-8 flex flex-col gap-2 text-sm text-[#858383]">
                  {plan.features.map((feature, e) => {
                    const FeatureIcon = feature.included ? Check : X;
                    const iconColor = feature.included ? "text-[#2DC08D]" : "text-[#EB7C4A]";
                    return (
                      <li key={e}>
                        <FeatureIcon className={`size-4 me-2 inline-block ${iconColor}`} />
                        <span>{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className={`${plan.buttonBg} ${plan.buttonTextColor} mt-9 px-8 py-3 rounded-lg font-semibold text-sm md:text-base duration-200 transition-all ${plan.buttonHover} cursor-pointer`}>
                  {plan.buttonText}
                  <ArrowUpRight className={`w-5 h-5 inline-block ml-2 ${plan.arrowColor}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Plans;