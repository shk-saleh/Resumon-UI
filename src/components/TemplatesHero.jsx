import React, { useState } from "react";
import TemplateCard from "./TemplateCard";
import { cardData } from "../data/cardData";
import { Search, Loader2 } from "lucide-react";

const TemplatesHero = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const filteredCards = cardData.filter((card) => {
    const matchesCategory =
      activeCategory === "All" ||
      card.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
      card.text.toLowerCase().includes(activeCategory.toLowerCase());

    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.text.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + 8);
      setIsLoading(false);
    }, 1000);
  };

  const displayedCards = filteredCards.slice(0, visibleCards);
  const hasMoreCards = visibleCards < filteredCards.length;

  return (
    <section className="max-w-6xl mx-auto">
      <div className="w-full flex flex-col justify-center items-center pt-40 pb-20 text-black text-center">
        <h1 className="text-4xl mb-6 font-semibold">
          Find a<span className="text-[#2DC08D]"> Template </span> that suits you!
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl">
          Select from our wide collection of designs, filter by profession and personalize them in just a few clicks.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 w-full px-4 sm:px-6">
        <div className="flex flex-wrap gap-2 sm:gap-5 rounded-3xl">
          {["All", "Technical", "Education", "Industry"].map((label) => (
            <button key={label}
              onClick={() => {
                setActiveCategory(label);
                setVisibleCards(8);
              }}
              className={`border border-[#E2E2E2] text-black py-1 px-3 rounded-3xl transition-colors text-sm cursor-pointer ${activeCategory === label
                  ? "bg-[#2DC08D] text-white"
                  : "bg-gray-100"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text" placeholder="Search for template"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCards(8);
            }}
            className="w-full sm:w-full border border-[#E2E2E2] text-black py-2 pl-10 pr-3 rounded-lg bg-gray-100 text-sm outline-none"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-4">
        {displayedCards.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No templates found matching your criteria
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayedCards.map((card, index) => (
              <TemplateCard key={index} {...card} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center mb-10 mt-14">
        <button className="flex items-center gap-2 p-3.5 text-white bg-[#2DC08D] rounded-lg">
          Load More
          <Loader2 className="w-5 h-5 text-white" />{" "}
        </button>
      </div>

    </section>
  );
};
export default TemplatesHero;