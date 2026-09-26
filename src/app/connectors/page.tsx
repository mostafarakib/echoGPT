"use client";

import { useState } from "react";
import { Network } from "lucide-react";
import { useConnectorsStore } from "@/store/useConnectorsStore";
import { usePricingModalStore } from "@/store/usePricingModalStore";
import { ConnectorForm } from "@/components/connectors/ConnectorForm";
import { ConnectorListItem } from "@/components/connectors/ConnectorListItem";

export default function ConnectorsPage() {
  const connectors = useConnectorsStore((s) => s.connectors);
  const maxConnectors = useConnectorsStore((s) => s.maxConnectors);
  const openPricing = usePricingModalStore((s) => s.open);
  const [isFormOpen, setFormOpen] = useState(false);

  const atCap = connectors.length >= maxConnectors;

  function handleAddClick() {
    if (atCap) {
      openPricing();
      return;
    }
    setFormOpen(true);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-text">Connectors</h1>
      <p className="mt-2 text-center text-[14px] text-text-secondary">
        Connect an MCP server and its tools become available while you chat.
      </p>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-[13px] text-text-muted">
          {connectors.length} of {maxConnectors} connected ·{" "}
          <button onClick={openPricing} className="text-accent hover:underline">
            upgrade for unlimited
          </button>
        </p>
        {!isFormOpen && (
          <button
            onClick={handleAddClick}
            className="rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white hover:bg-accent-hover"
          >
            Add connector
          </button>
        )}
      </div>

      {isFormOpen && (
        <div className="mt-4">
          <ConnectorForm onDone={() => setFormOpen(false)} />
        </div>
      )}

      <div className="mt-6 flex flex-col gap-2.5">
        {connectors.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-14 text-center">
            <Network size={26} className="text-text-muted" />
            <p className="text-[13.5px] text-text-secondary">
              No connectors yet.
            </p>
            <p className="text-[12.5px] text-text-muted">
              Add an MCP server above and the model can use its tools in chat.
            </p>
          </div>
        ) : (
          connectors.map((connector) => (
            <ConnectorListItem key={connector.id} connector={connector} />
          ))
        )}
      </div>
    </div>
  );
}
