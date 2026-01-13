import React from "react";
import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="bg-[#F4F4F4] border border-gray-200 rounded-4xl-tl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14 py-20">
          <div className="md:col-span-2 lg:col-span-2">
            <img
              src={logo}
              alt="Resumon"
              className="w-36 rounded-lg object-contain"
            />
            <p className="mt-6 text-(--dark-color) text-sm">
              Create, customize and download in just a few clicks!
            </p>
            <p className="my-4 text-(--dark-color) text-sm">
              LT 512, New York, America
            </p>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Link to="#" className="hover:text-[#3a3c44] text-(--dark-color)">
                <Facebook size={20} strokeWidth={2.3} />
              </Link>
              <Link to="#" className="hover:text-[#3a3c44] text-(--dark-color)">
                <Github size={20} strokeWidth={2.3} />
              </Link>
              <Link to="#" className="hover:text-[#3a3c44] text-(--dark-color)">
                <Linkedin size={20} strokeWidth={2.3} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-(--dark-color) font-medium mb-4 text-lg">
              Tools
            </h3>
            <ul className="space-y-3 text-[#24272E]">
              <li>
                <Link to="#" className="hover:text-[#3a3c44] text-sm">
                  ATS Checker
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#3a3c44] text-sm">
                  AI Resume Builder
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#3a3c44] text-sm">
                  Smart Resume Builder
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#3a3c44] text-sm">
                  Upwork Proposal Gen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-(--dark-color) font-medium mb-4 text-lg">
              Company
            </h3>
            <ul className="space-y-3 text-[#24272E] ">
              <li>
                <Link to="/about" className="hover:text-[#3a3c44] text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#3a3c44] text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#3a3c44] text-sm">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#3a3c44] text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 text-[#858383] border-t border-[#d6d6d6] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Copyright reserved 2025 by Resumon</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="underline text-sm">
              Terms & Conditions
            </Link>
            <Link to="#" className="underline text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
