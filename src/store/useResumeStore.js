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
      hasUnsavedChanges: false, // Track if form has unsaved changes


      setMethod: (m) => set({ method: m }),
      setTemplate: (t) => set({ template: t }),
      setCurrentStep: (step) => set({ currentStep: step }),
      setActiveTab: (tab) => set({ activeTab: tab }),
      setHasUnsavedChanges: (value) => set({ hasUnsavedChanges: value }),



      // Profile Section
      profile: 
      {
        fullName: "", jobTitle: "", phone: "", email: "", address: "", website: "", linkedin: "", summary: "",
      },

      setProfileField: (field, value) =>
        set((s) => ({
          profile: { ...s.profile, [field]: value },
        })),



      // Experinece Section
      experiences: [],
      
      addExperience: () => {
        const newExp = {
          id: uuid(), jobTitle: "", company: "", type: "", location: "", start: "", end: "", description: "",
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
        const newEdu = { id: uuid(), degree: "", school: "", grade: "", startDate: "", endDate: "", description: "", currentlyEnrolled: false };
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


      
      // Helper to get formatted resume data for templates
      getFormattedResumeData: () => {
        const state = get();
        return {
          personalInfo: {
            fullName: state.profile.fullName || "",
            title: state.profile.jobTitle || "",
            phone: state.profile.phone || "",
            email: state.profile.email || "",
            location: state.profile.address || "",
            website: state.profile.website || "",
            linkedin: state.profile.linkedin || ""
          },
          aboutMe: {
            title: "ABOUT ME",
            description: state.profile.summary || ""
          },
          education: {
            title: "EDUCATION",
            items: (state.education || []).map(edu => ({
              institution: edu.school || "",
              duration: `${edu.startDate || ""} - ${edu.endDate || ""}`,
              position: edu.degree || "",
              description: edu.description || "",
              grade: edu.grade || ""
            }))
          },
          workExperience: {
            title: "WORK EXPERIENCE",
            items: (state.experiences || []).map(exp => ({
              company: exp.company || "",
              duration: `${exp.start || ""} - ${exp.end || ""}`,
              position: exp.jobTitle || "",
              description: exp.description || "",
              type: exp.type || ""
            }))
          },
          skills: {
            title: "SKILLS",
            items: state.skills || []
          },
          certifications: {
            title: "CERTIFICATIONS",
            items: (state.certifications || []).map(cert => ({
              title: cert.title || "",
              organization: cert.organization || "",
              issueDate: cert.issueDate || "",
              link: cert.link || ""
            }))
          }
        };
      },

      // Reset everything (e.g., when users go to resume builder)
      resetResumeBuilder: () =>
        set({
          method: null,
          template: null,
          currentStep: 1,
          activeTab: "Basic Info",
          profile: {
            fullName: "", jobTitle: "", phone: "", email: "", address: "", website: "", linkedin: "", summary: "",
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