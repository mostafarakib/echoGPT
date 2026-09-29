"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { landingPricingPlans } from "@/lib/data/landing-content";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HoverLift } from "../ui/HoverLift";

export function LandingPricing() {
  const [selectedId, setSelectedId] = useState(
    landingPricingPlans.find((p) => p.popular)?.id ?? landingPricingPlans[0].id,
  );

  return (
    <section id="pricing" className="scroll-mt-16 bg-canvas px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            subtitle="Start free. Upgrade when you need more."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {landingPricingPlans.map((plan) => {
              const isSelected = plan.id === selectedId;
              return (
                <HoverLift
                  key={plan.id}
                  className={clsx(
                    "relative flex flex-col rounded-2xl border p-6 text-left transition-colors",
                    isSelected
                      ? "border-accent bg-accent-soft"
                      : "border-border bg-surface hover:border-border-strong",
                  )}
                  onClick={() => setSelectedId(plan.id)}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10.5px] font-bold text-white">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <p
                      className={clsx(
                        "text-[13px] font-bold",
                        isSelected ? "text-accent" : "text-text-secondary",
                      )}
                    >
                      {plan.name}
                    </p>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white"
                        >
                          <Check size={12} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <p className="mt-2 text-[30px] font-extrabold text-text">
                    {plan.price}
                  </p>
                  <p className="mb-4 text-[12px] text-text-muted">
                    {plan.period}
                  </p>
                  <ul className="mb-5 flex flex-col gap-2">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[12.5px] text-text-secondary"
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#pricing"
                    onClick={(e) => e.stopPropagation()}
                    className={clsx(
                      "mt-auto rounded-xl py-2.5 text-center text-[13px] font-semibold",
                      isSelected
                        ? "bg-accent text-white hover:bg-accent-hover"
                        : "border border-border text-text hover:bg-canvas",
                    )}
                  >
                    {plan.ctaLabel}
                  </Link>
                </HoverLift>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
