"use client";

import { useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Globe, Share2, Settings, Sun, Moon } from "lucide-react";
import clsx from "clsx";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useSettingsModalStore } from "@/store/useSettingsModalStore";
import { useClickOutside } from "@/lib/hooks/useClickOutside";

const helpLinks = [
  "Support",
  "Newsletter",
  "Subscriptions",
  "API Platform",
  "Discord",
];

export function SidebarBottomBar() {
  const isMini = useSidebarStore((s) => s.isMini);
  const openSettingsModal = useSettingsModalStore((s) => s.open);
  const [isDropupOpen, setDropupOpen] = useState(false);
  const dropupRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useClickOutside(dropupRef, () => setDropupOpen(false));

  return (
    <div
      ref={dropupRef}
      className={clsx(
        "relative flex items-center gap-1 border-t border-border p-2.5",
        isMini && "md:justify-center",
      )}
    >
      <BottomIconButton
        icon={<Globe size={17} />}
        title="Website"
        hideOnMini={isMini}
      />
      <BottomIconButton
        icon={<Share2 size={17} />}
        title="Share"
        hideOnMini={isMini}
      />
      <BottomIconButton
        icon={<Settings size={17} />}
        title="Settings"
        active={isDropupOpen}
        onClick={() => setDropupOpen((v) => !v)}
        pinOnMini={isMini}
      />
      <BottomIconButton
        icon={isDark ? <Moon size={17} /> : <Sun size={17} />}
        title="Toggle theme"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        hideOnMini={isMini}
      />

      {isDropupOpen && (
        <div
          className={clsx(
            "absolute bottom-[calc(100%+8px)] z-40 w-56 rounded-xl border border-border bg-surface p-1.5 shadow-[0_12px_32px_rgba(20,20,30,0.12),0_2px_8px_rgba(20,20,30,0.06)]",
            isMini ? "md:left-18 md:bottom-2" : "left-2.5 right-2.5",
          )}
        >
          <button
            onClick={() => {
              openSettingsModal();
              setDropupOpen(false);
            }}
            className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] text-text hover:bg-border"
          >
            <Settings size={16} className="text-text-secondary" />
            Settings
          </button>
          <div className="my-1 h-px bg-border" />
          <p className="px-2.5 pb-1 pt-1 text-[11px] font-semibold text-text-muted">
            Help &amp; support
          </p>
          {helpLinks.map((label) => (
            <button
              key={label}
              className="flex w-full items-center rounded-md px-2.5 py-2 text-left text-[13px] text-text hover:bg-border"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function BottomIconButton({
  icon,
  title,
  onClick,
  active,
  hideOnMini,
  pinOnMini,
}: {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  active?: boolean;
  hideOnMini?: boolean;
  pinOnMini?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={clsx(
        "flex h-9 flex-1 items-center justify-center rounded-md text-text-secondary hover:bg-border hover:text-text",
        hideOnMini && "md:hidden",
        pinOnMini && "md:flex-none md:w-9",
        active && "bg-accent-soft text-accent",
      )}
    >
      {icon}
    </button>
  );
}
