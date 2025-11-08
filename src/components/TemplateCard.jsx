import React from "react";

const TemplateCard = ({ image, title, text, bgColor }) => {
  return (
    <div className={`rounded-lg p-4 ${bgColor} w-[280px] h-[350px]`}>
      <img
        src={image}
        alt="image"
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-3 text-xl font-semiBold text-black">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default TemplateCard;
