import React from "react";
import Marquee from "react-fast-marquee";
import temp1 from "/src/assets/images/temp-1.png";
import temp2 from "/src/assets/images/temp-2.png";
import temp3 from "/src/assets/images/temp-3.png";
import temp4 from "/src/assets/images/temp-4.png";

const Templates = () => {

  const templates = [
    { id: 1, image: temp1 },
    { id: 2, image: temp2 },
    { id: 3, image: temp3 },
    { id: 4, image: temp4 },
    { id: 5, image: temp1 },
    { id: 6, image: temp2 },
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