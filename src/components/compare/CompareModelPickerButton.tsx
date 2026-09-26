"use client";

import { useState } from "react";
import { ChooseModelsModal } from "@/components/compare/ChooseModelModal";
import { aiModels } from "@/lib/data/models";
import { useCompareStore } from "@/store/useCompareStore";

export function CompareModelPickerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedModelIds = useCompareStore((s) => s.selectedModelIds);
  const setSelectedModels = useCompareStore((s) => s.setSelectedModels);

  const selectedModels = selectedModelIds
    .map((id) => aiModels.find((m) => m.id === id)!)
    .filter(Boolean);
  const first = selectedModels[0];
  const restCount = selectedModels.length - 1;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-full border border-border bg-canvas px-3 py-1.5 text-[13px] font-medium text-text hover:bg-border"
      >
        <span className="flex -space-x-1.5">
          {selectedModels.slice(0, 3).map((m) => {
            const Icon = m.icon;
            return (
              <span
                key={m.id}
                className="flex h-5 w-5 items-center justify-center rounded-full border border-surface bg-accent-soft text-accent"
              >
                <Icon size={11} />
              </span>
            );
          })}
        </span>
        {first ? first.name : "Choose models"}
        {restCount > 0 && ` +${restCount} more`}
      </button>

      <ChooseModelsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedIds={selectedModelIds}
        onApply={setSelectedModels}
      />
    </>
  );
}
