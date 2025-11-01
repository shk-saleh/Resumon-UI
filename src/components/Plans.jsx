import React from 'react'
import {ArrowUpRight,Check, X, Crown,Key,Swords} from 'lucide-react';

const Plans = () => {
  return (

    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
     <div className="text-center mb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
        Choose our Plans
      </h2>
      <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#858383] mb-16">
        Flexible Plans for job seekers
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto cursor-auto">
     <div className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
      <div className="card-body">
        <span className="badge badge-xs bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2">
          <Key className="w-3 h-3 text-[#2DC08D]" /> Elite
        </span>
            
        <h2 className="text-3xl font-medium text-[#24272E]">$0/ {' '}
         <span className="text-lg font-light text-[#BCBBBB]">
           month
         </span>
        </h2>
        <p className="text-xs text-[#858383]">Start genearting your resume today!</p>

        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#858383]">
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Resume Creation</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Access to 5+ Template</span>
          </li>
          <li>
            <X className="size-4 me-2 inline-block text-[#EB7C4A]"/>
            <span> No Watermark</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Multilingual</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Save as pdf</span>
          </li>
        </ul>
        <button 
          className="bg-[#EAEAEA] text-[#24272E] mt-6 px-6 py-2.5 rounded-lg font-medium duration-200 transition-all hover:bg-[#D6D6D6] cursor-pointer" >
            Start Free Trial
          <ArrowUpRight className="w-4 h-4 inline-block ml-2 text-[#2DC08D]" />
        </button>
      </div>
     </div> 

     <div className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
      <div className="card-body">
        <span className="badge badge-xs bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2">
          <Swords className="w-3 h-3 text-[#2DC08D]" /> Elite
        </span>
            
        <h2 className="text-3xl font-medium text-[#24272E]">$6.5/ {' '}
         <span className="text-lg font-light text-[#BCBBBB]">
           month
         </span>
        </h2>
        <p className="text-xs text-[#858383]">Increase your chance by 80%</p>

        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#858383]">
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Resume Creation</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Access to 5+ Template</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>No Watermark</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Multilingual</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Save as pdf</span>
          </li>
        </ul>
        <button 
          className="bg-[#2DC08D] text-[#FFFFFF] mt-6 px-6 py-2.5 rounded-lg font-medium duration-200 transition-all hover:bg-[#26A97C] cursor-pointer" >
            Buy Now
          <ArrowUpRight className="w-4 h-4 inline-block ml-2" />
        </button>
      </div>
     </div> 


     <div className="card bg-[#FDFDFD] border border-[#D9D9D9] hover:translate-y-[-8px] transition delay-150 duration-300 ease-in-out">
      <div className="card-body">
        <span className="badge badge-xs bg-[#FFFFFF] border border-[#D9D9D9] text-black flex items-center gap-2">
          <Crown className="w-3 h-3 text-[#2DC08D]" /> Elite
        </span>
            
        <h2 className="text-3xl font-medium text-[#24272E]">$12.5/ {' '}
         <span className="text-lg font-light text-[#BCBBBB]">
           month
         </span>
        </h2>
        <p className="text-xs text-[#858383]">Start genearting your resume today!</p>

        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#858383]">
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Resume Creation</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Access to 5+ Template</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>No Watermark</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Multilingual</span>
          </li>
          <li>
            <Check className="size-4 me-2 inline-block text-[#2DC08D]"/>
            <span>Save as pdf</span>
          </li>
        </ul>
        <button 
          className="bg-[#2DC08D] text-[#FFFFFF] mt-6 px-6 py-2.5 rounded-lg font-medium duration-200 transition-all hover:bg-[#26A97C] cursor-pointer" >
            Buy Now
          <ArrowUpRight className="w-4 h-4 inline-block ml-2" />
        </button>
      </div>
     </div> 
     </div>
    </section>
  )
}
export default Plans