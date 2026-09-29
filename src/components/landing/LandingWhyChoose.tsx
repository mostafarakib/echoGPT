"use client";

import { whyChooseItems } from "@/lib/data/landing-content";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function LandingWhyChoose() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Why EchoGPT"
          title="Built for people who use AI daily"
        />
        <div className="mt-8 flex flex-col">
          {whyChooseItems.map((item, i) => (
            <div
              key={item.id}
              className={`flex gap-4 py-5 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <span className="w-8 shrink-0 text-[13px] font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[14.5px] font-bold text-text">
                  {item.title}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
