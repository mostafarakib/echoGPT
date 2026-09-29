"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, FileText, Globe, Clock } from "lucide-react";
import { sopTemplates } from "@/lib/data/sop-templates";
import { sopCountries } from "@/lib/data/sop-countries";
import { useSopStore } from "@/store/useSopStore";

function SopFormField({
  label,
  required,
  placeholder,
  value,
  onChange,
  textarea,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  return (
    <div className="mt-4">
      <label className="text-[13px] font-medium text-text">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          placeholder={placeholder}
          className="mt-1.5 w-full resize-none rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-[13.5px] text-text outline-none placeholder:text-text-muted"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-1.5 w-full rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-[13.5px] text-text outline-none placeholder:text-text-muted"
        />
      )}
    </div>
  );
}

function SopFormPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId") ?? "";
  const countryId = searchParams.get("countryId") ?? "";

  const template = sopTemplates.find((t) => t.id === templateId);
  const country = sopCountries.find((c) => c.id === countryId);
  const addToHistory = useSopStore((s) => s.addToHistory);

  const [fullName, setFullName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [targetUniversity, setTargetUniversity] = useState("");
  const [background, setBackground] = useState("");
  const [careerGoals, setCareerGoals] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isGenerating, setGenerating] = useState(false);
  const [generatedSop, setGeneratedSop] = useState<string | null>(null);

  if (!template || !country) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-[13.5px] text-text-secondary">
          Missing template or country selection.{" "}
          <button
            onClick={() => router.push("/ai-sop-builder")}
            className="text-accent hover:underline"
          >
            Start over
          </button>
        </p>
      </div>
    );
  }

  const isFormValid =
    fullName.trim() &&
    fieldOfStudy.trim() &&
    degreeLevel.trim() &&
    targetUniversity.trim();

  function handleGenerate() {
    if (!isFormValid) return;
    setGenerating(true);
    // Mocked generation — swap for a real API call once the backend exists.
    setTimeout(() => {
      setGeneratedSop(
        `Placeholder Statement of Purpose for ${fullName}, applying to a ${degreeLevel} in ${fieldOfStudy} at ${targetUniversity} (${country!.name}). Wire up the real generation API here.`,
      );
      addToHistory({ templateId, countryId, fullName });
      setGenerating(false);
    }, 1200);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <div className="flex items-start gap-4">
        <button
          onClick={() =>
            router.push(`/ai-sop-builder/country?templateId=${templateId}`)
          }
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-[13px] font-medium text-text hover:bg-border"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-text">Build Your SOP</h1>
          <p className="mt-1 text-[13px] text-text-secondary">
            Fill in your details to create a personalized Statement of Purpose.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-4">
          <p className="flex items-center gap-2 text-[12.5px] font-semibold text-text-secondary">
            <FileText size={14} className="text-accent" />
            Selected Template
          </p>
          <p className="mt-2 text-[15px] font-bold text-text">
            {template.title}
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-text-secondary">
            {template.description}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-soft px-2 py-0.5 text-[10.5px] font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-4">
          <p className="flex items-center gap-2 text-[12.5px] font-semibold text-text-secondary">
            <Globe size={14} className="text-accent" />
            Destination Country
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[16px] font-extrabold text-text">
              {country.code}
            </span>
            <p className="text-[15px] font-bold text-text">{country.name}</p>
          </div>
          <div className="mt-2 flex flex-col gap-1 text-[12px] text-text-secondary">
            <span className="flex items-center gap-1.5">
              <FileText size={12} className="text-text-muted" />
              {country.wordCount}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-text-muted" />
              {country.processingTime.replace("Processing: ", "")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
        <p className="text-[15px] font-semibold text-text">
          Personal Information
        </p>
        <SopFormField
          label="Full Name"
          required
          placeholder="Enter your full name"
          value={fullName}
          onChange={setFullName}
        />
        <SopFormField
          label="Field of Study"
          required
          placeholder="e.g., Computer Science, Biology"
          value={fieldOfStudy}
          onChange={setFieldOfStudy}
        />
        <SopFormField
          label="Degree Level"
          required
          placeholder="e.g., Master's, PhD"
          value={degreeLevel}
          onChange={setDegreeLevel}
        />
        <SopFormField
          label="Target University"
          required
          placeholder="Enter university name"
          value={targetUniversity}
          onChange={setTargetUniversity}
        />
        <SopFormField
          label="Academic & Professional Background"
          placeholder="Briefly describe your relevant background..."
          value={background}
          onChange={setBackground}
          textarea
        />
        <SopFormField
          label="Career Goals"
          placeholder="What do you hope to achieve after this program?"
          value={careerGoals}
          onChange={setCareerGoals}
          textarea
        />
        <SopFormField
          label="Additional Notes"
          placeholder="Anything else you'd like included..."
          value={additionalNotes}
          onChange={setAdditionalNotes}
          textarea
        />

        <button
          onClick={handleGenerate}
          disabled={!isFormValid || isGenerating}
          className="mt-5 w-full rounded-xl bg-accent py-3 text-[14px] font-semibold text-white hover:bg-accent-hover disabled:opacity-40"
        >
          {isGenerating ? "Generating..." : "Generate SOP"}
        </button>
      </div>

      {generatedSop && (
        <div className="mt-5 rounded-2xl border border-border bg-surface p-5">
          <p className="text-[13px] font-semibold text-accent">
            Your Statement of Purpose
          </p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-text">
            {generatedSop}
          </p>
        </div>
      )}
    </div>
  );
}

export default function SopFormPage() {
  return (
    <Suspense fallback={null}>
      <SopFormPageContent />
    </Suspense>
  );
}
