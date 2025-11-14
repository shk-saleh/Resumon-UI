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
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCards((prev) => prev + 8);
      setIsLoading(false);
    }, 1000);
  };

  const displayedCards = filteredCards.slice(0, visibleCards);
  const hasMoreCards = visibleCards < filteredCards.length;

  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center pt-40 pb-20 text-black">
        <h1 className="text-4xl mb-6 font-semibold">
          Find a<span className="text-[#2DC08D]"> Template </span>
          that suits you!
        </h1>
        <p>
          Select from our wide collection of designs, filter by profession and
          personalize them in just a few clicks.
        </p>
      </div>

      <div className="flex justify-between items-center ml-6 mr-14">
        <div className="flex gap-5">
          {["All", "Technical", "Education", "Industry"].map((label) => (
            <button
              key={label}
              onClick={() => {
                setActiveCategory(label);
                setVisibleCards(8);
              }}
              className={`border border-[#E2E2E2] text-black py-0.5 px-3 rounded-xl transition-colors ${
                activeCategory === label
                  ? "bg-[#2DC08D] text-white"
                  : "bg-[#e2e2e2cc]"
              }`}
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
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCards(8);
            }}
            className="border border-[#E2E2E2] text-black p-1 rounded-lg bg-[#E2E2E2] pl-10"
          />
        </div>
      </div>

      {/* Cards Display */}
      {displayedCards.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No templates found matching your criteria
        </div>
      ) : (
        <div className="max-w-[1222px] mx-auto mt-12">
          <div className="grid grid-cols-4 gap-6">
            {displayedCards.map((card, index) => (
              <TemplateCard key={index} {...card} />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center">
        <button className="flex items-center gap-2 p-3.5 text-white bg-[#2DC08D] rounded-lg mt-16 mb-6">
          Load More
          <Loader2 className="w-5 h-5 text-white" />{" "}
        </button>
      </div>
      
    </section>
  );
};

export default TemplatesHero;
