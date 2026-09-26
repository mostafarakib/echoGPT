"use client";

import { useState } from "react";
import { Network } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { useConnectorsModalStore } from "@/store/useConnectorsModalStore";
import { useConnectorsStore } from "@/store/useConnectorsStore";
import { ConnectorForm } from "@/components/connectors/ConnectorForm";
import { ConnectorListItem } from "@/components/connectors/ConnectorListItem";

export function ConnectorsModal() {
  const { isOpen, close } = useConnectorsModalStore();
  const connectors = useConnectorsStore((s) => s.connectors);
  const maxConnectors = useConnectorsStore((s) => s.maxConnectors);
  const [isAdding, setAdding] = useState(false);

  const atCap = connectors.length >= maxConnectors;

  return (
    <Modal isOpen={isOpen} onClose={close} maxWidthClassName="max-w-lg">
      <div className="p-5">
        <h2 className="text-[15px] font-semibold">Connectors</h2>
        <p className="mt-1 text-[13px] text-text-secondary">
          Connect an MCP server and its tools become available in chat.
        </p>
        <p className="mt-2 text-[12.5px] text-text-muted">
          {connectors.length} of {maxConnectors} connected · upgrade for
          unlimited
        </p>

        {isAdding ? (
          <div className="mt-4">
            <ConnectorForm onDone={() => setAdding(false)} />
          </div>
        ) : (
          <div className="mt-4 flex max-h-64 flex-col gap-2 overflow-y-auto">
            {connectors.length === 0 ? (
              <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border py-10">
                <Network size={20} className="text-text-muted" />
                <p className="text-[13px] text-text-secondary">
                  No connectors yet.
                </p>
              </div>
            ) : (
              connectors.map((connector) => (
                <ConnectorListItem key={connector.id} connector={connector} />
              ))
            )}
          </div>
        )}

        {!isAdding && (
          <button
            onClick={() => setAdding(true)}
            disabled={atCap}
            className="mt-4 w-full rounded-lg bg-accent py-2.5 text-[13.5px] font-semibold text-white hover:bg-accent-hover disabled:opacity-40"
          >
            {atCap ? "Upgrade to add more" : "Add connector"}
          </button>
        )}
      </div>
    </Modal>
  );
}
