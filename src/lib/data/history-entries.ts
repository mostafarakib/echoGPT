export interface HistoryEntry {
  id: string;
  modelId: string;
  preview: string;
  lastUpdated: string; // ISO string
}

export const historyEntries: HistoryEntry[] = [
  {
    id: "h1",
    modelId: "echogpt-core",
    preview:
      "Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow.",
    lastUpdated: "2026-09-27T00:58:00",
  },
  {
    id: "h2",
    modelId: "echogpt-core",
    preview:
      "Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow.",
    lastUpdated: "2026-09-27T00:57:00",
  },
  {
    id: "h3",
    modelId: "gemini-3-1-pro",
    preview:
      "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects.",
    lastUpdated: "2026-09-25T11:56:00",
  },
  {
    id: "h4",
    modelId: "echogpt-core",
    preview:
      "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects.",
    lastUpdated: "2026-09-25T00:17:00",
  },
  {
    id: "h5",
    modelId: "echogpt-core",
    preview:
      "Help me rewrite my resume summary for a frontend developer role, tailored to highlight my experience and match the job I want.",
    lastUpdated: "2026-09-23T21:07:00",
  },
  {
    id: "h6",
    modelId: "gemini-3-1-pro",
    preview:
      "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects.",
    lastUpdated: "2026-09-20T14:32:00",
  },
  {
    id: "h7",
    modelId: "claude-sonnet-5",
    preview:
      "Write 3 catchy caption options for a product launch post, perfect for increasing engagement across social platforms.",
    lastUpdated: "2026-09-18T09:12:00",
  },
  {
    id: "h8",
    modelId: "gpt-6-astra",
    preview:
      "Design a 7-day challenge to help me build a new habit, with daily check-ins and measurable goals.",
    lastUpdated: "2026-09-15T18:45:00",
  },
];
