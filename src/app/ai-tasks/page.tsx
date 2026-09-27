"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";
import { aiTaskCategories } from "@/lib/data/ai-task-categories";
import { AiTaskCard } from "@/components/ai-tasks/AiTaskCard";
import { useUpgradeModalStore } from "@/store/useUpgradeModalStore";

export default function AiTasksPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    aiTaskCategories[0].id,
  );
  const [query, setQuery] = useState("");
  const openUpgrade = useUpgradeModalStore((s) => s.open);

  const activeCategory = aiTaskCategories.find(
    (c) => c.id === activeCategoryId,
  )!;
  const filteredTasks = activeCategory.tasks.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-text">
        EchoGPT AI Tasks
      </h1>
      <p className="mx-auto mt-2 max-w-xl text-center text-[14px] text-text-secondary">
        Discover and create custom versions of EchoGPT that combine
        instructions, extra knowledge, and any combination of skills.
      </p>

      <div className="mx-auto mt-8 flex max-w-lg items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5">
        <Search size={16} className="shrink-0 text-text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for the Apps"
          className="w-full bg-transparent text-[13.5px] text-text outline-none placeholder:text-text-muted"
        />
      </div>

      <div className="mt-8 flex items-center gap-6 border-b border-border">
        {aiTaskCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
            className={clsx(
              "relative pb-3 text-[14px] font-medium",
              activeCategoryId === cat.id
                ? "text-accent"
                : "text-text-secondary hover:text-text",
            )}
          >
            {cat.label}
            {activeCategoryId === cat.id && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent" />
            )}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <p className="py-16 text-center text-[13.5px] text-text-secondary">
          No apps match your search.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <AiTaskCard key={task.id} task={task} onClick={openUpgrade} />
          ))}
        </div>
      )}
    </div>
  );
}
