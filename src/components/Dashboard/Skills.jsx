import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Plus, X } from "lucide-react";
import { useResumeStore } from "../../store/useResumeStore";

const Skills = () => {

  const { activeResume, setSkills, setActiveTab } = useResumeStore();
  const skills = activeResume?.skills || [];

  const [inputSkill, setInputSkill] = useState("");
  const [error, setError] = useState("");

  const handleAddSkill = (skillToAdd = inputSkill.trim()) => {
    if (!skillToAdd) {
      setError("Please enter a skill");
      return;
    }

    const formatted = skillToAdd.charAt(0).toUpperCase() + skillToAdd.slice(1).toLowerCase();

    if (skills.some(s => s.toLowerCase() === formatted.toLowerCase())) {
      setError("This skill is already added");
      return;
    }

    setSkills([...skills, formatted]);
    setInputSkill("");
    setError("");
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleNext = () => {
    if (skills.length === 0) {
      setError("Please add at least one skill");
      return;
    }
    setError("");
    setActiveTab("Certifications");
  };

  // Popular skills suggestions
  const suggestedSkills = [
    "JavaScript", "React", "Node.js", "TypeScript", "Python", "Tailwind CSS",
    "MongoDB", "Git", "Docker", "AWS", "Next.js", "GraphQL", "Figma", "UI/UX"
  ];

  return (
    <div className="text-gray-600">
      {/* Skill Input + Tags */}
      <div className="mb-6">
        <div className="flex items-stretch gap-3">
          <div className="flex-1 bg-white border border-gray-300 rounded-xl px-2 py-2 flex flex-wrap items-center gap-3 min-h-[50px]">
            {skills.length === 0 && (
              <span className="text-gray-400 text-sm">Start typing to add skills...</span>
            )}
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl text-sm font-medium"
              >
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="hover:bg-green-200 rounded-xl p-0.5 transition"
                >
                  <X size={16} />
                </button>
              </span>
            ))}

            <input
              type="text"
              value={inputSkill}
              onChange={(e) => setInputSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddSkill();
                }
              }}
              placeholder={skills.length === 0 ? "e.g. React, Python, Leadership" : ""}
              className="flex-1 outline-none text-gray-700 min-w-[200px]"
            />
          </div>

          <button
            onClick={handleAddSkill}
            className="px-4 py-2 bg-[#2DC08D] cursor-pointer text-white rounded-xl hover:bg-[#25a877] transition flex items-center gap-2 font-medium shadow-sm"
          >
            <Plus size={20} />
            Add
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2 ml-1">{error}</p>
        )}
      </div>

      {/* Suggested Skills */}
      <div className="mb-12">
        <h3 className="text-sm font-medium text-[#2DC08D] mb-4">Suggested Skills</h3>
        <div className="flex flex-wrap gap-3">
          {suggestedSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => handleAddSkill(skill)}
              disabled={skills.some(s => s.toLowerCase() === skill.toLowerCase())}
              className={`px-5 py-2.5 rounded-full text-xs font-normal cursor-pointer transition ${
                skills.some(s => s.toLowerCase() === skill.toLowerCase())
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm border border-gray-300"
              }`}
            >
              {skill}
              {skills.some(s => s.toLowerCase() === skill.toLowerCase()) && " ✓"}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <button
          onClick={() => setActiveTab("Education")}
          className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center gap-2 font-medium transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={handleNext}
          className="px-8 py-3 bg-[#2DC08D] text-white rounded-xl hover:bg-[#25a877] flex items-center gap-2 font-medium transition shadow-md"
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Skills;