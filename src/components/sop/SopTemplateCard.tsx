"use client";

import clsx from "clsx";
import type { SopTemplate } from "@/lib/data/sop-templates";

interface SopTemplateCardProps {
  template: SopTemplate;
  onClick: () => void;
  compact?: boolean;
}

export function SopTemplateCard({
  template,
  onClick,
  compact,
}: SopTemplateCardProps) {
  const Icon = template.icon;

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex flex-col items-start rounded-2xl border border-border bg-surface text-left hover:border-border-strong hover:bg-accent-soft/30",
        compact ? "p-4" : "p-5",
      )}
    >
      {!compact && (
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon size={17} />
        </span>
      )}
      <p
        className={clsx(
          "font-semibold text-text",
          compact ? "text-[13.5px]" : "mt-3 text-[15px]",
        )}
      >
        {template.title}
      </p>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-text-secondary">
        {template.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {template.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
