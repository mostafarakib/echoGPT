"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { aiModels } from "@/lib/data/models";

interface CompareResponseCardProps {
  modelId: string;
  content: string | undefined;
}

export function CompareResponseCard({
  modelId,
  content,
}: CompareResponseCardProps) {
  const [copied, setCopied] = useState(false);
  const model = aiModels.find((m) => m.id === modelId);
  if (!model) return null;
  const Icon = model.icon;

  function handleCopy() {
    if (!content) return;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="flex items-center justify-between bg-surface-sidebar px-3.5 py-2">
        <span className="flex items-center gap-2 text-[13px] font-medium text-text">
          <Icon size={15} className="text-accent" />
          {model.name}
        </span>
        <button
          onClick={handleCopy}
          title="Copy"
          className="text-text-muted hover:text-text"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className="bg-surface px-3.5 py-3 text-[13.5px] leading-relaxed text-text">
        {content ?? <span className="text-text-muted">Thinking…</span>}
      </div>
    </div>
  );
}
