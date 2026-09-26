"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { Modal } from "@/components/ui/Modal";
import { aiModels } from "@/lib/data/models";

const MAX_SELECTABLE = 3;

interface ChooseModelsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: string[];
  onApply: (ids: string[]) => void;
}

export function ChooseModelsModal({
  isOpen,
  onClose,
  selectedIds,
  onApply,
}: ChooseModelsModalProps) {
  const [draftIds, setDraftIds] = useState(selectedIds);

  // Reset the draft to whatever's actually applied each time the modal opens
  useEffect(() => {
    if (isOpen) setDraftIds(selectedIds);
  }, [isOpen, selectedIds]);

  function toggleModel(id: string) {
    setDraftIds((prev) => {
      if (prev.includes(id)) return prev.filter((m) => m !== id);
      if (prev.length >= MAX_SELECTABLE) return prev; // silently ignore past the cap
      return [...prev, id];
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidthClassName="max-w-xl">
      <div className="p-5">
        <h2 className="text-[16px] font-semibold text-text">Choose models</h2>
        <p className="mt-1 text-[13px] text-text-secondary">
          Every model answers the same prompt, side by side.
        </p>
        <p className="mt-2 text-[12.5px] text-text-muted">
          {draftIds.length}/{MAX_SELECTABLE} models selected · each column costs
          one message
        </p>

        <div className="mt-4 grid max-h-72 grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
          {aiModels.map((model) => {
            const Icon = model.icon;
            const isSelected = draftIds.includes(model.id);
            return (
              <button
                key={model.id}
                onClick={() => toggleModel(model.id)}
                className={clsx(
                  "flex items-center justify-between gap-2 rounded-xl border px-3.5 py-3 text-left",
                  isSelected
                    ? "border-accent bg-accent-soft"
                    : "border-border hover:border-border-strong",
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-surface text-accent">
                    <Icon size={15} />
                  </span>
                  <span className="text-[13.5px] font-medium text-text">
                    {model.name}
                  </span>
                </span>
                {isSelected && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
                    <Check size={12} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              onApply(draftIds);
              onClose();
            }}
            disabled={draftIds.length === 0}
            className="rounded-lg bg-accent px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-accent-hover disabled:opacity-40"
          >
            Apply for this chat
          </button>
        </div>
      </div>
    </Modal>
  );
}
