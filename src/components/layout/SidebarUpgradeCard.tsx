"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { usePricingModalStore } from "@/store/usePricingModalStore";

export function SidebarUpgradeCard() {
  const isMini = useSidebarStore((s) => s.isMini);
  const openPricing = usePricingModalStore((s) => s.open);

  if (isMini) return null;

  return (
    <div className="mx-2.5 mb-2 rounded-xl border border-border bg-linear-to-b from-accent-soft to-surface p-3.5">
      <p className="mt-2.5 text-[13px] font-semibold text-text">
        Unlock Pro features!
      </p>
      <p className="mt-1 text-[11.5px] leading-relaxed text-text-secondary">
        See your chat activity and performance stats - available on Pro.
      </p>
      <button
        onClick={openPricing}
        className="mt-3 w-full rounded-lg bg-accent py-1.5 text-[12px] font-semibold text-white hover:bg-accent-hover"
      >
        Upgrade to Pro
      </button>
    </div>
  );
}
