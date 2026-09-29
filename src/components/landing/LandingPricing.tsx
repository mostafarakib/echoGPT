"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import clsx from "clsx";
import { landingPricingPlans } from "@/lib/data/landing-content";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function LandingPricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-canvas px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free. Upgrade when you need more."
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {landingPricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(
                "flex flex-col rounded-2xl border p-6",
                plan.highlighted
                  ? "border-accent bg-accent-soft"
                  : "border-border bg-surface",
              )}
            >
              <p
                className={clsx(
                  "text-[13px] font-bold",
                  plan.highlighted ? "text-accent" : "text-text-secondary",
                )}
              >
                {plan.name}
              </p>
              <p className="mt-2 text-[30px] font-extrabold text-text">
                {plan.price}
              </p>
              <p className="mb-4 text-[12px] text-text-muted">{plan.period}</p>
              <ul className="mb-5 flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[12.5px] text-text-secondary"
                  >
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/chat"
                className={clsx(
                  "mt-auto rounded-xl py-2.5 text-center text-[13px] font-semibold",
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-border text-text hover:bg-canvas",
                )}
              >
                {plan.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
