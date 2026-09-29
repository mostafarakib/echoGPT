"use client";

import { useState } from "react";
import { ToggleGroup } from "@/components/ui/ToggleGroup";
import { ModelSelectionDropdown } from "@/components/ui/ModelSelectionDropdown";
import { AttachmentButton } from "@/components/ui/AttachmentButton";
import {
  AttachmentList,
  type Attachment,
} from "@/components/ui/AttachmentList";
import { videoModels } from "@/lib/data/video-models";
import { usePricingModalStore } from "@/store/usePricingModalStore";

const ASPECT_RATIOS = ["16:9", "9:16", "1:1"] as const;

export function ExtensionVideoDetail() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] =
    useState<(typeof ASPECT_RATIOS)[number]>("16:9");
  const [modelId, setModelId] = useState(videoModels[0].id);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const openPricing = usePricingModalStore((s) => s.open);

  function handleFiles(files: File[]) {
    setAttachments((prev) => [
      ...prev,
      ...files.map((file) => ({ id: crypto.randomUUID(), file })),
    ]);
  }

  return (
    <div>
      <p className="mb-3 text-[15px] font-bold text-text">Video</p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={2}
        placeholder="Describe your video..."
        className="w-full resize-none rounded-xl border border-border bg-surface px-3 py-2.5 text-[12.5px] text-text outline-none placeholder:text-text-muted"
      />
      <div className="mt-2.5 flex flex-wrap items-center gap-2">
        <AttachmentButton
          onFilesSelected={handleFiles}
          accept="image/*,video/*"
        />
        <ToggleGroup
          options={[...ASPECT_RATIOS]}
          value={aspectRatio}
          onChange={setAspectRatio}
        />
      </div>
      <AttachmentList
        attachments={attachments}
        onRemove={(id) => setAttachments((p) => p.filter((a) => a.id !== id))}
      />
      <div className="mt-3 flex items-center gap-2">
        <ModelSelectionDropdown
          models={videoModels}
          selectedId={modelId}
          onChange={setModelId}
        />
        <button
          onClick={openPricing}
          className="flex-1 rounded-xl bg-accent py-2.5 text-[12.5px] font-bold text-white hover:bg-accent-hover"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
