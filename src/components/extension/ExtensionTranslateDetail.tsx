"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { ModelSelect } from "@/components/chat/ModelSelect";

const LANGUAGES = [
  "Automatic",
  "English",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Bengali",
];

export function ExtensionTranslateDetail() {
  const [source, setSource] = useState("Automatic");
  const [target, setTarget] = useState("English");
  const [text, setText] = useState("");

  return (
    <div>
      <p className="mb-3 text-[15px] font-bold text-text">Translate</p>
      <div className="flex items-center gap-2">
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-surface px-2.5 py-2 text-[12px] text-text outline-none"
        >
          {LANGUAGES.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
        <ArrowLeftRight size={15} className="shrink-0 text-text-muted" />
        <select
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-surface px-2.5 py-2 text-[12px] text-text outline-none"
        >
          {LANGUAGES.filter((l) => l !== "Automatic").map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        placeholder="Paste or enter your text to translate"
        className="mt-3 w-full resize-none rounded-xl border border-border bg-surface px-3 py-2.5 text-[12.5px] text-text outline-none placeholder:text-text-muted"
      />

      <div className="mt-3 flex items-center gap-2">
        <ModelSelect />
        <button className="flex-1 rounded-xl bg-accent py-2.5 text-[12.5px] font-bold text-white hover:bg-accent-hover">
          Translate
        </button>
      </div>
    </div>
  );
}
