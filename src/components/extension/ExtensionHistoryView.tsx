"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { historyEntries } from "@/lib/data/history-entries";
import { aiModels } from "@/lib/data/models";
import { formatHistoryDate } from "@/lib/utils/format-history-date";

export function ExtensionHistoryView() {
  const [query, setQuery] = useState("");
  const filtered = historyEntries
    .filter((e) => e.preview.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      <p className="mb-3.5 text-[16px] font-bold text-text">History</p>
      <div className="mb-3.5 flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-2">
        <Search size={14} className="text-text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search conversations..."
          className="w-full bg-transparent text-[12px] text-text outline-none placeholder:text-text-muted"
        />
      </div>
      <div className="flex flex-col">
        {filtered.map((entry) => {
          const model = aiModels.find((m) => m.id === entry.modelId);
          const Icon = model?.icon;
          return (
            <button
              key={entry.id}
              className="flex gap-2.5 border-b border-border py-2.5 text-left hover:bg-surface"
            >
              <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                {Icon && <Icon size={12} />}
              </span>
              <div className="min-w-0">
                <p className="line-clamp-2 text-[12px] leading-snug text-text">
                  {entry.preview}
                </p>
                <p className="mt-1 text-[10px] text-text-muted">
                  {formatHistoryDate(entry.lastUpdated)}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
