import React from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is Resumon?",
    answer:
      "Resumon is an online resume builder that helps you create a professional looking resume in minutes. Just fill in your details, choose a template, and download your resume instantly.",
    border: true,
  },
  {
    question: "Do I need to create an account to use Resumon?",
    answer:
      "You can start building your resume without an account, but creating one allows you to save, edit, and access your resumes anytime.",
    border: true,
  },
  {
    question: "Can I download my Resume for free?",
    answer:
      "Yes, you can download your resume for free in a professional format without any hidden charges.",
    border: true,
  },
  {
    question: "Is my data safe on Resumon?",
    answer:
      "Yes, your data is completely safe. Resumon securely stores your information and never shares it with third parties.",
    border: false,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const FAQ = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <motion.div variants={itemAnim} className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[14px] text-[#858383] mb-16">
          Here whatever in your mind get answered?
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="rounded-2xl bg-[#FAFAFA] max-w-6xl mx-auto border border-[#F1F0F0] p-4"
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemAnim}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            tabIndex={0}
            className={`collapse collapse-arrow rounded-none ${
              item.border && "border-b border-[#D9D9D9]"
            }`}
          >
            <div className="collapse-title font-light text-[#000000] text-lg">
              {item.question}
            </div>
            <div className="collapse-content text-sm text-[#858383]">
              {item.answer}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQ;
