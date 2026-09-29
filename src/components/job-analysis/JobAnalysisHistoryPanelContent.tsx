"use client";

import { Briefcase } from "lucide-react";
import { jobAnalysisHistory } from "@/lib/data/job-analysis-history";
import { formatHistoryDate } from "@/lib/utils/format-history-date";

export function JobAnalysisHistoryPanelContent() {
  if (jobAnalysisHistory.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 px-4 py-16 text-center">
        <Briefcase size={22} className="text-text-muted" />
        <p className="text-[13px] text-text-secondary">No job analyses yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-3">
      {jobAnalysisHistory.map((entry) => (
        <button
          key={entry.id}
          className="flex flex-col items-start rounded-xl border border-border bg-canvas px-3.5 py-3 text-left hover:bg-border"
        >
          <p className="text-[11px] font-semibold text-accent">
            {entry.taskTitle}
          </p>
          <p className="mt-1 truncate text-[13px] text-text">
            {entry.jobTitlePreview}
          </p>
          <p className="mt-1 text-[11px] text-text-muted">
            {formatHistoryDate(entry.date)}
          </p>
        </button>
      ))}
    </div>
  );
}
