import React from "react";
import { featuresData } from "../data/featuresData";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Features = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white"
    >
      <img
        src="/src/assets/images/blob2.png"
        className="absolute right-[-60px] top-[65%] pointer-events-none select-none transform -translate-y-1/2 w-[350px] sm:w-[400px] md:w-[600px] opacity-80"
      />

      <div className="max-w-5xl mx-auto">
        <motion.div variants={item} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#EB904A]" />
            <h2 className="text-2xl sm:text-3xl text-[#000000]">
              Our Features
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto"
        >
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="rounded-2xl p-[2px] z-1"
                style={{
                  background: `linear-gradient(135deg, ${feature.color} 0%, #FFFFFF 50%, ${feature.color} 100%)`,
                }}
              >
                <div className="bg-gray-100 rounded-2xl p-10 z-10 h-full">
                  <div className="flex items-start justify-between mb-7">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-7"
                      style={{
                        background: `linear-gradient(to top, ${feature.gradientFrom}, ${feature.gradientTo})`,
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {feature.button && (
                      <button
                        className={`${feature.button.bgColor} ${feature.button.textColor} text-base font-medium px-3 py-1 rounded-3xl`}
                      >
                        {feature.button.text}
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-medium text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#858383] text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
