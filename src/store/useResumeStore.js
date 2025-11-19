import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

export const useResumeStore = create(
  persist(
    (set, get) => ({

      method: null,          // custom or ai
      template: null,        // selected template ID
      currentStep: 1,        // 1 to 5 flow control
      activeTab: "Basic Info",


      setMethod: (m) => set({ method: m }),
      setTemplate: (t) => set({ template: t }),
      setCurrentStep: (step) => set({ currentStep: step }),
      setActiveTab: (tab) => set({ activeTab: tab }),



      // Profile Section
      profile: 
      {
        fullName: "", jobTitle: "", phone: "", email: "", address: "", website: "", linkedin: "",
      },

      setProfileField: (field, value) =>
        set((s) => ({
          profile: { ...s.profile, [field]: value },
        })),



      // Experinece Section
      experiences: [],
      
      addExperience: () => {
        const newExp = {
          id: uuid(), jobTitle: "", company: "", type: "", location: "", start: "", end: "",
        };
        set((s) => ({ experiences: [...s.experiences, newExp] }));
      },

      updateExperience: (id, updates) =>
        set((s) => ({
          experiences: s.experiences.map((e) => e.id === id ? { ...e, ...updates } : e ),
        })),

      removeExperience: (id) =>
        set((s) => ({ experiences: s.experiences.filter((e) => e.id !== id), })),



      // Education Section
      education: [],

      addEducation: () => {
        const newEdu = { id: uuid(), degree: "", school: "", grade: "", start: "", end: "", };
        set((s) => ({ education: [...s.education, newEdu] }));
      },

      updateEducation: (id, updates) =>
        set((s) => ({
          education: s.education.map((ed) => ed.id === id ? { ...ed, ...updates } : ed ),
        })),

      removeEducation: (id) =>
        set((s) => ({ education: s.education.filter((ed) => ed.id !== id), })),



      // Skills Section
      skills: [],

      addSkill: (skill) =>
        set((s) => ({ skills: [...s.skills, skill] })),

      removeSkill: (skill) =>
        set((s) => ({
          skills: s.skills.filter((s2) => s2 !== skill),
        })),



      // Certifications Section
      certifications: [],

      addCertification: () => {
        const cert = { id: uuid(), title: "", organization: "", issueDate: "", link: "", };
        set((s) => ({ certifications: [...s.certifications, cert] }));
      },

      updateCertification: (id, updates) =>
        set((s) => ({
          certifications: s.certifications.map((c) => c.id === id ? { ...c, ...updates } : c ),
        })),

      removeCertification: (id) =>
        set((s) => ({ certifications: s.certifications.filter((c) => c.id !== id), })),


      
      // Reset everything (e.g., when users go to resume builder)
      resetResumeBuilder: () =>
        set({
          method: null,
          template: null,
          currentStep: 1,
          profile: {
            fullName: "", jobTitle: "", phone: "", email: "", address: "", website: "", linkedin: "",
          },
          experiences: [],
          education: [],
          skills: [],
          certifications: [],
        }),
    }),

    {
      name: "resume-store",
    }
  )
);