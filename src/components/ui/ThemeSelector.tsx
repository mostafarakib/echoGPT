"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import clsx from "clsx";

const themeOptions = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "system", label: "System", icon: Monitor },
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {themeOptions.map((opt) => {
        const Icon = opt.icon;
        const isSelected = theme === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => setTheme(opt.id)}
            className={clsx(
              "relative flex flex-col items-center gap-2 rounded-xl border p-4",
              isSelected
                ? "border-accent bg-accent-soft"
                : "border-border hover:border-border-strong",
            )}
          >
            {isSelected && (
              <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
                <Check size={10} />
              </span>
            )}
            <Icon
              size={18}
              className={isSelected ? "text-accent" : "text-text-secondary"}
            />
            <span
              className={clsx(
                "text-[12.5px] font-medium",
                isSelected ? "text-accent" : "text-text",
              )}
            >
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
