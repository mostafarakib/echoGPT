import { create } from "zustand";

interface RightPanelState {
  activePanelId: string | null;
  open: (panelId: string) => void;
  close: () => void;
}

export const useRightPanelStore = create<RightPanelState>((set) => ({
  activePanelId: null,
  open: (panelId) => set({ activePanelId: panelId }),
  close: () => set({ activePanelId: null }),
}));
