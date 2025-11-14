import React, { useState } from 'react';
import { Clock, Zap, BarChart3 } from "lucide-react";
import Login from '../components/Login';
import Signup from '../components/Signup';
import logo from "/src/assets/images/logo.png";
import Template1 from '/src/assets/images/templates.png';

const GetStarted = () => {

  const [mode, setMode] = useState("login");

  return (
    <div className="h-[100vh] flex gap-20">
      <section className="hidden md:flex flex-col justify-between w-1/2 relative rounded-3xl bg-gradient-to-b from-(--primary-color) to-(--primary-color)/10 m-2 p-12 overflow-hidden">

        <img src= {Template1}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[100%] lg:w-[90%] object-contain pointer-events-none"
        />

        <div className="space-y-4">
          <h1 className="my-10 text-5xl font-semibold grad-text">
            Create a resume you are proud of!
          </h1>
          <div className="flex items-center gap-2">
            <Clock strokeWidth={2.5} className="w-5 h-5 shrink-0 mt-1 text-(--dark-color)" />
            <p className="text-sm text-(--dark-color)">
              Save hours with ready-to-use, professional templates
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Zap strokeWidth={2.5} className="w-5 h-5 shrink-0 mt-1 text-(--dark-color)" />
            <p className="text-sm text-(--dark-color)">
              Gain the edge with practical, expert-driven insights
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <BarChart3 strokeWidth={2.5} className="w-5 h-5 shrink-0 mt-1 text-(--dark-color)" />
            <p className="text-sm text-(--dark-color)">
              Showcase your success through powerful, eye-catching visuals
            </p>
          </div>
        </div>
        <div>
          <p className="text-base text-[#075338]">
            Explore <span className="text-[#BA3800] font-semibold">10+ templates</span>{" "}
            & Generate your resume in seconds!
          </p>
        </div>
      </section>


      <section className="flex-1 md:w-1/2 flex justify-center px-6 py-20 overflow-y-scroll">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <img src={logo} alt="Resumon" className="w-40 h-full object-contain block mx-auto" />
            <p className="text-xs text-gray-600 mt-4">Build your professional Resume in minutes</p>
          </div>

          <div className="flex justify-center space-x-2 mb-6 bg-white border border-gray-400 p-1 rounded-full">
            <button
              onClick={() => setMode("login")}
              className={`cursor-pointer flex-1 px-4 py-2 rounded-full text-sm font-normal transition ${mode === "login"
                  ? " border border-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={` cursor-pointer flex-1 px-4 py-2 rounded-full text-sm font-normal transition ${mode === "signup"
                  ? " border border-gray-300 text-gray-900 "
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Sign up
            </button>
          </div>

          {mode === "login" ? <Login /> : <Signup setMode={setMode} />}

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-sm text-gray-500 font-medium">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center cursor-pointer gap-3 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition mb-10">
            <img src="/src/assets/images/google.png" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-normal text-gray-700">
              Continue with Google
            </span>
          </button>

        </div>
      </section>
    </div>
  )
}
export default GetStarted