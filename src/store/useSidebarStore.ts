import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
  isMini: boolean;
  isMobileOpen: boolean;
  toggleMini: () => void;
  openMobile: () => void;
  closeMobile: () => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isMini: false,
      isMobileOpen: false,
      toggleMini: () => set((state) => ({ isMini: !state.isMini })),
      openMobile: () => set({ isMobileOpen: true }),
      closeMobile: () => set({ isMobileOpen: false }),
    }),
    {
      name: "echogpt-sidebar",
      partialize: (state) => ({ isMini: state.isMini }),
      skipHydration: true,
    },
  ),
);
