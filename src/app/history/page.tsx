"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { historyEntries as initialEntries } from "@/lib/data/history-entries";
import { HistoryModelFilter } from "@/components/history/HistoryModelFilter";
import { HistoryEntryRow } from "@/components/history/HistoryEntryRow";
import { HistoryUpgradeOverlay } from "@/components/history/HistoryUpgradeOverlay";

const FREE_VISIBLE_COUNT = 6;

export default function HistoryPage() {
  const [entries, setEntries] = useState(initialEntries);
  const [query, setQuery] = useState("");
  const [modelFilter, setModelFilter] = useState("all");

  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      const matchesModel =
        modelFilter === "all" || entry.modelId === modelFilter;
      const matchesQuery = entry.preview
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesModel && matchesQuery;
    });
  }, [entries, query, modelFilter]);

  const isGated = filtered.length > FREE_VISIBLE_COUNT;

  function handleDelete(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function handleShare(id: string) {
    // Placeholder — wire up a real share link once chats have persistent URLs
    console.log("share", id);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-text">
        My Chat History
      </h1>
      <p className="mt-2 text-center text-[14px] text-text-secondary">
        Access your complete chat history across diverse topics and interactions
        with different models or characters.
      </p>

      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
        <div className="flex flex-1 items-center gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-2.5">
          <Search size={16} className="shrink-0 text-text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chat history..."
            className="w-full bg-transparent text-[13.5px] text-text outline-none placeholder:text-text-muted"
          />
        </div>
        <HistoryModelFilter value={modelFilter} onChange={setModelFilter} />
      </div>

      <div className="relative mt-5">
        <div className="flex flex-col gap-2.5">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-[13.5px] text-text-secondary">
              No chats match your search.
            </p>
          ) : (
            filtered.map((entry) => (
              <HistoryEntryRow
                key={entry.id}
                modelId={entry.modelId}
                preview={entry.preview}
                lastUpdated={entry.lastUpdated}
                onShare={() => handleShare(entry.id)}
                onDelete={() => handleDelete(entry.id)}
              />
            ))
          )}
        </div>
        {isGated && <HistoryUpgradeOverlay />}
      </div>
    </div>
  );
}
