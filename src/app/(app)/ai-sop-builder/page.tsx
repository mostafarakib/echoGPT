"use client";

import { useRouter } from "next/navigation";
import {
  Sparkles,
  Globe,
  Users,
  GraduationCap,
  FileStack,
  Plus,
} from "lucide-react";
import { sopTemplates } from "@/lib/data/sop-templates";
import { SopTemplateCard } from "@/components/sop/SopTemplateCard";
import { useSopStore } from "@/store/useSopStore";
import { HoverLift } from "@/components/ui/HoverLift";

const heroStats = [
  {
    icon: Sparkles,
    title: "AI-Enhanced",
    subtitle: "Powered by Google Gemini",
  },
  {
    icon: Globe,
    title: "6 Countries",
    subtitle: "Country-specific guidelines",
  },
  {
    icon: Users,
    title: "4 Templates",
    subtitle: "Academic, Professional, Research, Creative",
  },
];

export default function AiSopBuilderPage() {
  const router = useRouter();
  const history = useSopStore((s) => s.history);

  function goToTemplate(templateId: string) {
    router.push(`/ai-sop-builder/country?templateId=${templateId}`);
  }

  return (
    <div>
      <div className="bg-accent-soft px-4 py-14 text-center sm:px-6">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
          <GraduationCap size={26} />
        </span>

        <h1 className="mt-5 text-[32px] font-extrabold leading-tight text-accent sm:text-[38px]">
          AI-Powered SOP Builder
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-[14.5px] leading-relaxed text-text-secondary">
          Create compelling Statements of Purpose with AI assistance, tailored
          for your dream university and destination country.
        </p>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {heroStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <HoverLift
                key={stat.title}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-6 shadow-[0_4px_16px_rgba(20,20,30,0.06)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={19} />
                </span>
                <p className="text-[15px] font-bold text-text">{stat.title}</p>
                <p className="text-[12px] leading-relaxed text-text-secondary">
                  {stat.subtitle}
                </p>
              </HoverLift>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div id="sop-templates" className="scroll-mt-6">
          <h2 className="text-center text-[22px] font-bold text-accent">
            Choose Your SOP Template
          </h2>
          <p className="mx-auto mt-1.5 max-w-lg text-center text-[13px] text-text-secondary">
            Select the template that best matches your background and the focus
            of your application. Each template is optimized for different types
            of applicants and academic goals.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sopTemplates.map((template) => (
              <SopTemplateCard
                key={template.id}
                template={template}
                onClick={() => goToTemplate(template.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 text-center">
          {history.length === 0 ? (
            <>
              <FileStack size={22} className="mx-auto text-text-muted" />
              <p className="mt-2.5 text-[13.5px] font-medium text-text">
                No SOP history available
              </p>
              <p className="mt-1 text-[12.5px] text-text-secondary">
                Start by generating a new Statement of Purpose!
              </p>
            </>
          ) : (
            <div className="flex flex-col gap-2 text-left">
              <p className="text-[13.5px] font-semibold text-text">Your SOPs</p>
              {history.map((entry) => {
                const template = sopTemplates.find(
                  (t) => t.id === entry.templateId,
                );
                return (
                  <div
                    key={entry.id}
                    className="rounded-lg border border-border px-3.5 py-2.5 text-[13px] text-text"
                  >
                    {entry.fullName || "Untitled"} — {template?.title ?? "SOP"}
                  </div>
                );
              })}
            </div>
          )}
          <button
            onClick={() =>
              document
                .getElementById("sop-templates")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-accent-hover"
          >
            <Plus size={15} />
            Create New SOP
          </button>
        </div>
      </div>
    </div>
  );
}
