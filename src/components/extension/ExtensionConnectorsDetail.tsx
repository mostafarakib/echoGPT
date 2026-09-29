"use client";

import { useState } from "react";
import { Network } from "lucide-react";
import { useConnectorsStore } from "@/store/useConnectorsStore";
import { ConnectorForm } from "@/components/connectors/ConnectorForm";
import { ConnectorListItem } from "@/components/connectors/ConnectorListItem";

export function ExtensionConnectorsDetail() {
  const connectors = useConnectorsStore((s) => s.connectors);
  const maxConnectors = useConnectorsStore((s) => s.maxConnectors);
  const [isAdding, setAdding] = useState(false);

  return (
    <div>
      <p className="mb-1 text-[15px] font-bold text-text">Connectors</p>
      <p className="mb-3 text-[11px] text-text-secondary">
        {connectors.length} of {maxConnectors} connected
      </p>

      {isAdding ? (
        <ConnectorForm onDone={() => setAdding(false)} />
      ) : (
        <>
          {connectors.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border py-8 text-center">
              <Network size={18} className="text-text-muted" />
              <p className="text-[11.5px] text-text-secondary">
                No connectors yet.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {connectors.map((c) => (
                <ConnectorListItem key={c.id} connector={c} />
              ))}
            </div>
          )}
          <button
            onClick={() => setAdding(true)}
            disabled={connectors.length >= maxConnectors}
            className="mt-3 w-full rounded-xl bg-accent py-2.5 text-[12.5px] font-bold text-white hover:bg-accent-hover disabled:opacity-40"
          >
            Add connector
          </button>
        </>
      )}
    </div>
  );
}
