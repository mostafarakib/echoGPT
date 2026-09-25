import { create } from "zustand";

interface PricingModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const usePricingModalStore = create<PricingModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
