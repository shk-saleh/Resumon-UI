import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CustomPlanSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-10 px-6">
      <div className="relative max-w-5xl mx-auto bg-gradient-to-r from-[#2DC08D] to-[#075338] rounded-3xl text-center py-16 px-6 overflow-hidden flex justify-center">

        <img src="/src/assets/images/Templates.png"
          className="absolute bottom-0 w-[90%] sm:w-[75%] md:w-[65%] object-contain pointer-events-none"
        />

        <div className="relative">
          <h2 className="text-white text-4xl font-semibold mb-2">
            Need a Custom Plan?
          </h2>
          <p className="text-white/90 text-lg mb-6">
            You can talk to our team for your customized plan according to your needs.
          </p>

          <button onClick={() => navigate("/Support")}
            className="bg-white text-gray-800 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-50 hover:shadow-lg transition inline-flex items-center gap-2 cursor-pointer">
            Talk to Support
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}