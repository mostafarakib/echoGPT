"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { useSearchModalStore } from "@/store/useSearchModalStore";
import { searchSuggestions } from "@/lib/data/search-suggestions";

export function SearchModal() {
  const { isOpen, close } = useSearchModalStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      const id = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  const filtered = query.trim()
    ? searchSuggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase()),
      )
    : searchSuggestions;

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      maxWidthClassName="max-w-xl"
      showCloseButton={false}
    >
      <div className="flex items-center gap-2.5 border-b border-border px-4 py-3.5">
        <Search size={18} className="shrink-0 text-text-muted" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search chats and pages..."
          className="flex-1 bg-transparent text-[15px] text-text outline-none placeholder:text-text-muted"
        />
        <kbd className="rounded-[5px] border border-border px-1.5 py-0.5 text-[11px] text-text-muted">
          Esc
        </kbd>
      </div>

      <div className="max-h-80 overflow-y-auto p-2">
        <p className="px-2.5 pb-1 pt-2 text-[11px] font-semibold text-text-muted">
          {query.trim() ? "Results" : "Suggestions"}
        </p>
        {filtered.length === 0 ? (
          <p className="px-2.5 py-4 text-center text-[13px] text-text-secondary">
            No matches for &ldquo;{query}&rdquo;
          </p>
        ) : (
          filtered.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] text-text hover:bg-border"
              >
                <Icon size={16} className="shrink-0 text-text-muted" />
                {s.label}
              </button>
            );
          })
        )}
      </div>
    </Modal>
  );
}
