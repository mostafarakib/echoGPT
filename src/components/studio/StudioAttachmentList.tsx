"use client";

import { useEffect, useState } from "react";
import { X, FileVideo } from "lucide-react";

export interface StudioAttachment {
  id: string;
  file: File;
}

interface StudioAttachmentListProps {
  attachments: StudioAttachment[];
  onRemove: (id: string) => void;
}

export function StudioAttachmentList({
  attachments,
  onRemove,
}: StudioAttachmentListProps) {
  if (attachments.length === 0) return null;

  return (
    <div className="mt-3">
      <p className="mb-1.5 text-[11.5px] text-text-muted">
        {attachments.length} file{attachments.length > 1 ? "s" : ""} attached
      </p>
      <div className="flex flex-wrap gap-2">
        {attachments.map((attachment) => (
          <AttachmentChip
            key={attachment.id}
            attachment={attachment}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

function AttachmentChip({
  attachment,
  onRemove,
}: {
  attachment: StudioAttachment;
  onRemove: (id: string) => void;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const isImage = attachment.file.type.startsWith("image/");

  useEffect(() => {
    if (!isImage) return;
    const url = URL.createObjectURL(attachment.file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url); // avoid leaking blob URLs as files get added/removed
  }, [attachment.file, isImage]);

  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-border bg-canvas">
      {isImage && previewUrl ? (
        <img
          src={previewUrl}
          alt={attachment.file.name}
          className="h-full w-full object-cover"
        />
      ) : (
        <FileVideo size={20} className="text-text-muted" />
      )}
      <button
        onClick={() => onRemove(attachment.id)}
        title="Remove"
        className="absolute right-0.5 top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
      >
        <X size={11} />
      </button>
    </div>
  );
}
