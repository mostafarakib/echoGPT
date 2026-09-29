"use client";

import { ThemeSelector } from "@/components/ui/ThemeSelector";
import { ModelSelectionDropdown } from "../ui/ModelSelectionDropdown";
import { useSettingsStore } from "@/store/useSettingsStore";
import { usePricingModalStore } from "@/store/usePricingModalStore";
import { aiModels } from "@/lib/data/models";

export function ExtensionSettingsView() {
  const defaultModelId = useSettingsStore((s) => s.defaultModelId);
  const setDefaultModel = useSettingsStore((s) => s.setDefaultModel);
  const openPricing = usePricingModalStore((s) => s.open);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      <p className="mb-3.5 text-[16px] font-bold text-text">Settings</p>

      <p className="mb-2 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        Appearance
      </p>
      <ThemeSelector />

      <p className="mb-2 mt-5 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        General
      </p>
      <div className="flex items-center justify-between border-t border-border py-2.5 text-[12.5px]">
        <span className="text-text">Default model</span>
        <ModelSelectionDropdown
          models={aiModels}
          selectedId={defaultModelId}
          onChange={setDefaultModel}
          align="right"
        />
      </div>

      <p className="mb-2 mt-5 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        Account
      </p>
      <div className="flex items-center justify-between border-t border-border py-2.5 text-[12.5px]">
        <span className="text-text">Rafi Hasan</span>
        <span className="text-[11px] text-text-muted">Free plan</span>
      </div>

      <div className="mt-4 rounded-xl bg-linear-to-br from-accent to-accent-hover p-4 text-white">
        <p className="text-[13px] font-bold">Unlock Pro features</p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-white/85">
          Unlimited messages, all models, and unlimited connectors.
        </p>
        <button
          onClick={openPricing}
          className="mt-2.5 rounded-lg bg-white px-3.5 py-1.5 text-[11.5px] font-bold text-accent hover:bg-white/90"
        >
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}
