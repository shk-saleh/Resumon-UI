import React from 'react'
import { Bot,CircleGauge,StretchHorizontal,ReceiptText,Lock,Sparkles } from 'lucide-react';

const Tools = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto text-justify">
                <div className="text-center mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
                        Why our tools?
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-[#858383] mb-16">
                        Creating the perfect resume shouldn't be stressful!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                    <div className="rounded-xl p-6 border border-[#D9D9D9]">
                        <div className="w-12 h-12 bg-[#EB7C4A]/30 rounded-lg flex items-center justify-center mb-4">
                            <Bot className="w-6 h-6 text-[#EB7C4A]" />
                        </div>
                        <h3 className="text-lg text-[#000000] mb-2 font-medium">AI That Understands</h3>
                        <p className="text-[#858383] text-sm leading-relaxed font-normal">
                            Just write your prompt or select your favourite template and your resume ready boom!
                        </p>
                    </div>

                    <div className="rounded-xl p-6 border border-[#D9D9D9]">
                        <div className="w-12 h-12 bg-[#2D60C0]/30 rounded-lg flex items-center justify-center mb-4">
                            <StretchHorizontal className="w-6 h-6 text-[#2D60C0]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#000000] mb-2">Dual Modes</h3>
                        <p className="text-[#858383] text-sm leading-relaxed font-normal">
                            Whether you prefer AI auto-generation or manual creation, Resumon gives you the freedom to build your resume your way, on your terms.
                        </p>
                    </div>

                    <div className="rounded-xl p-6 border border-[#D9D9D9]">
                        <div className="w-12 h-12 bg-[#4AEB4F]/30 rounded-lg flex items-center justify-center mb-4">
                            <CircleGauge  className="w-6 h-6 text-[#4AEB4F]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#000000] mb-2">Built-In ATS</h3>
                        <p className="text-[#858383] text-sm leading-relaxed font-normal">
                            We scan your resume for missing keywords, structure issues, and readability giving you an ATS Score and real-time improvement tips.
                        </p>
                    </div>

                    <div className="rounded-xl p-6 border border-[#D9D9D9]">
                        <div className="w-12 h-12 bg-[#C84AEB]/30 rounded-lg flex items-center justify-center mb-4">
                            <ReceiptText className="w-6 h-6 text-[#C84AEB]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#000000] mb-2">Modern Templates</h3>
                        <p className="text-[#858383] text-sm leading-relaxed font-normal">
                            Choose from elegant, recruiter-approved templates built with design psychology to make your first impression stand out instantly.
                        </p>
                    </div>

                    <div className="rounded-xl p-6 border border-[#D9D9D9]">
                        <div className="w-12 h-12 bg-[#EB4A55]/30 rounded-lg flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6 text-[#EB4A55]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#000000] mb-2">Easy Access</h3>
                        <p className="text-[#858383] text-sm leading-relaxed font-normal">
                            Save, edit, and access your resumes anytime across devices. Resumon keeps your data safe, synced, and exportable.
                        </p>
                    </div>

                    <div className="rounded-xl p-6 border border-[#D9D9D9]">
                        <div className="w-12 h-12 bg-[#4ADEEB]/30 rounded-lg flex items-center justify-center mb-4">
                            <Sparkles className="w-6 h-6 text-[#4ADEEB]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#000000] mb-2">Smart Suggestions</h3>
                        <p className="text-[#858383] text-sm leading-relaxed font-normal">
                            Get personalized tips for skill phrasing, achievements, and job alignment powered by AI insights.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Tools