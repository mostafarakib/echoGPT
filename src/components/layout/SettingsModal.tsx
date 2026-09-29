"use client";

import { useState } from "react";
import { Sliders, Sun, User, CreditCard } from "lucide-react";
import clsx from "clsx";
import { Modal } from "@/components/ui/Modal";
import { ModelSelectionDropdown } from "../ui/ModelSelectionDropdown";
import { useSettingsModalStore } from "@/store/useSettingsModalStore";
import { useSettingsStore } from "@/store/useSettingsStore";
import { aiModels } from "@/lib/data/models";
import { ThemeSelector } from "@/components/ui/ThemeSelector";

const tabs = [
  { id: "general", label: "General", icon: Sliders },
  { id: "appearance", label: "Appearance", icon: Sun },
  { id: "account", label: "Account", icon: User },
  { id: "billing", label: "Billing", icon: CreditCard },
] as const;

export function SettingsModal() {
  const { isOpen, close } = useSettingsModalStore();
  const [activeId, setActiveId] =
    useState<(typeof tabs)[number]["id"]>("general");
  const defaultModelId = useSettingsStore((s) => s.defaultModelId);
  const setDefaultModel = useSettingsStore((s) => s.setDefaultModel);

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
          {activeId === "general" && (
            <>
              <h2 className="text-[15px] font-semibold">General</h2>
              <p className="mb-4 mt-1 text-[13px] leading-relaxed text-text-secondary">
                Basic preferences for how EchoGPT behaves.
              </p>
              <div className="flex items-center justify-between border-t border-border py-4">
                <div>
                  <p className="text-[13.5px] font-medium text-text">
                    Default Model
                  </p>
                  <p className="text-[12px] text-text-secondary">
                    Used when you start a new chat
                  </p>
                </div>
                <ModelSelectionDropdown
                  models={aiModels}
                  selectedId={defaultModelId}
                  onChange={setDefaultModel}
                  align="right"
                />
              </div>
            </>
          )}

          {activeId === "appearance" && (
            <>
              <h2 className="text-[15px] font-semibold">Appearance</h2>
              <p className="mb-4 mt-1 text-[13px] leading-relaxed text-text-secondary">
                Choose how EchoGPT looks on this device.
              </p>
              <div className="border-t border-border py-4">
                <p className="mb-3 text-[13.5px] font-medium text-text">
                  Color Theme
                </p>
                <ThemeSelector />
              </div>
            </>
          )}

          {activeId === "account" && (
            <>
              <h2 className="text-[15px] font-semibold">Account</h2>
              <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
                Profile details and sign-in methods will live here.
              </p>
            </>
          )}

          {activeId === "billing" && (
            <>
              <h2 className="text-[15px] font-semibold">Billing</h2>
              <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
                Plan, invoices, and payment methods will live here.
              </p>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
