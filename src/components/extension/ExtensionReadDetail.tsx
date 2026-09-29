"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import {
  AttachmentList,
  type Attachment,
} from "@/components/ui/AttachmentList";

export function ExtensionReadDetail() {
  const [url, setUrl] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setAttachments((prev) => [
      ...prev,
      ...files.map((file) => ({ id: crypto.randomUUID(), file })),
    ]);
    e.target.value = "";
  }

  return (
    <div>
      <p className="mb-3 text-[15px] font-bold text-text">Read</p>

      <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        Read a link
      </p>
      <div className="flex gap-2">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a web page link"
          className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-[12px] text-text outline-none placeholder:text-text-muted"
        />
        <button className="rounded-lg bg-accent px-4 text-[12px] font-semibold text-white hover:bg-accent-hover">
          Read
        </button>
      </div>

      <p className="mb-1.5 mt-4 text-[10.5px] font-bold uppercase tracking-wide text-text-muted">
        Read a file
      </p>
      <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-surface py-8 text-center hover:border-accent hover:bg-accent-soft/30">
        <Upload size={18} className="text-text-muted" />
        <p className="text-[11.5px] text-text-secondary">
          Click or drag <span className="font-medium text-accent">files</span>{" "}
          here to upload
        </p>
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,image/*"
          className="hidden"
          onChange={handleFiles}
        />
      </label>

      <AttachmentList
        attachments={attachments}
        onRemove={(id) => setAttachments((p) => p.filter((a) => a.id !== id))}
      />
    </div>
  );
}
