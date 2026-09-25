"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { Modal } from "@/components/ui/Modal";
import { usePricingModalStore } from "@/store/usePricingModalStore";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    features: ["5 messages / 5 hrs", "Core model only", "1 connector"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12/mo",
    features: [
      "Unlimited messages",
      "All models",
      "Unlimited connectors",
      "Image & Video Studio",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: "$29/mo",
    features: ["Everything in Pro", "Shared workspaces", "Priority support"],
  },
];

const CURRENT_PLAN_ID = "free"; // swap for real subscription state once there's a backend

export function PricingModal() {
  const { isOpen, close } = usePricingModalStore();
  const [selectedId, setSelectedId] = useState(CURRENT_PLAN_ID);

  return (
    <Modal isOpen={isOpen} onClose={close} maxWidthClassName="max-w-2xl">
      <div className="p-6">
        <h2 className="text-[16px] font-semibold">Upgrade your plan</h2>
        <p className="mt-1 text-[13px] text-text-secondary">
          Get more messages, models, and connectors.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {plans.map((plan) => {
            const isSelected = plan.id === selectedId;
            const isCurrent = plan.id === CURRENT_PLAN_ID;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedId(plan.id)}
                className={clsx(
                  "rounded-xl border p-4 text-left transition-colors",
                  isSelected
                    ? "border-accent bg-accent-soft"
                    : "border-border hover:border-border-strong",
                )}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={clsx(
                      "text-[13.5px] font-semibold",
                      isSelected && "text-accent",
                    )}
                  >
                    {plan.name}
                  </p>
                  {isCurrent && (
                    <span className="rounded-full bg-border px-2 py-0.5 text-[10px] font-semibold text-text-secondary">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[19px] font-bold">{plan.price}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-1.5 text-[12.5px] text-text-secondary"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className={clsx(
                    "mt-4 w-full rounded-lg py-2 text-center text-[12.5px] font-semibold",
                    isCurrent
                      ? "bg-border text-text-secondary"
                      : isSelected
                        ? "bg-accent text-white"
                        : "bg-border text-text",
                  )}
                >
                  {isCurrent ? "Current plan" : `Choose ${plan.name}`}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
