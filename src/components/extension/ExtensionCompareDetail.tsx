"use client";

import { useState } from "react";
import { CompareModelPickerButton } from "@/components/compare/CompareModelPickerButton";
import { useCompareStore } from "@/store/useCompareStore";
import { aiModels } from "@/lib/data/models";

export function ExtensionCompareDetail() {
  const [value, setValue] = useState("");
  const selectedModelIds = useCompareStore((s) => s.selectedModelIds);
  const sendPrompt = useCompareStore((s) => s.sendPrompt);
  const activeSessionId = useCompareStore((s) => s.activeSessionId);
  const sessions = useCompareStore((s) => s.sessions);
  const isReplying = useCompareStore((s) => s.isReplying);
  const activeSession = sessions.find((s) => s.id === activeSessionId);
  const lastMessage =
    activeSession?.messages[activeSession.messages.length - 1];

  function handleSend() {
    if (!value.trim() || isReplying) return;
    sendPrompt(value);
    setValue("");
  }

  return (
    <div>
      <p className="mb-3 text-[15px] font-bold text-text">Compare</p>
      <p className="mb-2 text-[11px] text-text-secondary">
        Ask one question, get answers from every selected model.
      </p>
      <CompareModelPickerButton />

      {lastMessage && (
        <div className="mt-3 flex flex-col gap-2">
          {selectedModelIds.map((id) => {
            const model = aiModels.find((m) => m.id === id);
            if (!model) return null;
            return (
              <div
                key={id}
                className="rounded-xl border border-border bg-surface p-2.5"
              >
                <p className="text-[10.5px] font-semibold text-accent">
                  {model.name}
                </p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-text">
                  {lastMessage.responses[id] ?? "Thinking..."}
                </p>
              </div>
            );
          })}
        </div>
      )}

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={2}
        placeholder={`Message ${selectedModelIds.length} models...`}
        className="mt-3 w-full resize-none rounded-xl border border-border bg-surface px-3 py-2.5 text-[12.5px] text-text outline-none placeholder:text-text-muted"
      />
      <button
        onClick={handleSend}
        disabled={!value.trim() || isReplying || selectedModelIds.length === 0}
        className="mt-2 w-full rounded-xl bg-accent py-2.5 text-[12.5px] font-bold text-white hover:bg-accent-hover disabled:opacity-40"
      >
        Compare
      </button>
    </div>
  );
}
