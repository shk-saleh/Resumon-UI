import React, { useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import { plansData } from "../data/plansData";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const PlansCard = ({ showToggle = false }) => {
  const [mode, setMode] = useState("Monthly");

  const getPrice = (amount) => {
    if (mode === "Monthly") return amount;
    if (amount === 0) return 0;
    const yearlyPrice = amount * 12 * 0.75;
    return (yearlyPrice / 12).toFixed(1);
  };

  return (
    <div>
      {showToggle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-20"
        >
          <div className="inline-flex bg-white border border-gray-300 p-1 rounded-full gap-1">
            <button
              onClick={() => setMode("Monthly")}
              className={`px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                mode === "Monthly"
                  ? "bg-[#F1F0F0] text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setMode("Yearly -25%")}
              className={`px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                mode === "Yearly -25%"
                  ? "bg-[#F1F0F0] text-[#2DC08D]"
                  : "text-[#2DC08D] hover:text-[#24a870]"
              }`}
            >
              Yearly -25%
            </button>
          </div>
        </motion.div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {plansData.map((plan, index) => {
          const IconComponent = plan.icon;
          return (
            <motion.div
              key={index}
              variants={cardAnim}
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={`card ${
                plan.name === "Pro"
                  ? "bg-[#EFFAF7] border border-[#2DC08D] shadow-lg scale-105"
                  : "bg-[#FDFDFD] border border-[#D9D9D9]"
              }`}
            >
              <div className="card-body">
                <span className="badge badge-base bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2 mb-3">
                  <IconComponent className={`w-4 h-4 ${plan.badgeColor}`} />
                  {plan.name}
                </span>

                <h2 className="text-4xl font-medium text-[#24272E] mb-1">
                  ${getPrice(plan.price)}/
                  <span className="text-xl font-light text-[#BCBBBB]">
                    {mode === "Monthly" ? "month" : "yearly"}
                  </span>
                </h2>

                <p className="text-sm text-[#858383]">{plan.description}</p>

                <ul className="mt-8 flex flex-col gap-2 text-sm text-[#858383]">
                  {plan.features.map((feature, i) => {
                    const FeatureIcon = feature.included ? Check : X;
                    return (
                      <li key={i}>
                        <FeatureIcon
                          className={`size-4 me-2 inline-block ${
                            feature.included
                              ? "text-[#2DC08D]"
                              : "text-[#EB7C4A]"
                          }`}
                        />
                        {feature.text}
                      </li>
                    );
                  })}
                </ul>

                <button
                  className={`${plan.buttonBg} ${plan.buttonTextColor} mt-9 px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${plan.buttonHover}`}
                >
                  {plan.buttonText}
                  <ArrowUpRight
                    className={`w-5 h-5 inline-block ml-2 ${plan.arrowColor}`}
                  />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PlansCard;
