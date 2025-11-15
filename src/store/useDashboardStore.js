import { create } from "zustand";

const useDashboardStore = create(
    (set) => ({
        activePage: "overview",
        setActivePage: (page) => set({ activePage: page }),
    }));

export default useDashboardStore;