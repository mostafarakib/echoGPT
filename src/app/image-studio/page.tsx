"use client";

import { useState } from "react";
import { StudioToggleGroup } from "@/components/studio/StudioToggleGroup";
import { StudioModelDropdown } from "@/components/studio/StudioModelDropdown";
import { imageModels } from "@/lib/data/image-models";
import { usePricingModalStore } from "@/store/usePricingModalStore";
import { StudioAttachmentButton } from "@/components/studio/StudioAttachmentButton";
import {
  StudioAttachmentList,
  type StudioAttachment,
} from "@/components/studio/StudioAttachmentList";

const ASPECT_RATIOS = ["1:1", "3:2", "2:3", "auto"] as const;
const COUNTS = [1, 2, 3, 4] as const;

export default function ImageStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] =
    useState<(typeof ASPECT_RATIOS)[number]>("1:1");
  const [count, setCount] = useState<(typeof COUNTS)[number]>(1);
  const [modelId, setModelId] = useState(imageModels[0].id);
  const openPricing = usePricingModalStore((s) => s.open);
  const [attachments, setAttachments] = useState<StudioAttachment[]>([]);

  function handleFilesSelected(files: File[]) {
    const newAttachments = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
    }));
    setAttachments((prev) => [...prev, ...newAttachments]);
  }

  function handleRemoveAttachment(id: string) {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-text">Image Studio</h1>
      <p className="mt-2 text-center text-[14px] text-text-secondary">
        Create images that stop the scroll.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={2}
          placeholder="Turn my photo into a professional headshot"
          className="w-full resize-none bg-transparent text-[15px] text-text outline-none placeholder:text-text-muted"
        />

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <StudioAttachmentButton
            onFilesSelected={handleFilesSelected}
            accept="image/*"
          />
          <StudioAttachmentList
            attachments={attachments}
            onRemove={handleRemoveAttachment}
          />

          <StudioToggleGroup
            options={[...ASPECT_RATIOS]}
            value={aspectRatio}
            onChange={setAspectRatio}
          />
          <StudioToggleGroup
            options={[...COUNTS]}
            value={count}
            onChange={setCount}
          />
          <StudioModelDropdown
            models={imageModels}
            selectedId={modelId}
            onChange={setModelId}
          />
        </div>

        <button
          onClick={openPricing}
          className="mt-4 rounded-xl bg-accent px-6 py-3 text-[14px] font-semibold text-white hover:bg-accent-hover"
        >
          Generate
        </button>

        <div className="mt-4 border-t border-border pt-4">
          <p className="text-[12.5px] text-text-muted">
            Image generation is a paid feature —{" "}
            <button
              onClick={openPricing}
              className="text-accent hover:underline"
            >
              upgrade
            </button>{" "}
            to start creating images.
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-[12px] text-text-muted">
        Each image uses one message from your plan. Generation takes up to a
        minute.
      </p>

      <h2 className="mt-10 text-[14px] font-semibold text-text">
        Your creations
      </h2>
      <div className="mt-4 flex items-center justify-center rounded-2xl border border-dashed border-border py-16">
        <p className="text-[13.5px] text-text-secondary">
          Nothing here yet — describe an image above to get started.
        </p>
      </div>
    </div>
  );
}
