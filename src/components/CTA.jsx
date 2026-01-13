import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 px-4 sm:px-6 lg:px-8 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        className="text-5xl sm:text-5xl md:text-7xl font-semibold mb-2 text-[#2DC08D]"
      >
        Crack your dream job{" "}
        <span className="text-[#24272E] italic">today!</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
        className="text-[#858383] text-sm my-6"
      >
        Type your details or just give a short prompt Resumon's smart AI will craft
        a job-winning resume in seconds.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        onClick={() => navigate("/get-started")}
        className="bg-[#24272E] border text-white mt-4 px-6 py-2.5 rounded-lg font-light hover:bg-[#3a3c44] transition flex items-center justify-center gap-2 cursor-pointer mx-auto"
      >
        Generate with AI
        <ArrowUpRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default CTA;
