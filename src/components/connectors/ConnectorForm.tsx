"use client";

import { useState } from "react";
import { useConnectorsStore } from "@/store/useConnectorsStore";

interface ConnectorFormProps {
  onDone: () => void;
}

export function ConnectorForm({ onDone }: ConnectorFormProps) {
  const addConnector = useConnectorsStore((s) => s.addConnector);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [authHeader, setAuthHeader] = useState("");

  function handleContinue() {
    if (!name.trim() || !url.trim()) return;
    addConnector({
      name: name.trim(),
      url: url.trim(),
      authHeader: authHeader.trim() || undefined,
    });
    onDone();
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <p className="text-[14px] font-semibold text-text">
        Add custom connector
      </p>

      <div className="mt-4 flex flex-col gap-1">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name — shown in the connectors list"
          className="rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-[13.5px] text-text outline-none placeholder:text-text-muted"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://mcp.example.com/mcp"
          className="rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-[13.5px] text-text outline-none placeholder:text-text-muted"
        />
        <p className="mt-1 text-[11.5px] text-text-muted">
          The HTTPS address where the server accepts MCP requests.
        </p>
      </div>

      <div className="mt-3">
        <input
          value={authHeader}
          onChange={(e) => setAuthHeader(e.target.value)}
          placeholder="Authorization header (optional), e.g. Bearer abc123"
          className="w-full rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-[13.5px] text-text outline-none placeholder:text-text-muted"
        />
        <p className="mt-1 text-[11.5px] text-text-muted">
          Only connect servers you trust — their tools can act on your behalf.
        </p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onDone}
          className="rounded-lg px-3.5 py-2 text-[13px] text-text-secondary hover:bg-border"
        >
          Cancel
        </button>
        <button
          onClick={handleContinue}
          disabled={!name.trim() || !url.trim()}
          className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white hover:bg-accent-hover disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
