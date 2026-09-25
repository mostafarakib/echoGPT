"use client";

import { useRef, type ChangeEvent } from "react";
import { Plus } from "lucide-react";

interface StudioAttachmentButtonProps {
  onFilesSelected: (files: File[]) => void;
  accept: string;
}

export function StudioAttachmentButton({
  onFilesSelected,
  accept,
}: StudioAttachmentButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length > 0) onFilesSelected(files);
    e.target.value = ""; // reset, so selecting the same file again still fires onChange
  }

  return (
    <>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        title="Attach files"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:bg-border"
      >
        <Plus size={16} />
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        onChange={handleChange}
        className="hidden"
      />
    </>
  );
}
