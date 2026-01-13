import React from "react";
import { toolsData } from "../data/toolsData";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Tools = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="px-4 sm:px-6 lg:px-8 pt-0 pb-16 bg-white"
    >
      <div className="max-w-6xl mx-auto text-justify">
        <motion.div variants={fadeUp} className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
            Why our tools?
          </h2>
          <p className="text-[14px] text-[#858383] mb-16">
            Creating the perfect resume shouldn't be stressful!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto"
        >
          {toolsData.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-xl p-6 border border-[#D9D9D9]"
              >
                <div
                  className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent
                    className={`w-6 h-6 ${tool.iconColor}`}
                  />
                </div>
                <h3 className="text-lg font-medium text-[#000000] mb-2">
                  {tool.title}
                </h3>
                <p className="text-[#858383] text-sm leading-relaxed font-normal">
                  {tool.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Tools;
