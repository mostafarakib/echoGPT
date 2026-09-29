"use client";

import { landingFeatures } from "@/lib/data/landing-content";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HoverLift } from "../ui/HoverLift";

export function LandingFeatures() {
  return (
    <section id="features" className="scroll-mt-16 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Features"
            title="Everything in one place"
            subtitle="A single workspace that replaces half a dozen separate AI tools."
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {landingFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <HoverLift
                  className="rounded-2xl border border-border bg-surface p-6"
                  key={feature.id}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} />
                  </span>
                  <p className="mt-4 text-[15.5px] font-bold text-text">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </HoverLift>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
