import React, {useState} from 'react'
import { cardData } from "../../data/cardData";
import TemplateCard from '../TemplateCard';
import { Search, Loader2 } from "lucide-react";


const Template = () => {

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
    <div>
        <div>
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
    </div>
  )
}

export default Template