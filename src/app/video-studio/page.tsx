"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { StudioToggleGroup } from "@/components/studio/StudioToggleGroup";
import { StudioModelDropdown } from "@/components/studio/StudioModelDropdown";
import { videoModels } from "@/lib/data/video-models";
import { usePricingModalStore } from "@/store/usePricingModalStore";

const ASPECT_RATIOS = ["16:9", "9:16", "1:1"] as const;

export default function VideoStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] =
    useState<(typeof ASPECT_RATIOS)[number]>("16:9");
  const [modelId, setModelId] = useState(videoModels[0].id);
  const openPricing = usePricingModalStore((s) => s.open);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-text">Video Studio</h1>
      <p className="mt-2 text-center text-[14px] text-text-secondary">
        Just type what you imagine, and the video makes itself.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={2}
          placeholder="Describe your video..."
          className="w-full resize-none bg-transparent text-[15px] text-text outline-none placeholder:text-text-muted"
        />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:bg-border">
              <Plus size={16} />
            </button>
            <StudioToggleGroup
              options={[...ASPECT_RATIOS]}
              value={aspectRatio}
              onChange={setAspectRatio}
            />
            <StudioModelDropdown
              models={videoModels}
              selectedId={modelId}
              onChange={setModelId}
            />
          </div>

          <button
            onClick={openPricing}
            className="rounded-xl bg-accent px-6 py-3 text-[14px] font-semibold text-white hover:bg-accent-hover"
          >
            Generate
          </button>
        </div>

        <div className="mt-4 border-t border-border pt-4">
          <p className="text-[12.5px] text-text-muted">
            Video generation is a paid feature —{" "}
            <button
              onClick={openPricing}
              className="text-accent hover:underline"
            >
              upgrade
            </button>{" "}
            to start creating videos.
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-[12px] text-text-muted">
        Each video uses one message from your plan and takes a few minutes to
        render.
      </p>

      <h2 className="mt-10 text-[14px] font-semibold text-text">
        Your creations
      </h2>
      <div className="mt-4 flex items-center justify-center rounded-2xl border border-dashed border-border py-16">
        <p className="text-[13.5px] text-text-secondary">
          Nothing here yet — describe a video above to get started.
        </p>
      </div>
    </div>
  );
}
