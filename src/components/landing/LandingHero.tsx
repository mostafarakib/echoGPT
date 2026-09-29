"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { LandingScreenshotCarousel } from "@/components/landing/LandingScreenshotCarousel";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,var(--color-accent-soft),transparent_70%)] px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-24">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.span
          variants={item}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-text-secondary"
        >
          <Sparkles size={13} className="text-accent" />
          Now with many leading AI models in one chat
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-3xl text-[38px] font-extrabold leading-[1.08] tracking-tight text-text sm:text-[52px]"
        >
          One workspace for every <span className="text-accent">AI model</span>{" "}
          you use
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-text-secondary sm:text-[16.5px]"
        >
          EchoGPT brings chat, image and video generation, model comparisons,
          and productivity tools into a single, focused workspace — so you stop
          juggling tabs and subscriptions.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
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
        </motion.div>

        <motion.p
          variants={item}
          className="mt-4 text-[12.5px] text-text-muted"
        >
          No credit card required · 5 messages free every 5 hours
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        id="preview"
        className="scroll-mt-6"
      >
        <LandingScreenshotCarousel />
      </motion.div>
    </section>
  );
}
