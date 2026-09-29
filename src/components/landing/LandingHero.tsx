"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,var(--color-accent-soft),transparent_70%)] px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-24">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-text-secondary">
        <Sparkles size={13} className="text-accent" />
        Now with many leading AI models in one chat
      </span>

      <h1 className="mx-auto mt-6 max-w-3xl text-[38px] font-extrabold leading-[1.08] tracking-tight text-text sm:text-[52px]">
        One workspace for every <span className="text-accent">AI model</span>{" "}
        you use
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-text-secondary sm:text-[16.5px]">
        EchoGPT brings chat, image and video generation, model comparisons, and
        productivity tools into a single, focused workspace — so you stop
        juggling tabs and subscriptions.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/chat"
          className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-accent-hover"
        >
          Try EchoGPT free
          <ArrowRight size={15} />
        </Link>
        <a
          href="#preview"
          className="rounded-xl border border-border bg-surface px-6 py-3.5 text-[14.5px] font-semibold text-text hover:bg-canvas"
        >
          See how it works
        </a>
      </div>
      <p className="mt-4 text-[12.5px] text-text-muted">
        No credit card required · 5 messages free every 5 hours
      </p>

      <div
        id="preview"
        className="mx-auto mt-14 max-w-3xl scroll-mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_rgba(20,20,30,0.16)]"
      >
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <div className="flex h-72 sm:h-80">
          <div className="hidden w-44 shrink-0 flex-col gap-2.5 border-r border-border bg-surface-sidebar p-3.5 sm:flex">
            {[70, 50, 60, 45, 55].map((w, i) => (
              <span
                key={i}
                className="h-2.5 rounded bg-border"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="max-w-[70%] rounded-2xl bg-canvas px-3.5 py-2.5 text-left text-[12px] text-text-secondary">
              Help me plan a 7-day trip to Japan
            </div>
            <div className="ml-auto max-w-[70%] rounded-2xl bg-accent px-3.5 py-2.5 text-left text-[12px] text-white">
              Here&apos;s a draft itinerary — Tokyo (3 days), Kyoto (2 days),
              Osaka (2 days). Want specific neighborhoods?
            </div>
            <div className="max-w-[70%] rounded-2xl bg-canvas px-3.5 py-2.5 text-left text-[12px] text-text-secondary">
              Yes, focus on food
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
