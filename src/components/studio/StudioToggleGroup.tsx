"use client";

import clsx from "clsx";

interface StudioToggleGroupProps<T extends string | number> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
}

export function StudioToggleGroup<T extends string | number>({
  options,
  value,
  onChange,
}: StudioToggleGroupProps<T>) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-canvas p-1">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={clsx(
            "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
            value === opt
              ? "bg-accent text-white"
              : "text-text-secondary hover:bg-border",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
