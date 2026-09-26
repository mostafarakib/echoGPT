"use client";

import { Columns2, Maximize2 } from "lucide-react";
import clsx from "clsx";
import { useCompareStore } from "@/store/useCompareStore";

export function CompareModeTabs() {
  const mode = useCompareStore((s) => s.mode);
  const setMode = useCompareStore((s) => s.setMode);

  return (
    <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-border bg-surface p-1">
      <button
        onClick={() => setMode("compare")}
        className={clsx(
          "flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold",
          mode === "compare"
            ? "bg-accent text-white"
            : "text-text-secondary hover:bg-border",
        )}
      >
        <Columns2 size={15} />
        Compare
      </button>
      <button
        onClick={() => setMode("focus")}
        className={clsx(
          "flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold",
          mode === "focus"
            ? "bg-accent text-white"
            : "text-text-secondary hover:bg-border",
        )}
      >
        <Maximize2 size={15} />
        Focus
      </button>
    </div>
  );
}
