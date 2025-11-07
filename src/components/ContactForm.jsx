import { ArrowRight } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="pt-35 pb-10 px-6 lg:px-24 bg-white">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ===== LEFT SIDE (Text + Illustration Placeholder) ===== */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Make <span className="text-[#2DC08D]">Problems</span> Nervous.
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Tell us what keeps you stuck — we’ll turn it into your next competitive advantage.
          </p>

          {/* Image Placeholder */}
          <div className="w-56 h-56 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            {/* You can replace this div with an <img src="your-image.png" /> */}
            <img src="src/assets/images/Support.png" className="w-56 h-56 object-contain" />
          </div>
        </div>

        {/* ===== RIGHT SIDE (Contact Form) ===== */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Full name*
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b text-gray-400 border-gray-300 focus:border-green-600 focus:outline-none p-2"
              required
            />
          </div>

          {/* Email & Phone side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email*
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border-b text-gray-400 border-gray-300 focus:border-green-600 focus:outline-none p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="+00 000 0000000"
                className="w-full border-b text-gray-400 border-gray-300 focus:border-green-600 focus:outline-none p-2"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Details*
            </label>
            <textarea
              placeholder="Write your message..."
              rows="3"
              className="w-full border-b text-gray-400 border-gray-300 focus:border-green-600 focus:outline-none p-2 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#2DC08D] text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
