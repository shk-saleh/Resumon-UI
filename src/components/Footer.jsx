import React from 'react';
import { Facebook, Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-[#EFEEEE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14">
          <div className="md:col-span-2 lg:col-span-2">
            <img src="/src/assets/images/logo.png" alt="Resumon" className="w-33 rounded-lg object-contain"/>
            <p className="mt-3 mb-13 text-[#24272E]">Create, customize and downlaod in just few clicks!</p>
            <p className="mb-4 text-[#24272E]">LT 512, New York, America</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#3a3c44]">
                <Facebook size={20} strokeWidth={2.3} />
              </a>
              <a href="#" className="hover:text-[#3a3c44]">
                <Github size={20} strokeWidth={2.3}/>
              </a>
              <a href="#" className="hover:text-[#3a3c44]">
                <Linkedin size={20} strokeWidth={2.3}/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#000000] font-semibold mb-4 text-xl">Tools</h3>
            <ul className="space-y-3 text-[#24272E]">
              <li><a href="#" className="hover:text-[#3a3c44]">ATS Checker</a></li>
              <li><a href="#" className="hover:text-[#3a3c44]">AI Resume Builder</a></li>
              <li><a href="#" className="hover:text-[#3a3c44]">Smart Resume Builder</a></li>
              <li><a href="#" className="hover:text-[#3a3c44]">Upwork Proposal Gen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#000000] font-semibold mb-4 text-xl">Company</h3>
            <ul className="space-y-3 text-[#24272E]">
              <li><a href="#" className="hover:text-[#3a3c44]">About</a></li>
              <li><a href="#" className="hover:text-[#3a3c44]">Contact</a></li>
              <li><a href="#" className="hover:text-[#3a3c44]">FAQ's</a></li>
              <li><a href="#" className="hover:text-[#3a3c44]">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-[#858383] border-t border-[#7A7A7A] flex flex-col md:flex-row justify-between items-center">
          <p>Copyright reserved 2025 by resumon</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="underline">Terms & Conditions</a>
            <a href="/privacy" className="underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;