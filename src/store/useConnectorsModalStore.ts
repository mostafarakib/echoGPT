import { create } from "zustand";

interface ConnectorsModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useConnectorsModalStore = create<ConnectorsModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
