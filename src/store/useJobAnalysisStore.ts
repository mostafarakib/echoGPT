import { create } from "zustand";
import { jobAnalysisTasks } from "@/lib/data/job-analysis-tasks";

export interface JobAnalysisResult {
  id: string;
  taskId: string;
  jobText: string;
  result: string;
}

interface JobAnalysisState {
  activeTaskId: string | null;
  results: JobAnalysisResult[];
  isAnalyzing: boolean;
  setActiveTask: (id: string | null) => void;
  analyze: (jobText: string) => void;
}

export const useJobAnalysisStore = create<JobAnalysisState>((set, get) => ({
  activeTaskId: null,
  results: [],
  isAnalyzing: false,

  setActiveTask: (id) => set({ activeTaskId: id }),

  analyze: (jobText) => {
    if (!jobText.trim()) return;
    set({ isAnalyzing: true });

    // Mocked analysis
    setTimeout(() => {
      const task = jobAnalysisTasks.find((t) => t.id === get().activeTaskId);
      const result: JobAnalysisResult = {
        id: crypto.randomUUID(),
        taskId: get().activeTaskId ?? "general",
        jobText,
        result: `Placeholder ${task?.title.toLowerCase() ?? "job insight"} output — wire up the real analysis API here.`,
      };
      set((state) => ({
        results: [...state.results, result],
        isAnalyzing: false,
      }));
    }, 900);
  },
}));
