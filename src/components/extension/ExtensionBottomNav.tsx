"use client";

import { MessageSquare, LayoutGrid, History, Settings } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "tools", label: "Tools", icon: LayoutGrid },
  { id: "history", label: "History", icon: History },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

interface ExtensionBottomNavProps {
  activeId: string;
  onChange: (id: string) => void;
}

export function ExtensionBottomNav({
  activeId,
  onChange,
}: ExtensionBottomNavProps) {
  return (
    <div className="flex shrink-0 border-t border-border bg-surface">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={clsx(
              "flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold",
              isActive
                ? "text-accent"
                : "text-text-muted hover:text-text-secondary",
            )}
          >
            <Icon size={18} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
