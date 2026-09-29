"use client";

import { aiModels } from "@/lib/data/models";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function LandingModels() {
  return (
    <section id="models" className="scroll-mt-16 bg-canvas px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="AI Models"
          title="Many models, one subscription"
          subtitle="Access leading models — including GPT, Claude, and Gemini — without paying for separate plans."
        />
        <div className="mt-9 flex flex-col gap-2.5">
          {aiModels.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                className="flex items-center gap-3.5 rounded-2xl border border-border bg-surface px-4.5 py-3.5"
              >
                <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="text-[13.5px] font-semibold text-text">
                    {model.name}
                  </p>
                  <p className="text-[11.5px] text-text-muted">
                    {model.provider}
                  </p>
                </div>
                <p className="ml-auto hidden max-w-xs text-right text-[12.5px] text-text-secondary sm:block">
                  {model.brief}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
