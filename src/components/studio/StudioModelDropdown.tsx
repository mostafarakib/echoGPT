"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useClickOutside } from "@/lib/hooks/useClickOutside";

interface Model {
  id: string;
  name: string;
  provider: string;
}

interface StudioModelDropdownProps {
  models: Model[];
  selectedId: string;
  onChange: (id: string) => void;
}

export function StudioModelDropdown({
  models,
  selectedId,
  onChange,
}: StudioModelDropdownProps) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const selected = models.find((m) => m.id === selectedId) ?? models[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-border bg-canvas px-3.5 py-2 text-[13px] font-medium text-text hover:bg-border"
      >
        {selected.name}
        <ChevronDown size={14} className="text-text-muted" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+6px)] z-30 w-56 rounded-xl border border-border bg-surface p-1.5 shadow-[0_12px_32px_rgba(20,20,30,0.12),0_2px_8px_rgba(20,20,30,0.06)]">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => {
                onChange(model.id);
                setOpen(false);
              }}
              className={clsx(
                "flex w-full flex-col items-start rounded-lg px-2.5 py-2 text-left hover:bg-border",
                model.id === selectedId && "bg-accent-soft",
              )}
            >
              <span className="text-[13px] font-medium text-text">
                {model.name}
              </span>
              <span className="text-[11px] text-text-secondary">
                {model.provider}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
