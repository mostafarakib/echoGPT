"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { aiModels } from "@/lib/data/models";
import { useChatStore } from "@/store/useChatStore";
import { StoreModelCard } from "@/components/store/StoreModelCard";

export default function StorePage() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const newChat = useChatStore((s) => s.newChat);
  const setModel = useChatStore((s) => s.setModel);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return aiModels;
    return aiModels.filter(
      (model) =>
        model.name.toLowerCase().includes(q) ||
        model.provider.toLowerCase().includes(q) ||
        model.description.toLowerCase().includes(q),
    );
  }, [query]);

  function handleTry(modelId: string) {
    newChat();
    setModel(modelId);
    router.push("/");
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-text">
        EchoGPT Store
      </h1>
      <p className="mx-auto mt-2 max-w-xl text-center text-[14px] text-text-secondary">
        Discover custom versions of EchoGPT that combine different models,
        instructions, and skills for the task at hand.
      </p>

      <div className="mx-auto mt-8 flex max-w-md items-center gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-2.5">
        <Search size={16} className="shrink-0 text-text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the store..."
          className="w-full bg-transparent text-[13.5px] text-text outline-none placeholder:text-text-muted"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-[13.5px] text-text-secondary">
          No results for &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((model) => (
            <StoreModelCard key={model.id} model={model} onTry={handleTry} />
          ))}
        </div>
      )}
    </div>
  );
}
