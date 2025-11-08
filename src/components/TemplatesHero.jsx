import TemplateCard from "./TemplateCard";
import { cardData } from "../data/cardData";
import { Search } from "lucide-react";

const TemplatesHero = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center py-40 text-black">
        <h1 className="text-4xl mb-6 font-semibold">
          Find a<span className="text-[#2DC08D]"> Template </span>
          that suits you!
        </h1>
        <p>
          Select from our wide collection of designs, filter by profession and
          personalize them in just a few clicks.
        </p>
      </div>

      <div className="flex justify-between items-center ml-14 mr-14">
        <div className="flex gap-3">
          {["All", "Technical", "Education", "Industry"].map((label) => (
            <button
              key={label}
              className="border border-[#E2E2E2] text-black p-1 rounded-lg bg-[#E2E2E2]"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right Searchbar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for template"
            className="border border-[#E2E2E2] text-black p-1 rounded-lg bg-[#E2E2E2] pl-10"
          />
        </div>
      </div>

      {/* Cards Row 1 */}
      <div className="w-[1222px] h-[402px] flex justify-between mx-auto mt-12">
        {cardData.slice(0, 4).map((card, index) => (
          <TemplateCard key={index} {...card} />
        ))}
      </div>

      {/* Cards Row 2 */}
      <div className="w-[1222px] h-[402px] flex justify-between mx-auto mt-12">
        {cardData.slice(4, 8).map((card, index) => (
          <TemplateCard key={index} {...card} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="p-2 text-white bg-[#1A9369] rounded-md mt-40">
          Load More
        </button>
      </div>
    </section>
  );
};
export default TemplatesHero;
