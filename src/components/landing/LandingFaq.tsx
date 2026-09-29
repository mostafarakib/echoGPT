"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { faqItems } from "@/lib/data/landing-content";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function LandingFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="scroll-mt-16 bg-canvas px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-8 flex flex-col">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-border">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-3 py-5 text-left text-[14.5px] font-semibold text-text"
                >
                  {item.question}
                  <ChevronDown
                    size={16}
                    className={clsx(
                      "shrink-0 text-text-muted transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "grid transition-all",
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13.5px] leading-relaxed text-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
