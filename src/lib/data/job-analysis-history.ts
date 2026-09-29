export interface JobAnalysisHistoryEntry {
  id: string;
  taskTitle: string;
  jobTitlePreview: string;
  date: string; // ISO
}

export const jobAnalysisHistory: JobAnalysisHistoryEntry[] = [
  {
    id: "j1",
    taskTitle: "Analyze Job Description",
    jobTitlePreview: "Senior Frontend Engineer @ Nimbus Labs",
    date: "2026-09-24T10:15:00",
  },
  {
    id: "j2",
    taskTitle: "Tailor Your Resume",
    jobTitlePreview: "Frontend Developer @ Cascade Apps",
    date: "2026-09-20T16:40:00",
  },
  {
    id: "j3",
    taskTitle: "Skill Gap Analysis",
    jobTitlePreview: "React Engineer @ Foundry Systems",
    date: "2026-09-12T09:05:00",
  },
];
