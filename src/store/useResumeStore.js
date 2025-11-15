import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useResumeStore = create(
    persist(
        (set, get) => ({

            method: null,
            template: null,
            currentStep: 1,
            hasBuiltResume: false,

            setMethod: (type) => set({ method: type }),
            setTemplate: (temp) => set({ template: temp }),
            setCurrentStep: (step) => set({ currentStep: step }),

            resetResumeBuilder: () =>
                set({ method: null, template: null, currentStep: 1}), 
        }),
    )
);