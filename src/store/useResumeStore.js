// stores/useResumeStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import api from "../axios/axios";
import { useAuthStore } from "./useAuthStore";


const API_BASE = "/resumes";

export const useResumeStore = create(
  persist(
    (set, get) => ({
      // UI State
      currentStep: 1,
      activeTab: "Basic Info",
      selectedTemplate: null,
      template: null,
      method: null, // 'ai' or 'smart'
      hasUnsavedChanges: false,

      // Resume Management
      resumes: [],
      activeResumeId: null,
      activeResume: null, // Full resume object matching backend schema

      // === UI Setters ===
      setMethod: (m) => set({ method: m }),
      setSelectedTemplate: (t) => set({ selectedTemplate: t, template: t }),
      setTemplate: (t) => set({ selectedTemplate: t, template: t }),
      setCurrentStep: (s) => set({ currentStep: s }),
      setActiveTab: (t) => set({ activeTab: t }),
      setHasUnsavedChanges: (v) => set({ hasUnsavedChanges: v }),

      // === Resume Data  ===

      setPersonalInfo: (updates) =>
        set((state) => {
          const defaultResume = {
            personalInfo: {
              fullName: "",
              title: "",
              phone: "",
              email: "",
              location: "",
              website: "",
              linkedin: "",
              profileImage: "",
            },
            summary: "",
            experience: [],
            education: [],
            skills: [],
            projects: [],
            certifications: [],
            status: "draft",
          };
          const base = state.activeResume || defaultResume;
          return {
            activeResume: {
              ...base,
              personalInfo: { ...base.personalInfo, ...updates },
            },
            hasUnsavedChanges: true,
          };
        }),

      setSummary: (summary) =>
        set((state) => {
          const defaultResume = {
            personalInfo: {
              fullName: "",
              title: "",
              phone: "",
              email: "",
              location: "",
              website: "",
              linkedin: "",
              profileImage: "",
            },
            summary: "",
            experience: [],
            education: [],
            skills: [],
            projects: [],
            certifications: [],
            status: "draft",
          };
          const base = state.activeResume || defaultResume;
          return {
            activeResume: { ...base, summary },
            hasUnsavedChanges: true,
          };
        }),

      // Experience
      addExperience: () =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                experience: [
                  ...state.activeResume.experience,
                  {
                    _id: uuidv4(),
                    company: "",
                    position: "",
                    startDate: null,
                    endDate: null,
                    current: false,
                    description: "",
                  },
                ],
              }
            : null,
          hasUnsavedChanges: true,
        })),

      updateExperience: (id, updates) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                experience: state.activeResume.experience.map((exp) =>
                  exp._id === id ? { ...exp, ...updates } : exp
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      removeExperience: (id) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                experience: state.activeResume.experience.filter(
                  (e) => e._id !== id
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      // Education
      addEducation: () =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                education: [
                  ...state.activeResume.education,
                  {
                    _id: uuidv4(),
                    institution: "",
                    degree: "",
                    startDate: null,
                    endDate: null,
                    description: "",
                    grade: "",
                  },
                ],
              }
            : null,
          hasUnsavedChanges: true,
        })),

      updateEducation: (id, updates) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                education: state.activeResume.education.map((edu) =>
                  edu._id === id ? { ...edu, ...updates } : edu
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      removeEducation: (id) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                education: state.activeResume.education.filter(
                  (e) => e._id !== id
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      setSkills: (skillsArray) =>
        set((state) => ({
          activeResume: state.activeResume
            ? { ...state.activeResume, skills: skillsArray }
            : null,
          hasUnsavedChanges: true,
        })),

      addSkill: (skill) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                skills: [...state.activeResume.skills, skill],
              }
            : null,
          hasUnsavedChanges: true,
        })),

      removeSkill: (skillToRemove) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                skills: state.activeResume.skills.filter(
                  (s) => s !== skillToRemove
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      // Projects
      addProject: () =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                projects: [
                  ...(state.activeResume.projects || []),
                  {
                    _id: uuidv4(),
                    name: "",
                    description: "",
                    technologies: [],
                    link: "",
                    startDate: null,
                    endDate: null,
                  },
                ],
              }
            : null,
          hasUnsavedChanges: true,
        })),

      updateProject: (id, updates) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                projects: state.activeResume.projects.map((p) =>
                  p._id === id ? { ...p, ...updates } : p
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      removeProject: (id) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                projects: state.activeResume.projects.filter(
                  (p) => p._id !== id
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      // Certifications
      addCertification: () =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                certifications: [
                  ...state.activeResume.certifications,
                  {
                    _id: uuidv4(),
                    title: "",
                    organization: "",
                    issueDate: null,
                    link: "",
                  },
                ],
              }
            : null,
          hasUnsavedChanges: true,
        })),

      updateCertification: (id, updates) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                certifications: state.activeResume.certifications.map((c) =>
                  c._id === id ? { ...c, ...updates } : c
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      removeCertification: (id) =>
        set((state) => ({
          activeResume: state.activeResume
            ? {
                ...state.activeResume,
                certifications: state.activeResume.certifications.filter(
                  (c) => c._id !== id
                ),
              }
            : null,
          hasUnsavedChanges: true,
        })),

      // Helper to provide a template-friendly formatted resume object
      getFormattedResumeData: () => {
        const resume = get().activeResume;
        const empty = {
          personalInfo: {
            fullName: "",
            title: "",
            phone: "",
            email: "",
            location: "",
            website: "",
            linkedin: "",
            profileImage: "",
          },
          aboutMe: { description: "" },
          education: { items: [] },
          workExperience: { items: [] },
          skills: { items: [] },
          certifications: { items: [] },
        };

        if (!resume) return empty;

        const fmtDate = (d) => {
          if (!d) return "";
          try {
            const date = new Date(d);
            if (isNaN(date.getTime())) return String(d);
            return date.toLocaleDateString(undefined, {
              month: "short",
              year: "numeric",
            });
          } catch (e) {
            return String(d);
          }
        };

        const educationItems = (resume.education || []).map((e) => ({
          institution: e.institution || "",
          position: e.degree || "",
          duration:
            e.startDate || e.endDate
              ? `${fmtDate(e.startDate)} - ${
                  e.currentlyEnrolled ? "Present" : fmtDate(e.endDate)
                }`
              : "",
          description: e.description || "",
        }));

        const workItems = (resume.experience || []).map((w) => ({
          company: w.company || "",
          position: w.position || w.title || "",
          duration:
            w.startDate || w.endDate
              ? `${fmtDate(w.startDate)} - ${
                  w.current ? "Present" : fmtDate(w.endDate)
                }`
              : "",
          description: w.description || "",
        }));

        return {
          personalInfo: resume.personalInfo || empty.personalInfo,
          aboutMe: { description: resume.summary || "" },
          education: { items: educationItems },
          workExperience: { items: workItems },
          skills: { items: resume.skills || [] },
          certifications: {
            items: (resume.certifications || []).map((c) => ({
              title: c.title,
              organization: c.organization,
              issueDate: c.issueDate,
              link: c.link,
            })),
          },
        };
      },

      // === API Actions ===

      fetchResumes: async () => {
        try {
          const { data } = await api.get(API_BASE);
          set({ resumes: data });
        } catch (err) {
          console.error("Failed to fetch resumes:", err);
        }
      },

      loadResume: async (resumeId) => {
        try {
          const { data } = await api.get(`${API_BASE}/${resumeId}`);
          set({
            activeResumeId: resumeId,
            activeResume: data,
            hasUnsavedChanges: false,
          });
        } catch (err) {
          console.error("Failed to load resume:", err);
        }
      },

      // stores/useResumeStore.js

      createResume: async (customTitle) => {
         
        const { activeResume, method } = get();
        const user = useAuthStore.getState().user;

        if (!activeResume) {
          throw new Error("No resume data to save");
        }

        // Optional: dynamic title
        const title =
          customTitle || activeResume.personalInfo?.fullName
            ? `${activeResume.personalInfo.fullName}'s Resume`
            : "My Resume";

        const payload = {
          userId: user?._id, 
          ...activeResume,
          title,
          builderType: method || "smart",
          status: "completed", 
        };

        try {
          const { data } = await api.post(`${API_BASE}/create`, payload);

          set({
            resumes: [...get().resumes.filter((r) => r._id !== data._id), data],
            activeResumeId: data._id,
            activeResume: data,
            hasUnsavedChanges: false,
          });

          return data;
        } catch (err) {
          console.error("Create resume failed:", err);
          throw err;
        }
      },

      saveResume: async () => {
        const { activeResume, activeResumeId } = get();
        if (!activeResumeId || !activeResume) return;

        try {
          const { data } = await api.put(
            `${API_BASE}/${activeResumeId}`,
            activeResume
          );
          set({
            activeResume: data,
            hasUnsavedChanges: false,
            resumes: get().resumes.map((r) =>
              r._id === activeResumeId ? data : r
            ),
          });
        } catch (err) {
          console.error("Save failed:", err);
          throw err;
        }
      },

      deleteResume: async (resumeId) => {
        try {
          await api.delete(`${API_BASE}/${resumeId}`);
          set((state) => ({
            resumes: state.resumes.filter((r) => r._id !== resumeId),
            activeResume:
              state.activeResumeId === resumeId ? null : state.activeResume,
            activeResumeId:
              state.activeResumeId === resumeId ? null : state.activeResumeId,
          }));
        } catch (err) {
          console.error("Delete failed:", err);
        }
      },

      generateShareLink: async (resumeId) => {
        const { data } = await api.post(`${API_BASE}/${resumeId}/share`);
        return data.shareableLink;
      },

      downloadResume: async (resumeId) => {
        const response = await api.post(
          `${API_BASE}/${resumeId}/download`,
          {},
          { responseType: "blob" }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Resume_${resumeId}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      },

      resetBuilder: () =>
        set({
          currentStep: 1,
          activeTab: "Basic Info",
          selectedTemplate: null,
          template: null,
          method: null,
          activeResume: null,
          activeResumeId: null,
          hasUnsavedChanges: false,
        }),
    }),
    {
      name: "resume-builder-ui",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            [
              "currentStep",
              "activeTab",
              "selectedTemplate",
              "template",
              "method",
            ].includes(key)
          )
        ),
    }
  )
);
