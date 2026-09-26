"use client";

import { Share2, Trash2 } from "lucide-react";
import { aiModels } from "@/lib/data/models";
import { formatHistoryDate } from "@/lib/utils/format-history-date";

interface HistoryEntryRowProps {
  modelId: string;
  preview: string;
  lastUpdated: string;
  onShare: () => void;
  onDelete: () => void;
}

export function HistoryEntryRow({
  modelId,
  preview,
  lastUpdated,
  onShare,
  onDelete,
}: HistoryEntryRowProps) {
  const model = aiModels.find((m) => m.id === modelId);
  if (!model) return null;
  const Icon = model.icon;

  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5">
      <div className="flex shrink-0 flex-col items-center gap-1">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Icon size={15} />
        </span>
        <span className="max-w-13 truncate text-[10px] text-text-muted">
          {model.name}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-[13.5px] leading-relaxed text-text">
          {preview}
        </p>
        <p className="mt-1.5 text-[11.5px] text-text-muted">
          Last Updated:{" "}
          <span className="text-text-secondary">
            {formatHistoryDate(lastUpdated)}
          </span>
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          onClick={onShare}
          title="Share"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text-secondary hover:bg-border hover:text-text"
        >
          <Share2 size={14} />
        </button>
        <button
          onClick={onDelete}
          title="Delete"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text-secondary hover:border-danger hover:bg-danger/10 hover:text-danger"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}
