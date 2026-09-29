"use client";

import { FileText, Clock, CheckCircle2 } from "lucide-react";
import type { SopCountry } from "@/lib/data/sop-countries";

interface SopCountryCardProps {
  country: SopCountry;
  onClick: () => void;
}

export function SopCountryCard({ country, onClick }: SopCountryCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex min-w-0 flex-col items-start rounded-2xl border border-border bg-surface p-5 text-left hover:border-border-strong hover:bg-accent-soft/20"
    >
      <div className="flex items-center gap-3">
        <span className="text-[22px] font-extrabold text-text">
          {country.code}
        </span>
        <div>
          <p className="text-[15px] font-semibold text-text">{country.name}</p>
          <p className="text-[12px] text-text-secondary">{country.visaType}</p>
        </div>
      </div>

      <div className="mt-3.5 flex flex-col gap-1.5 text-[12.5px] text-text-secondary">
        <span className="flex items-center gap-1.5">
          <FileText size={13} className="shrink-0 text-text-muted" />
          {country.wordCount}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={13} className="shrink-0 text-text-muted" />
          {country.processingTime}
        </span>
      </div>

      <p className="mt-3 text-[11.5px] font-semibold text-text-muted">
        Key Requirements:
      </p>
      <div className="mt-1.5 flex min-w-0 w-full flex-col gap-1">
        {country.requirements.map((req) => (
          <span
            key={req}
            className="flex min-w-0 w-full items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-accent"
          >
            <CheckCircle2 size={12} className="shrink-0" />
            <span className="min-w-0 flex-1 truncate">{req}</span>
          </span>
        ))}
      </div>
    </button>
  );
}
