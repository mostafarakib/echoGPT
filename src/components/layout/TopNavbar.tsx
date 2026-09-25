"use client";

import { useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Zap, Settings, Moon, Sun, LogOut } from "lucide-react";
import clsx from "clsx";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { useSettingsModalStore } from "@/store/useSettingsModalStore";
import { useChatStore } from "@/store/useChatStore";

export function TopNavbar() {
  const openMobile = useSidebarStore((s) => s.openMobile);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const chatTitle = useChatStore((s) => s.title);

  useClickOutside(popoverRef, () => setPopoverOpen(false));

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const openSettingsModal = useSettingsModalStore((s) => s.open);

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-surface px-4">
      <button
        onClick={openMobile}
        aria-label="Open sidebar"
        className="flex h-8.5 w-8.5 items-center justify-center rounded-md text-text hover:bg-border md:hidden"
      >
        <Menu size={19} />
      </button>

      <span className="truncate text-sm font-semibold text-text-secondary">
        {chatTitle ?? ""}
      </span>

      <div ref={popoverRef} className="relative ml-auto">
        <button
          onClick={() => setPopoverOpen((v) => !v)}
          aria-label="Account menu"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[12.5px] font-bold text-white"
        >
          RH
        </button>

        {isPopoverOpen && (
          <div className="absolute right-0 top-[calc(100%+8px)] z-40 w-60 rounded-xl border border-border bg-surface p-2 shadow-[0_12px_32px_rgba(20,20,30,0.12),0_2px_8px_rgba(20,20,30,0.06)]">
            <div className="px-2.5 pb-2.5 pt-2">
              <p className="text-[13.5px] font-semibold">Rafi Hasan</p>
              <p className="mt-0.5 text-xs text-text-secondary">
                rafi@example.com
              </p>
            </div>
            <div className="my-1 h-px bg-border" />

            <PopoverItem icon={<Zap size={16} />} label="Upgrade" />
            <PopoverItem
              icon={<Settings size={16} />}
              label="Settings"
              onClick={() => {
                openSettingsModal();
                setPopoverOpen(false);
              }}
            />

            <button
              onClick={toggleTheme}
              className="flex w-full items-center justify-between gap-2.5 rounded-md px-2.5 py-2 text-[13px] text-text hover:bg-border"
            >
              <span className="flex items-center gap-2.5 text-text-secondary">
                {isDark ? <Moon size={16} /> : <Sun size={16} />}
                <span className="text-text">Dark mode</span>
              </span>
              <span
                className={clsx(
                  "relative h-5 w-8.5 shrink-0 rounded-full transition-colors",
                  isDark ? "bg-accent" : "bg-border-strong",
                )}
              >
                <span
                  className={clsx(
                    "absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform",
                    isDark && "translate-x-3.5",
                  )}
                />
              </span>
            </button>

            <div className="my-1 h-px bg-border" />
            <PopoverItem icon={<LogOut size={16} />} label="Log out" />
          </div>
        )}
      </div>
    </header>
  );
}

function PopoverItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] text-text hover:bg-border"
    >
      <span className="text-text-secondary">{icon}</span>
      {label}
    </button>
  );
}
