import React from 'react'
import { Check, X } from "lucide-react";
import { cmpData } from "../data/cmpData";

export const CheckIcon = (
  <div className="w-5 h-5 rounded-full bg-[#2DC08D] flex items-center justify-center">
    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
  </div>
);

export const XIcon = (
  <div className="w-5 h-5 rounded-full bg-[#EB7C4A] flex items-center justify-center">
    <X className="w-3 h-3 text-white" strokeWidth={2.5} />
  </div>
);

const Comparison = () => {
  return (
    <section className="w-full max-w-6xl mx-auto pt-15 pb-20 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-gray-800">
        Compare Plans & Features
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b border-gray-300 font-medium text-(--dark-color) text-lg">
              <th className="py-4 text-left font-medium text-(--dark-color) text-lg">Features</th>
              <th className="py-4 text-center font-medium text-(--dark-color) text-lg">Free</th>
              <th className="py-4 text-center font-medium text-(--dark-color) text-lg">Pro</th>
              <th className="py-4 text-center font-medium text-(--dark-color) text-lg">Elite</th>
            </tr>
          </thead>

          <tbody>
            {cmpData.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 bg-white-50" >
                <td className="py-4 text-[#333333] text-left text-sm"> {item.name} </td>
               <td className="py-4 px-4 ">
                  <div className="flex justify-center"> {item.free ? CheckIcon : XIcon} </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center"> {item.pro ? CheckIcon : XIcon} </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center"> {item.elite ? CheckIcon : XIcon} </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Comparison