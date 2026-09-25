"use client";

import clsx from "clsx";
import { useChatStore } from "@/store/useChatStore";

export function MessageList() {
  const messages = useChatStore((s) => s.messages);
  const isReplying = useChatStore((s) => s.isReplying);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-6 sm:px-6">
      {messages.map((m) => (
        <div
          key={m.id}
          className={clsx(
            "flex",
            m.role === "user" ? "justify-end" : "justify-start",
          )}
        >
          <div
            className={clsx(
              "max-w-[80%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed",
              m.role === "user"
                ? "bg-accent text-white"
                : "border border-border bg-surface text-text",
            )}
          >
            {m.content}
          </div>
        </div>
      ))}
      {isReplying && (
        <div className="flex justify-start">
          <div className="rounded-2xl border border-border bg-surface px-4 py-2.5 text-[13.5px] text-text-secondary">
            Thinking...
          </div>
        </div>
      )}
    </div>
  );
}
