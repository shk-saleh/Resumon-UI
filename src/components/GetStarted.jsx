import React, { useState } from 'react';
import { Clock, Zap, BarChart3} from "lucide-react";
import Login from "./Login";
import Signup from "./Signup";

const GetStarted = () => {
    const [mode, setMode] = useState("login");
    
  return (
    <div className="min-h-screen bg-white flex">
      <section className="hidden md:flex flex-col justify-between w-1/2 rounded-tr-3xl rounded-br-3xl p-12">
        <div className="space-y-4">
          <h1 className="mt-5 mb-13 text-6xl font-bold text-[#1A9B7F]">
            Create a resume you are proud of!
          </h1>
          <div className="flex items-start space-x-4">
            <Clock strokeWidth={2.5} className="w-6 h-6 shrink-0 mt-1" />
            <p className="font-550 text-lg text-[#000000]">
              Save hours with ready-to-use, professional templates
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <Zap strokeWidth={2.5} className="w-6 h-6  shrink-0 mt-1" />
            <p className="font-550 text-lg text-[#000000]">
              Gain the edge with practical, expert-driven insights
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <BarChart3 strokeWidth={2.5} className="w-6 h-6 shrink-0 mt-1" />
            <p className="font-550 text-lg text-[#000000]">
              Showcase your success through powerful, eye-catching visuals
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg opacity-90 text-[#075338]">
            Explore <span className="text-[#BA3800] font-semibold">10+ templates</span>{" "}
            & Generate your resume in seconds!
          </p>
        </div>
      </section>

      <section className="flex-1 flex justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-5">
            <img src="/src/assets/images/logo.png" alt="Resumon" className="w-45 h-full object-contain block mx-auto" />
            <p className="text-sm text-gray-600 mt-4">Build your professional Resume in minutes</p>
          </div>

           <div className="flex justify-center space-x-2 mb-8 bg-white border border-gray-400 p-1 rounded-full">
            <button
              onClick={() => setMode("login")}
              className={`cursor-pointer flex-1 px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                mode === "login"
                  ? " border border-gray-300 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={` cursor-pointer flex-1 px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                mode === "signup"
                  ? " border border-gray-300 text-gray-900 "
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Sign up
            </button>
          </div>

          {mode === "login" ? <Login /> : <Signup setMode={setMode}/>}

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-sm text-gray-500 font-medium">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center cursor-pointer gap-3 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition">
            <img src="/src/assets/images/google.png" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-semibold text-gray-700">
              Continue with Google
            </span>
          </button>

        </div>
      </section>
    </div>
  )
}
export default GetStarted