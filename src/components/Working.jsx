import { CircleDot, ArrowUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Working = () => {
    const navigate = useNavigate();
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
                        How it works?
                    </h2>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#858383] mb-16">
                        Generate your next level resume in just seconds!
                    </p>
                </div>
        
                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 bg-[#D9D9D9] text-[#000000] rounded-full flex items-center justify-center font-bold text-lg">
                                1
                            </span>
                            <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A]">
                                Choose Your Mode.
                            </h3>
                        </div>

                        <p className="text-[#000000] text-justify text-sm sm:text-base font-normal mb-6">
                            Start your journey by selecting how you want to create your resume:
                        </p>

                        <div className="space-y-4 mb-6 mr-11 text-justify">
                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 mt-1 text-[#2DC08D]" />
                                <div>
                                    <span className="font-semibold text-[#2DC08D]">AI Mode:</span>
                                    <span className="text-[#858383] text-sm"> Simply describe yourself, your experience, and your skills in a short prompt. ResumeOn's AI will handle the rest.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 mt-1 text-[#2DC08D]" />
                                <div>
                                    <span className="font-semibold text-[#2DC08D]">Manual Mode:</span>
                                    <span className="text-[#858383] text-sm"> Prefer control? Fill out step-by-step forms to craft your resume manually.</span>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => navigate("/GetStarted")} 
                            className="bg-[#2DC08D] border border-[#1A9369] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#26A97C] transition flex items-center gap-2 cursor-pointer">
                            Try Out Now
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    <img src="/src/assets/images/screen1.png" alt="Choose Mode Interface"
                        className="w-full h-auto order-2 md:order-1"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <img
                        src="/src/assets/images/screen2.png" alt="Template Selection"
                        className="w-full h-auto order-2 md:order-1"
                    />
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-10 h-10 bg-[#D9D9D9] text-[#000000] rounded-full flex items-center justify-center font-bold text-lg">
                                2
                            </span>
                            <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A]">
                                Pick a Template.
                            </h3>
                        </div>

                        <div className="space-y-4 mb-6 text-justify">
                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 text-[#EB904A]" />
                                <p className="text-[#858383] text-sm">
                                    Browse from a collection of modern, professional templates.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 text-[#EB904A]" />
                                <p className="text-[#858383] text-sm">
                                    Each template is ATS-friendly and customizable, ensuring your resume stands out to recruiters and systems alike.
                                </p>
                            </div>
                        </div>


                        <button onClick={() => navigate("/GetStarted")} 
                            className="bg-[#EB904A] border border-[#CC6A24] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#d67f3d] transition flex items-center gap-2 cursor-pointer">
                            Try Out Now
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-10 h-10 bg-[#D9D9D9] text-[#000000] rounded-full flex items-center justify-center font-bold text-lg">
                                3
                            </span>
                            <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A]">
                                Add Your Information.
                            </h3>
                        </div>


                        <div className="space-y-4 mb-6 mr-11 text-justify">
                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 text-[#2DC08D]" />
                                <p className="text-[#858383] text-sm">
                                    If you selected AI mode, the system will automatically generate your resume content uisng  your prompt.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 text-[#2DC08D]" />
                                <p className="text-[#858383] text-sm">
                                    In Manual Mode, you can input your education, experience, projects, and skills uisng simple guided forms.
                                </p>
                            </div>
                        </div>

                        <button onClick={() => navigate("/GetStarted")} 
                            className="bg-[#2DC08D] border border-[#1A9369] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#26A97C] transition flex items-center gap-2 cursor-pointer">
                            Try Out Now
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    <img src="/src/assets/images/screen3.png" alt="Choose Mode Interface"
                        className="w-full h-auto order-2 md:order-1"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <img
                        src="/src/assets/images/screen4.png" alt="Template Selection"
                        className="w-full h-auto order-2 md:order-1"
                    />
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-10 h-10 bg-[#D9D9D9] text-[#000000] rounded-full flex items-center justify-center font-bold text-lg">
                                4
                            </span>
                            <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A]">
                                Share & Download.
                            </h3>
                        </div>

                        <p className="text-[#000000] text-justify text-sm sm:text-base font-normal mb-6">
                            Once your resume is ready:
                        </p>

                        <div className="space-y-4 mb-6 text-justify">
                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 text-[#EB904A]" />
                                <p className="text-[#858383] text-sm">
                                    Instantly check your ATS compatibility score.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 text-[#EB904A]" />
                                <p className="text-[#858383] text-sm">
                                    Download it as a PDF or Word Document.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CircleDot className="w-4 h-4 flex-shrink-0 text-[#EB904A]" />
                                <p className="text-[#858383] text-sm">
                                    Print or share it directly with recruiters.
                                </p>
                            </div>
                        </div>

                        <button onClick={() => navigate("/GetStarted")} 
                            className="bg-[#EB904A] border border-[#CC6A24] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#d67f3d] transition flex items-center gap-2 cursor-pointer">
                            Try Out Now
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Working