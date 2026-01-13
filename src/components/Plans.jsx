import { motion } from "framer-motion";
import PlansCard from "./PlansCard";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Plans = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white"
    >
      <motion.div variants={fadeUp} className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
          Choose our Plans
        </h2>
        <p className="text-[14px] text-[#858383] mb-16">
          Flexible Plans for job seekers
        </p>
      </motion.div>

      <PlansCard showToggle={false} />
    </motion.section>
  );
};
export default Plans;
