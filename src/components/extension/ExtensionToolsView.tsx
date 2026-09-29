"use client";

import { ArrowLeft } from "lucide-react";
import { HoverLift } from "@/components/ui/HoverLift";
import { extensionTools } from "@/lib/data/extension-tools";
import { ExtensionWriteDetail } from "@/components/extension/ExtensionWriteDetail";
import { ExtensionReadDetail } from "@/components/extension/ExtensionReadDetail";
import { ExtensionTranslateDetail } from "@/components/extension/ExtensionTranslateDetail";
import { ExtensionImageDetail } from "@/components/extension/ExtensionImageDetail";
import { ExtensionVideoDetail } from "@/components/extension/ExtensionVideoDetail";
import { ExtensionCompareDetail } from "@/components/extension/ExtensionCompareDetail";
import { ExtensionConnectorsDetail } from "@/components/extension/ExtensionConnectorsDetail";

const detailComponents: Record<string, React.ComponentType> = {
  write: ExtensionWriteDetail,
  read: ExtensionReadDetail,
  translate: ExtensionTranslateDetail,
  image: ExtensionImageDetail,
  video: ExtensionVideoDetail,
  compare: ExtensionCompareDetail,
  connectors: ExtensionConnectorsDetail,
};

interface ExtensionToolsViewProps {
  openToolId: string | null;
  onOpenTool: (toolId: string | null) => void;
}

export function ExtensionToolsView({
  openToolId,
  onOpenTool,
}: ExtensionToolsViewProps) {
  if (openToolId) {
    const DetailComponent = detailComponents[openToolId];
    return (
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <button
          onClick={() => onOpenTool(null)}
          className="mb-3.5 flex items-center gap-1.5 text-[12px] font-semibold text-text-secondary"
        >
          <ArrowLeft size={13} />
          Tools
        </button>
        {DetailComponent && <DetailComponent />}
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      <p className="mb-3.5 text-[16px] font-bold text-text">Tools</p>
      <div className="grid grid-cols-2 gap-2.5">
        {extensionTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <HoverLift key={tool.id}>
              <button
                onClick={() => onOpenTool(tool.id)}
                className="w-full rounded-xl border border-border bg-surface p-3.5 text-left hover:border-accent hover:bg-accent-soft"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${tool.badgeClassName}`}
                >
                  <Icon size={15} />
                </span>
                <p className="mt-2 text-[12.5px] font-semibold text-text">
                  {tool.title}
                </p>
                <p className="mt-0.5 text-[10.5px] leading-snug text-text-secondary">
                  {tool.description}
                </p>
              </button>
            </HoverLift>
          );
        })}
      </div>
    </div>
  );
}
