"use client";

import type { AiModel } from "@/lib/data/models";

interface StoreModelCardProps {
  model: AiModel;
  onTry: (modelId: string) => void;
}

export function StoreModelCard({ model, onTry }: StoreModelCardProps) {
  const Icon = model.icon;

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon size={19} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[14.5px] font-semibold text-text">
            {model.name}
          </p>
          <p className="truncate text-[12px] text-text-muted">
            {model.provider}
          </p>
        </div>
      </div>

      <p className="mt-3 flex-1 text-[12.5px] leading-relaxed text-text-secondary">
        {model.description}
      </p>

      <button
        onClick={() => onTry(model.id)}
        className="mt-4 rounded-lg bg-accent py-2 text-[13px] font-semibold text-white hover:bg-accent-hover"
      >
        Try app
      </button>
    </div>
  );
}
