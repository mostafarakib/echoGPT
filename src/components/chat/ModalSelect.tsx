"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { useChatStore } from "@/store/useChatStore";
import { aiModels } from "@/lib/data/models";

export function ModelSelect() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const selectedModelId = useChatStore((s) => s.selectedModelId);
  const setModel = useChatStore((s) => s.setModel);
  const selected = aiModels.find((m) => m.id === selectedModelId)!;
  const SelectedIcon = selected.icon;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13.5px] font-medium text-text hover:bg-border"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-soft text-accent">
          <SelectedIcon size={14} />
        </span>
        {selected.name}
        <ChevronDown size={15} className="text-text-muted" />
      </button>

      {isOpen && (
        <div className="absolute bottom-[calc(100%+8px)] left-0 z-40 w-72 rounded-xl border border-border bg-surface p-1.5 shadow-[0_12px_32px_rgba(20,20,30,0.12),0_2px_8px_rgba(20,20,30,0.06)]">
          {aiModels.map((model) => {
            const Icon = model.icon;
            return (
              <button
                key={model.id}
                onClick={() => {
                  setModel(model.id);
                  setOpen(false);
                }}
                className={clsx(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left hover:bg-border",
                  model.id === selectedModelId && "bg-accent-soft",
                )}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Icon size={15} />
                </span>
                <span>
                  <p className="text-[13px] font-medium text-text">
                    {model.name}
                  </p>
                  <p className="text-[11.5px] text-text-secondary">
                    {model.brief}
                  </p>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
