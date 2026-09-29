"use client";

import Link from "next/link";
import { EchoLogo } from "../ui/EchoLogo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Models", href: "#models" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function LandingNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
        <div className="flex items-center gap-2 text-[16px] font-bold text-text">
          <EchoLogo size={28} className="rounded-lg" />
          EchoGPT
        </div>
        <div className="hidden items-center gap-7 text-[13.5px] font-medium text-text-secondary md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-text">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <Link
            href="/chat"
            className="rounded-xl border border-border px-4 py-2 text-[13px] font-semibold text-text hover:bg-canvas"
          >
            Sign in
          </Link>
          <Link
            href="/chat"
            className="rounded-xl bg-accent px-4 py-2 text-[13px] font-semibold text-white hover:bg-accent-hover"
          >
            Try EchoGPT
          </Link>
        </div>
      </div>
    </nav>
  );
}
