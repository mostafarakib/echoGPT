"use client";

import { useState } from "react";
import { Sliders, Sun, User, CreditCard } from "lucide-react";
import clsx from "clsx";
import { Modal } from "@/components/ui/Modal";
import { useSettingsModalStore } from "@/store/useSettingsModalStore";

const tabs = [
  {
    id: "general",
    label: "General",
    icon: Sliders,
    desc: "Placeholder settings panel — populated when each page is designed.",
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Sun,
    desc: "Theme, density, and layout preferences will live here.",
  },
  {
    id: "account",
    label: "Account",
    icon: User,
    desc: "Profile details and sign-in methods will live here.",
  },
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    desc: "Plan, invoices, and payment methods will live here.",
  },
] as const;

export function SettingsModal() {
  const { isOpen, close } = useSettingsModalStore();
  const [activeId, setActiveId] =
    useState<(typeof tabs)[number]["id"]>("general");
  const active = tabs.find((t) => t.id === activeId)!;

  return (
    <Modal isOpen={isOpen} onClose={close} maxWidthClassName="max-w-2xl">
      <div className="flex h-120">
        <div className="w-44 shrink-0 border-r border-border bg-surface-sidebar p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={clsx(
                  "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px]",
                  activeId === tab.id
                    ? "bg-accent-soft font-semibold text-accent"
                    : "text-text-secondary hover:bg-border",
                )}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <h2 className="text-[15px] font-semibold">{active.label}</h2>
          <p className="mb-4 mt-1 text-[13px] leading-relaxed text-text-secondary">
            {active.desc}
          </p>
        </div>
      </div>
    </Modal>
  );
}
