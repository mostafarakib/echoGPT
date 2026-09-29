"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/data/landing-content";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HoverLift } from "../ui/HoverLift";

export function LandingTestimonials() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by people who ship fast"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <HoverLift
                key={t.id}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3.5 text-[13.5px] leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold text-text">
                      {t.name}
                    </p>
                    <p className="text-[11.5px] text-text-muted">{t.role}</p>
                  </div>
                </div>
              </HoverLift>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
