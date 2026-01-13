import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import imgHero from "/src/assets/images/home-mockup.png";
import { useAuthStore } from "../store/useAuthStore";
import WaitlistPopup from "./Dashboard/WaitlistPopup";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('success'); // 'success' or 'already_added'
  const { waitlist, loading, error } = useAuthStore();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await waitlist({ email });
    if (res.success) {
      console.log("Email added!");
      setPopupType('success');
      setShowPopup(true);
      setEmail('');
    }
    else if (res.isAlreadyAdded) {
      console.log("Email already in waitlist");
      setPopupType('already_added');
      setShowPopup(true);
      setEmail('');
    }
    else {
      console.log("Something went wrong!");
    }
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 lg:pt-38 pb-0 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="text-center max-w-4xl mx-auto">

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-(--dark-color) leading-tight mb-5"
            >
              Build Your{" "}
              <span
                className="text-[#2DC08D] underline font-medium"
                style={{ fontFamily: "var(--font-kaushan)" }}
              >
                Perfect Resume
              </span>
              <br />
              Smarter, Faster, with AI.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-(--dark-color) text-mdd mb-6 font-normal"
            >
              Professional resume made easy, create or upgrade with realtime smart
              suggestions
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input 
                  type="email" 
                  value={email} 
                  onChange={handleChange} 
                  placeholder="Enter your email.." 
                  required 
                  className="w-70 p-3 rounded-xl bg-gray-200 focus:bg-gray-200 text-gray-800 text-sm outline-none focus:ring-0" 
                />
                <button 
                  type="submit" 
                  className="bg-[#2DC08D] border border-[#1A9369] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#26A97C] cursor-pointer text-sm"
                >
                  {loading ? (
                    <span className='flex items-center gap-2'>
                      <LoaderCircle className='animate-spin w-5 h-5 justify-center items-center' /> 
                      Processing...
                    </span>
                  ) : "Join Waitlist"}
                </button>
              </form>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={item}
              className="mt-12 flex justify-center"
            >
              <motion.img
                src={imgHero}
                alt="Resume builder preview"
                className="w-auto max-w-full h-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              />
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* Waitlist Popup */}
      <WaitlistPopup isOpen={showPopup} onClose={closePopup} type={popupType} />
    </>
  );
};

export default Hero;