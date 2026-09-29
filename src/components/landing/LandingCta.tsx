"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LandingCta() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-linear-to-br from-accent to-accent-hover px-8 py-14 text-center text-white">
        <h2 className="text-[26px] font-extrabold sm:text-[30px]">
          Ready to simplify your AI workflow?
        </h2>
        <p className="mx-auto mt-2.5 max-w-md text-[14px] text-white/85">
          Join the people who switched from juggling multiple AI subscriptions
          to one focused workspace.
        </p>
        <Link
          href="/chat"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-accent hover:bg-white/90"
        >
          Try EchoGPT free
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
