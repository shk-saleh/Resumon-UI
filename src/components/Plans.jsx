import React from "react";
import { plansData } from "../data/plansData";
import { ArrowUpRight, Check, X} from "lucide-react";

const Plans = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
          Choose our Plans
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#858383] mb-16">
          Flexible Plans for job seekers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-auto">
        {plansData.map((plan, Index) => {
          const IconComponent = plan.icon;
          return (
            <div key={Index}
              className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
              <div className="card-body">
                <span className="badge badge-base bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2 mb-3">
                  <IconComponent className={`w-4 h-4 ${plan.badgeColor}`} /> {plan.name}
                </span>

                <h2 className="text-4xl font-medium text-[#24272E] mb-1"> {plan.price}
                  <span className="text-xl font-light text-[#BCBBBB]">{plan.subText}</span>
                </h2>
                <p className="text-sm text-[#858383]">{plan.description}</p>

                <ul className="mt-8 flex flex-col gap-2 text-sm text-[#858383]">
                  {plan.features.map((feature, e) => {
                    const FeatureIcon = feature.included ? Check : X;
                    const iconColor = feature.included ? "text-[#2DC08D]" : "text-[#EB7C4A]";
                    return (
                      <li key={e}>
                        <FeatureIcon className={`size-4 me-2 inline-block ${iconColor}`} />
                        <span>{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <button className={`${plan.buttonBg} ${plan.buttonTextColor} mt-9 px-8 py-3 rounded-lg font-semibold text-sm md:text-base duration-200 transition-all ${plan.buttonHover} cursor-pointer`}>
                  {plan.buttonText}
                  <ArrowUpRight className={`w-5 h-5 inline-block ml-2 ${plan.arrowColor}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Plans;