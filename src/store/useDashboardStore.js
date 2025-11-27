import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDashboardStore = create(
  persist(
    (set, get) => ({

      activePage: "overview",
      sidebarOpen: true,

      setActivePage: (page) => set({ activePage: page }),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),

      resetDashboardStore: () =>
        set({
          activePage: "overview",
          sidebarOpen: true,
        }),
    }),
    {
      name: "dashboard-store",
    }
  )
);