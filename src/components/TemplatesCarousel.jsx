import React, { useState } from 'react';
import {ChevronLeft, ChevronRight } from 'lucide-react';


const TemplatesCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const templates = [
        { id: 1, image: '/src/assets/images/temp-1.png' },
        { id: 2, image: '/src/assets/images/temp-2.png' },
        { id: 3, image: '/src/assets/images/temp-3.png' },
        { id: 4, image: '/src/assets/images/temp-4.png' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === templates.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? templates.length - 1 : prev - 1));
    };
    return (
        <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-2xl text-(--dark-color) text-center mb-10">
                    Explore Popular Templates!
                </h2>

                <div className="relative">
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2.5 shadow-md hover:shadow-lg border border-gray-200 cursor-pointer"
                    >
                        <ChevronLeft strokeWidth={2.5} className="w-5 h-5 text-white" />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {templates.map((template, index) => (
                                <div key={index} className="min-w-full flex px-1">
                                    {templates.map((t) => (
                                        <div key={t.id} className="w-1/4 flex-shrink-0">
                                            <img
                                                src={t.image}
                                                alt={`Template ${t.id}`}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2.5 shadow-md hover:shadow-lg border border-gray-200 cursor-pointer"
                    >
                        <ChevronRight strokeWidth={2.5} className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default TemplatesCarousel