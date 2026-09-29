import { create } from "zustand";
import { persist } from "zustand/middleware";
import { aiModels } from "@/lib/data/models";

interface SettingsState {
  defaultModelId: string;
  setDefaultModel: (id: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      defaultModelId: aiModels[0].id,
      setDefaultModel: (id) => set({ defaultModelId: id }),
    }),
    { name: "echogpt-settings" },
  ),
);
