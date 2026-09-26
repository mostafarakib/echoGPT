// src/components/history/HistoryUpgradeGate.tsx
"use client";

import { usePricingModalStore } from "@/store/usePricingModalStore";

export function HistoryUpgradeOverlay() {
  const openPricing = usePricingModalStore((s) => s.open);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-56 flex-col items-center justify-end gap-3 rounded-b-2xl bg-linear-to-b from-transparent via-accent/70 to-accent pb-6">
      <button
        onClick={openPricing}
        className="pointer-events-auto rounded-full bg-white px-5 py-2 text-[13.5px] font-semibold text-accent hover:bg-white/90"
      >
        Upgrade
      </button>
      <p className="max-w-xs px-4 text-center text-[12.5px] text-white/90">
        To view your complete history, please upgrade to unlock full access and
        enjoy additional features.
      </p>
    </div>
  );
}
