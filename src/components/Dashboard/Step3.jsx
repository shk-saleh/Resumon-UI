import React from "react";
import loader from "/src/assets/images/Loader2.gif";

const Step3 = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-25">
      <h3 className="text-xl md:text-2xl text-(--dark-color) text-center font-medium mb-4">
        Creating environment for you!
      </h3>
      <img src={loader} alt="Loading..." className="w-40 h-40 md:w-24 md:h-24 mt-4 bg-none" />
    </div>
  );
};
export default Step3;