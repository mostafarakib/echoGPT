"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { aiModels } from "@/lib/data/models";

interface HistoryModelFilterProps {
  value: string; // "all" or a model id
  onChange: (value: string) => void;
}

export function HistoryModelFilter({
  value,
  onChange,
}: HistoryModelFilterProps) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const label =
    value === "all"
      ? "All"
      : (aiModels.find((m) => m.id === value)?.name ?? "All");

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          "flex w-40 items-center justify-between gap-2 rounded-lg border bg-surface px-3.5 py-2.5 text-[13.5px] font-medium text-text",
          isOpen ? "border-accent" : "border-border",
        )}
      >
        {label}
        <ChevronDown
          size={15}
          className={clsx(
            "text-text-muted transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+6px)] z-30 w-44 rounded-xl border border-border bg-surface p-1.5 shadow-[0_12px_32px_rgba(20,20,30,0.12),0_2px_8px_rgba(20,20,30,0.06)]">
          <button
            onClick={() => {
              onChange("all");
              setOpen(false);
            }}
            className={clsx(
              "flex w-full items-center rounded-lg px-2.5 py-2 text-left text-[13px] hover:bg-border",
              value === "all"
                ? "bg-accent-soft text-accent font-medium"
                : "text-text",
            )}
          >
            All
          </button>
          {aiModels.map((model) => (
            <button
              key={model.id}
              onClick={() => {
                onChange(model.id);
                setOpen(false);
              }}
              className={clsx(
                "flex w-full items-center rounded-lg px-2.5 py-2 text-left text-[13px] hover:bg-border",
                value === model.id
                  ? "bg-accent-soft text-accent font-medium"
                  : "text-text",
              )}
            >
              {model.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
