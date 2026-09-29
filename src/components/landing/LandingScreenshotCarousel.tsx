"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { landingScreenshots } from "@/lib/data/landing-screenshots";

const AUTOPLAY_INTERVAL_MS = 4500;

export function LandingScreenshotCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex(
      (index + landingScreenshots.length) % landingScreenshots.length,
    );
  }, []);

  useEffect(() => {
    if (isPaused || landingScreenshots.length <= 1) return;
    const id = setInterval(
      () => setActiveIndex((i) => (i + 1) % landingScreenshots.length),
      AUTOPLAY_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [isPaused]);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeIndex, goTo]);

  if (landingScreenshots.length === 0) return null;
  const active = landingScreenshots[activeIndex];

  return (
    <div
      className="mx-auto mt-20 max-w-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_rgba(20,20,30,0.16)]">
        <div className="relative aspect-16/8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority={activeIndex === 0}
                className="object-contain object-top"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {landingScreenshots.length > 1 && (
          <>
            <button
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-md hover:bg-surface"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-md hover:bg-surface"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {landingScreenshots.map((shot, i) => (
          <button
            key={shot.id}
            onClick={() => goTo(i)}
            aria-label={`Show ${shot.caption}`}
            className={clsx(
              "h-2 rounded-full transition-all",
              i === activeIndex
                ? "w-6 bg-accent"
                : "w-2 bg-border hover:bg-border-strong",
            )}
          />
        ))}
      </div>
      <p className="mt-2.5 text-center text-[12.5px] text-text-secondary">
        {active.caption}
      </p>
    </div>
  );
}
