"use client";

import { X, Plug } from "lucide-react";
import { useConnectorsStore, type Connector } from "@/store/useConnectorsStore";

export function ConnectorListItem({ connector }: { connector: Connector }) {
  const removeConnector = useConnectorsStore((s) => s.removeConnector);

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <Plug size={15} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13.5px] font-medium text-text">
            {connector.name}
          </p>
          <p className="truncate text-[12px] text-text-secondary">
            {connector.url}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeConnector(connector.id)}
        title="Remove"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-text-muted hover:bg-border hover:text-text"
      >
        <X size={14} />
      </button>
    </div>
  );
}
