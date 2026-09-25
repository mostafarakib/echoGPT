"use client";

import { promptStarters } from "@/lib/data/prompt-starters";
import { aiModels } from "@/lib/data/models";
import { useChatStore } from "@/store/useChatStore";

export function ChatEmptyState() {
  const sendMessage = useChatStore((s) => s.sendMessage);
  const selectedModelId = useChatStore((s) => s.selectedModelId);
  const selectedModel =
    aiModels.find((m) => m.id === selectedModelId) ?? aiModels[0];
  const ModelIcon = selectedModel.icon;

  return (
    <div className="mx-auto flex min-h-full max-w-2xl flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
        <ModelIcon size={18} />
      </div>
      <h1 className="mt-3 text-[17px] font-semibold">{selectedModel.name}</h1>
      <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
        {selectedModel.description}
      </p>

      <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {promptStarters.map((starter) => {
          const Icon = starter.icon;
          return (
            <button
              key={starter.id}
              onClick={() => sendMessage(starter.presetPrompt)}
              className="flex flex-col items-start rounded-xl border border-border bg-surface p-4 text-left hover:border-border-strong hover:bg-accent-soft/40"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon size={16} />
              </span>
              <p className="mt-2.5 text-[13.5px] font-semibold text-text">
                {starter.title}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-text-secondary">
                {starter.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
