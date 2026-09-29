// src/components/ui/RightPanel.tsx
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import clsx from "clsx";

interface RightPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function RightPanel({
  isOpen,
  onClose,
  title,
  children,
}: RightPanelProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-50 bg-black/40 transition-opacity",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={clsx(
          "fixed inset-y-0 right-0 flex h-full w-full max-w-sm flex-col border-l border-border bg-surface shadow-[0_12px_32px_rgba(20,20,30,0.16)] transition-transform duration-200",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
          <p className="text-[14.5px] font-semibold text-text">{title}</p>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-7 w-7 items-center justify-center rounded-md text-text-secondary hover:bg-border hover:text-text"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
