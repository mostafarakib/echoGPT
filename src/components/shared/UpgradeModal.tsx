"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import clsx from "clsx";
import { Modal } from "@/components/ui/Modal";
import { useUpgradeModalStore } from "@/store/useUpgradeModalStore";
import { premiumFeatureCategories } from "@/lib/data/premium-features";
import { billingCycles } from "@/lib/data/billing-cycles";
import { aiModels } from "@/lib/data/models";

export function UpgradeModal() {
  const { isOpen, close } = useUpgradeModalStore();
  const [cycleId, setCycleId] = useState(billingCycles[0].id);
  const cycle = billingCycles.find((c) => c.id === cycleId)!;

  return (
    <Modal isOpen={isOpen} onClose={close} maxWidthClassName="max-w-4xl">
      <div className="px-6 pt-6">
        <h2 className="text-center text-[19px] font-bold text-accent">
          Upgrade your plan
        </h2>
        <p className="mt-1 text-center text-[13px] text-text-secondary">
          Want to get more out of EchoGPT? Subscribe to one of our professional
          plans.
        </p>
      </div>
      <div className="mt-4 h-px bg-border" />

      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
        {/* Left: feature list */}
        <div className="rounded-2xl border border-accent/30 p-5">
          <p className="text-[15px] font-semibold text-text">
            Unlock all premium features
          </p>
          <div className="mt-2.5 h-px bg-border" />

          <div className="mt-4 flex max-h-80 flex-col gap-4 overflow-y-auto pr-1">
            {premiumFeatureCategories.map((category) => (
              <div key={category.id}>
                <p className="text-[12.5px] font-semibold text-text">
                  {category.title}
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {category.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.id}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          className={clsx(
                            "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg",
                            feature.badgeClassName,
                          )}
                        >
                          <Icon size={14} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[12.5px] font-medium text-text">
                            {feature.title}
                          </p>
                          <p className="text-[11px] leading-relaxed text-text-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: billing cycle, models, price */}
        <div className="rounded-2xl border border-border p-5">
          <div className="flex items-center gap-5 border-b border-border pb-2.5">
            {billingCycles.map((c) => (
              <button
                key={c.id}
                onClick={() => setCycleId(c.id)}
                className={clsx(
                  "relative pb-2 text-[13px] font-medium",
                  cycleId === c.id
                    ? "text-text"
                    : "text-text-secondary hover:text-text",
                )}
              >
                {c.label}
                {cycleId === c.id && (
                  <span className="absolute inset-x-0 -bottom-[11px] h-0.5 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {aiModels.map((model) => {
              const Icon = model.icon;
              return (
                <div key={model.id} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Icon size={13} />
                  </span>
                  <span className="text-[13px] text-text">{model.name}</span>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-[12.5px] leading-relaxed text-text-secondary">
            Experience the benefits of Pro membership with unlimited chats for
            one {cycle.label.toLowerCase()} period.
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-accent">
            <Sparkles size={14} />
            <span className="text-[12.5px] font-medium">
              {cycle.label} Plan
            </span>
          </div>
          <p className="mt-1 text-[26px] font-bold text-accent">
            USD {cycle.price}
          </p>
          <p className="text-[11.5px] text-text-muted">{cycle.billedNote}</p>

          <button className="mt-4 w-full rounded-xl bg-accent py-3 text-[14px] font-semibold text-white hover:bg-accent-hover">
            Upgrade Now
          </button>
        </div>
      </div>
    </Modal>
  );
}
