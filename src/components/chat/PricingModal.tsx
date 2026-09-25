"use client";

import { Check } from "lucide-react";
import clsx from "clsx";
import { Modal } from "@/components/ui/Modal";
import { usePricingModalStore } from "@/store/usePricingModalStore";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["5 messages / 5 hrs", "Core model only", "1 connector"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12/mo",
    features: [
      "Unlimited messages",
      "All models",
      "Unlimited connectors",
      "Image & Video Studio",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29/mo",
    features: ["Everything in Pro", "Shared workspaces", "Priority support"],
    highlighted: false,
  },
];

export function PricingModal() {
  const { isOpen, close } = usePricingModalStore();

  return (
    <Modal isOpen={isOpen} onClose={close} maxWidthClassName="max-w-2xl">
      <div className="p-6">
        <h2 className="text-[16px] font-semibold">Upgrade your plan</h2>
        <p className="mt-1 text-[13px] text-text-secondary">
          Get more messages, models, and connectors.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                "rounded-xl border p-4",
                plan.highlighted
                  ? "border-accent bg-accent-soft"
                  : "border-border",
              )}
            >
              <p
                className={clsx(
                  "text-[13.5px] font-semibold",
                  plan.highlighted && "text-accent",
                )}
              >
                {plan.name}
              </p>
              <p className="mt-1 text-[19px] font-bold">{plan.price}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-1.5 text-[12.5px] text-text-secondary"
                  >
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={clsx(
                  "mt-4 w-full rounded-lg py-2 text-[12.5px] font-semibold",
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "bg-border text-text hover:bg-border-strong",
                )}
              >
                {plan.name === "Free" ? "Current plan" : "Choose plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
