import { CircleDot, ArrowUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { steps } from "../data/working";

const Working = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 lg:px-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl text-[#000000] mb-4">How it works?</h2>
          <p className="text-[14px] md:text-[16px] text-[#858383] mb-16">
            Generate your next level resume in just seconds!
          </p>
        </div>

        {steps.map((step) => (
          <div key={step.id} className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className={`${step.id % 2 === 0 && "order-1 md:order-2"}`}>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-10 h-10 bg-[#D9D9D9] text-[#000000] rounded-full flex items-center justify-center font-bold text-lg">{step.id}</span>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A]">{step.title}</h3>
              </div>

              {step.description && (
                <p className="text-[#000000] text-justify text-sm sm:text-base font-normal mb-6">
                  {step.description}
                </p>
              )}

              <div className="space-y-4 mb-6 text-justify">
                {step.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CircleDot className={`w-4 h-4 flex-shrink-0 mt-1 ${pt.color}`} />
                    <p className="text-[#858383] text-sm">
                       {pt.type && <span className={`font-semibold ${pt.color}`}>{pt.type}:</span>} {pt.text}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/get-started")}
                className={`text-white px-6 py-2.5 rounded-lg font-medium transition flex items-center gap-2 cursor-pointer ${step.button.bg} ${step.button.border} ${step.button.hoverBg}`}>
                Try Out Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <img src={step.image} alt={step.title} className="w-full h-auto order-2 md:order-1"/>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Working;