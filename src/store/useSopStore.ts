import { create } from "zustand";

export interface SopHistoryEntry {
  id: string;
  templateId: string;
  countryId: string;
  fullName: string;
}

interface SopState {
  history: SopHistoryEntry[];
  addToHistory: (entry: Omit<SopHistoryEntry, "id">) => void;
}

export const useSopStore = create<SopState>((set) => ({
  history: [],
  addToHistory: (entry) =>
    set((state) => ({
      history: [...state.history, { id: crypto.randomUUID(), ...entry }],
    })),
}));
