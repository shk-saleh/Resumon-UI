import React from "react";
import Marquee from "react-fast-marquee";

const Templates = () => {

  const templates = [
    { id: 1, image: "/src/assets/images/temp-1.png" },
    { id: 2, image: "/src/assets/images/temp-2.png" },
    { id: 3, image: "/src/assets/images/temp-3.png" },
    { id: 4, image: "/src/assets/images/temp-4.png" },
    { id: 5, image: "/src/assets/images/temp-1.png" },
    { id: 6, image: "/src/assets/images/temp-2.png" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl text-(--dark-color) mb-10">
          Explore Popular Templates!
        </h2>

        <Marquee speed={45} loop={0} className="overflow-y-hidden">
          {templates.map((t) => (
            <div key={t.id} className="mx-2 w-64 flex-shrink-0 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102 cursor-pointer">
              <img
                src={t.image}
                alt={`Template ${t.id}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Templates;
