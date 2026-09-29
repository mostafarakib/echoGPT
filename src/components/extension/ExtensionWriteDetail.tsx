"use client";

import { useState } from "react";
import { ToggleGroup } from "@/components/ui/ToggleGroup";

const SUBTABS = ["Compose", "Reply", "Grammar"] as const;
const FORMATS = ["Automatic", "Email", "Message", "Blog Post"] as const;
const TONES = ["Automatic", "Formal", "Casual", "Friendly"] as const;

export function ExtensionWriteDetail() {
  const [subtab, setSubtab] = useState<(typeof SUBTABS)[number]>("Compose");
  const [format, setFormat] = useState<(typeof FORMATS)[number]>("Automatic");
  const [tone, setTone] = useState<(typeof TONES)[number]>("Automatic");
  const [topic, setTopic] = useState("");

  return (
    <div>
      <p className="mb-3 text-[15px] font-bold text-text">Write</p>

      <div className="mb-4 flex rounded-lg bg-border p-1">
        {SUBTABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setSubtab(tab)}
            className={
              "flex-1 rounded-md py-1.5 text-center text-[11px] font-semibold " +
              (subtab === tab
                ? "bg-surface text-accent"
                : "text-text-secondary")
            }
          >
            {tab}
          </button>
        ))}
      </div>

      <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        Topic
      </p>
      <textarea
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        rows={3}
        placeholder="The topic you want to write about"
        className="w-full resize-none rounded-lg border border-border bg-surface px-2.5 py-2 text-[12px] text-text outline-none placeholder:text-text-muted"
      />

      <p className="mb-1.5 mt-3.5 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        Format
      </p>
      <ToggleGroup options={[...FORMATS]} value={format} onChange={setFormat} />

      <p className="mb-1.5 mt-3.5 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        Tone
      </p>
      <ToggleGroup options={[...TONES]} value={tone} onChange={setTone} />

      <button className="mt-5 w-full rounded-xl bg-accent py-2.5 text-[12.5px] font-bold text-white hover:bg-accent-hover">
        Generate
      </button>
    </div>
  );
}
