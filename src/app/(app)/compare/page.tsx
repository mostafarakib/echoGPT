"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";
import { CompareModeTabs } from "@/components/compare/CompareModeTabs";
import { CompareModelPickerButton } from "@/components/compare/CompareModelPickerButton";
import { CompareResponseCard } from "@/components/compare/CompareResponseCard";
import { aiModels } from "@/lib/data/models";
import { useCompareStore } from "@/store/useCompareStore";
import { usePricingModalStore } from "@/store/usePricingModalStore";

export default function ComparePage() {
  const [value, setValue] = useState("");
  const sessions = useCompareStore((s) => s.sessions);
  const activeSessionId = useCompareStore((s) => s.activeSessionId);
  const selectedModelIds = useCompareStore((s) => s.selectedModelIds);
  const mode = useCompareStore((s) => s.mode);
  const focusModelId = useCompareStore((s) => s.focusModelId);
  const setFocusModel = useCompareStore((s) => s.setFocusModel);
  const isReplying = useCompareStore((s) => s.isReplying);
  const newComparison = useCompareStore((s) => s.newComparison);
  const switchSession = useCompareStore((s) => s.switchSession);
  const sendPrompt = useCompareStore((s) => s.sendPrompt);
  const openPricing = usePricingModalStore((s) => s.open);

  const activeSession = sessions.find((s) => s.id === activeSessionId) ?? null;
  const modelIdsToShow = activeSession?.modelIds ?? selectedModelIds;

  function handleSend() {
    if (!value.trim() || isReplying || selectedModelIds.length === 0) return;
    sendPrompt(value);
    setValue("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-3 border-b border-border px-4 py-3 sm:px-6">
        <CompareModeTabs />
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={newComparison}
            className="rounded-full border border-border px-3 py-1.5 text-[12.5px] font-medium text-text-secondary hover:bg-border"
          >
            + New comparison
          </button>
          {sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => switchSession(session.id)}
              className={clsx(
                "rounded-full border px-3 py-1.5 text-[12.5px] font-medium",
                session.id === activeSessionId
                  ? "border-accent text-accent"
                  : "border-border text-text-secondary hover:bg-border",
              )}
            >
              {session.title}
            </button>
          ))}
        </div>

        {mode === "focus" && modelIdsToShow.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {modelIdsToShow.map((id) => {
              const model = aiModels.find((m) => m.id === id);
              if (!model) return null;
              return (
                <button
                  key={id}
                  onClick={() => setFocusModel(id)}
                  className={clsx(
                    "rounded-full border px-3.5 py-1.5 text-[13px] font-medium",
                    focusModelId === id
                      ? "border-accent text-accent"
                      : "border-border text-text-secondary hover:bg-border",
                  )}
                >
                  {model.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          {!activeSession && (
            <p className="py-16 text-center text-[13.5px] text-text-secondary">
              Ask a question to compare responses side by side.
            </p>
          )}
          {activeSession?.messages.map((message) => (
            <div key={message.id} className="flex flex-col gap-3">
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl bg-accent-soft px-4 py-2.5 text-[13.5px] text-text">
                  {message.prompt}
                </div>
              </div>

              {mode === "compare" ? (
                <div
                  className={clsx(
                    "grid gap-3",
                    modelIdsToShow.length > 1
                      ? "sm:grid-cols-2"
                      : "grid-cols-1",
                  )}
                >
                  {modelIdsToShow.map((id) => (
                    <CompareResponseCard
                      key={id}
                      modelId={id}
                      content={message.responses[id]}
                    />
                  ))}
                </div>
              ) : (
                <CompareResponseCard
                  modelId={focusModelId}
                  content={message.responses[focusModelId]}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4 pt-1 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface shadow-[0_8px_30px_rgba(20,20,30,0.12)]">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder={`Message ${selectedModelIds.length} model${selectedModelIds.length === 1 ? "" : "s"}...`}
            className="max-h-40 w-full resize-none bg-transparent px-4 pt-3.5 pb-2 text-[14px] text-text outline-none placeholder:text-text-muted"
          />
          <div className="flex items-center justify-between px-2.5 pb-2.5">
            <CompareModelPickerButton />
            <button
              onClick={handleSend}
              disabled={
                !value.trim() || isReplying || selectedModelIds.length === 0
              }
              className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white hover:bg-accent-hover disabled:opacity-40"
            >
              Compare
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
        <p className="mx-auto mt-2 max-w-3xl text-center text-[11.5px] text-text-muted">
          4 of 5 comparisons left today · resets in a day ·{" "}
          <button onClick={openPricing} className="text-accent hover:underline">
            upgrade
          </button>{" "}
          for 50 a day
        </p>
      </div>
    </div>
  );
}
