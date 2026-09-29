"use client";

import { useState } from "react";
import { Clock, Lightbulb, Send } from "lucide-react";
import clsx from "clsx";
import { jobAnalysisTasks } from "@/lib/data/job-analysis-tasks";
import { JobAnalysisFeatureCard } from "@/components/job-analysis/JobAnalysisFeatureCard";
import { AttachmentButton } from "@/components/ui/AttachmentButton";
import {
  AttachmentList,
  type Attachment,
} from "@/components/ui/AttachmentList";
import { useJobAnalysisStore } from "@/store/useJobAnalysisStore";
import { useRightPanelStore } from "@/store/useRightPanelStore";

export default function AiJobAnalysisPage() {
  const [jobText, setJobText] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const activeTaskId = useJobAnalysisStore((s) => s.activeTaskId);
  const setActiveTask = useJobAnalysisStore((s) => s.setActiveTask);
  const results = useJobAnalysisStore((s) => s.results);
  const isAnalyzing = useJobAnalysisStore((s) => s.isAnalyzing);
  const analyze = useJobAnalysisStore((s) => s.analyze);
  const openHistory = useRightPanelStore((s) => s.open);

  const activeTask = jobAnalysisTasks.find((t) => t.id === activeTaskId);

  function handleFilesSelected(files: File[]) {
    setAttachments((prev) => [
      ...prev,
      ...files.map((file) => ({ id: crypto.randomUUID(), file })),
    ]);
  }
  function handleRemoveAttachment(id: string) {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  }
  function handleAnalyze() {
    analyze(jobText);
    setJobText("");
  }

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col overflow-y-auto px-4 py-10 sm:px-6">
      <h1 className="text-center text-[26px] font-extrabold leading-tight text-text">
        EchoGPT – AI Job Insight{" "}
        <span className="inline-block -rotate-1 rounded-lg bg-accent px-3 py-1 text-white">
          Assistant
        </span>
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {jobAnalysisTasks.map((task) => (
          <JobAnalysisFeatureCard
            key={task.id}
            task={task}
            isActive={activeTaskId === task.id}
            onClick={() =>
              setActiveTask(activeTaskId === task.id ? null : task.id)
            }
          />
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-surface shadow-[0_8px_30px_rgba(20,20,30,0.08)]">
        <div className="flex items-center justify-between px-4 pt-3.5">
          <span className="text-[13px] text-text-muted">Step 1 of 1</span>
          <div className="flex items-center gap-1.5">
            <AttachmentButton
              onFilesSelected={handleFilesSelected}
              accept=".pdf,.doc,.docx,image/*"
            />
            <button
              onClick={() => openHistory("job-analysis-history")}
              title="History"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:bg-border"
            >
              <Clock size={16} />
            </button>
          </div>
        </div>

        <textarea
          value={jobText}
          onChange={(e) => setJobText(e.target.value)}
          rows={4}
          placeholder="Paste job title & description here..."
          className="w-full resize-none bg-transparent px-4 pb-2 pt-3 text-[14px] text-text outline-none placeholder:text-text-muted"
        />

        <div className="px-4">
          <AttachmentList
            attachments={attachments}
            onRemove={handleRemoveAttachment}
          />
        </div>

        <div className="flex items-center justify-between px-4 pb-4 pt-3">
          <span
            className={clsx(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium",
              activeTask
                ? "border-accent bg-accent-soft text-accent"
                : "border-accent/40 text-accent",
            )}
          >
            <Lightbulb size={14} />
            {activeTask ? activeTask.title : "Job Insights"}
          </span>

          <button
            onClick={handleAnalyze}
            disabled={!jobText.trim() || isAnalyzing}
            className="flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-[13.5px] font-semibold text-white hover:bg-accent-hover disabled:opacity-40"
          >
            Analyze Job
            <Send size={14} />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {isAnalyzing && (
          <div className="rounded-xl border border-border bg-surface px-4 py-3 text-[13.5px] text-text-secondary">
            Analyzing…
          </div>
        )}
        {[...results].reverse().map((result) => (
          <div
            key={result.id}
            className="rounded-xl border border-border bg-surface px-4 py-3"
          >
            <p className="text-[11px] font-semibold text-accent">
              {jobAnalysisTasks.find((t) => t.id === result.taskId)?.title ??
                "Job Insight"}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-text">
              {result.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
