import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { toast, Toaster } from 'react-hot-toast'

const ContactForm = () =>{

  const [formData, setFormData] = useState({fullName: '', email: '', phone: '',message: ''});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {fullName, email, phone, message} = formData;
    try {

    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <section className="pt-40 pb-10 px-6 lg:px-24 bg-white">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Let's Make <span className="text-[#2DC08D]">Problems</span> Nervous.
          </h2>
          <p className="text-[#4B5563] leading-relaxed">
            Tell us what keeps you stuck - we'll turn it into your next competitive advantage.
          </p>

          <div className="w-80 h-72 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            <img src="src/assets/images/support.png" className="w-full h-full object-contain" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">
              Full name*
            </label>
            <input
              type="text" id="fullName" name="fullName" placeholder="Enter your name"
              className="w-full border-b text-(--gray-color) border-gray-300 focus:border-[#1A9B7F] focus:outline-none p-2"
              required value={formData.fullName} onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                Email*
              </label>
              <input
                type="email" id="email" name="email" placeholder="example@email.com"
                className="w-full border-b text-(--gray-color) border-gray-300 focus:border-[#1A9B7F] focus:outline-none p-2"
                required value={formData.email} onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">
                Phone number
              </label>
              <input
                type="tel" id="phone" name="phone" placeholder="+00 000 0000000" required 
                className="w-full border-b text-(--gray-color) border-gray-300 focus:border-[#1A9B7F] focus:outline-none p-2"
                value={formData.phone} onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">
              Details*
            </label>
            <textarea
              placeholder="Write your message..." rows="3" name="message" id="message"
              className="w-full border-b text-(--gray-color) border-gray-300 focus:border-[#1A9B7F] focus:outline-none p-2 resize-none"
              required value={formData.message} onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-[#2DC08D] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#25a77a] transition"
          >
            Submit <ArrowRight size={16} />
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
}
export default ContactForm;