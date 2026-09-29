"use client";

import { Pin, X, Plus } from "lucide-react";
import { EchoLogo } from "@/components/ui/EchoLogo";

interface ExtensionPopupFrameProps {
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  onNewChat: () => void;
}

export function ExtensionPopupFrame({
  title,
  children,
  footer,
  onNewChat,
}: ExtensionPopupFrameProps) {
  return (
    <div className="flex h-155 w-99 flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
      <div className="flex shrink-0 items-center gap-2.5 border-b border-border bg-surface px-3.5 py-3">
        <EchoLogo size={22} className="rounded-md" />
        <span className="text-[13.5px] font-semibold text-text">{title}</span>
        <div className="ml-auto flex gap-1">
          <button
            onClick={onNewChat}
            title="New chat"
            className="flex h-6.5 w-6.5 items-center justify-center rounded-md text-text-muted hover:bg-border hover:text-text"
          >
            <Plus size={14} />
          </button>
          <button
            title="Pin"
            className="flex h-6.5 w-6.5 items-center justify-center rounded-md text-text-muted hover:bg-border hover:text-text"
          >
            <Pin size={13} />
          </button>
          <button
            title="Close"
            className="flex h-6.5 w-6.5 items-center justify-center rounded-md text-text-muted hover:bg-border hover:text-text"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">{children}</div>

      {footer}
    </div>
  );
}
