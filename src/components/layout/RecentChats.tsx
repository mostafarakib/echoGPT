"use client";

import { useState } from "react";
import { Clock, Loader2, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useSidebarStore } from "@/store/useSidebarStore";
import { recentChatTitles } from "@/lib/data/recent-chats";

const BATCH_SIZE = 6;

export function RecentChats() {
  const isMini = useSidebarStore((s) => s.isMini);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [isLoading, setLoading] = useState(false);

  const visibleChats = recentChatTitles.slice(0, visibleCount);
  const hasMore = visibleCount < recentChatTitles.length;

  function loadMore() {
    setLoading(true);
    // Simulated fetch — swap for a real paginated API call later
    setTimeout(() => {
      setVisibleCount((c) => Math.min(c + BATCH_SIZE, recentChatTitles.length));
      setLoading(false);
    }, 500);
  }

  return (
    <div className={clsx(isMini && "md:hidden")}>
      <p className="px-2.5 pb-1 text-[11px] font-semibold text-text-muted">
        Recent
      </p>
      <div className="flex flex-col gap-0.5">
        {visibleChats.map((title, i) => (
          <button
            key={i}
            title={title}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-[13px] text-text-secondary hover:bg-border hover:text-text"
          >
            <Clock size={16} className="shrink-0 text-text-muted" />
            <span className="truncate">{title}</span>
          </button>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={loadMore}
          disabled={isLoading}
          className="mt-0.5 flex w-full items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-[12.5px] font-medium text-text-secondary hover:bg-border hover:text-text disabled:opacity-60"
        >
          {isLoading ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <ChevronDown size={14} />
          )}
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
