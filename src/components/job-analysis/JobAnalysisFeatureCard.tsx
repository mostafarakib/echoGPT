"use client";

import clsx from "clsx";
import type { JobAnalysisTask } from "@/lib/data/job-analysis-tasks";

interface JobAnalysisFeatureCardProps {
  task: JobAnalysisTask;
  isActive: boolean;
  onClick: () => void;
}

export function JobAnalysisFeatureCard({
  task,
  isActive,
  onClick,
}: JobAnalysisFeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-2xl border p-5 text-center transition-colors",
        isActive
          ? "border-accent bg-accent-soft"
          : "border-border bg-surface hover:border-border-strong",
      )}
    >
      <p
        className={clsx(
          "text-[15px] font-semibold",
          isActive ? "text-accent" : "text-accent/90",
        )}
      >
        {task.title}
      </p>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-text-secondary">
        {task.description}
      </p>
    </button>
  );
}
