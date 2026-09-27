"use client";

import clsx from "clsx";
import type { AiTask } from "@/lib/data/ai-task-categories";

interface AiTaskCardProps {
  task: AiTask;
  onClick: () => void;
}

export function AiTaskCard({ task, onClick }: AiTaskCardProps) {
  const Icon = task.icon;

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start rounded-2xl border border-border bg-surface p-4 text-left hover:border-border-strong hover:bg-accent-soft/30"
    >
      <span
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-xl",
          task.badgeClassName ?? "bg-accent-soft text-accent",
        )}
      >
        <Icon size={18} />
      </span>
      <p className="mt-3 text-[14px] font-semibold text-text">{task.title}</p>
      <p className="mt-1 text-[12.5px] leading-relaxed text-text-secondary">
        {task.description}
      </p>
    </button>
  );
}
