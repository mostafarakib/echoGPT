"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { sopCountries } from "@/lib/data/sop-countries";
import { SopCountryCard } from "@/components/sop/SopCountryCard";

function SopCountryPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId") ?? "";

  function goToForm(countryId: string) {
    router.push(
      `/ai-sop-builder/form?templateId=${templateId}&countryId=${countryId}`,
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-start gap-4">
        <button
          onClick={() => router.push("/ai-sop-builder")}
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-[13px] font-medium text-text hover:bg-border"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-text">
            Select Destination Country
          </h1>
          <p className="mt-1 text-[13px] text-text-secondary">
            Choose where you plan to study to get country-specific requirements
            and guidance.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sopCountries.map((country) => (
          <SopCountryCard
            key={country.id}
            country={country}
            onClick={() => goToForm(country.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function SopCountryPage() {
  return (
    <Suspense fallback={null}>
      <SopCountryPageContent />
    </Suspense>
  );
}
