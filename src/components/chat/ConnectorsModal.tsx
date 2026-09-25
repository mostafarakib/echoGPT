"use client";

import { useState } from "react";
import { Plug } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { useConnectorsModalStore } from "@/store/useConnectorsModalStore";

export function ConnectorsModal() {
  const { isOpen, close } = useConnectorsModalStore();
  const [isAdding, setAdding] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={close} maxWidthClassName="max-w-lg">
      <div className="p-5">
        <h2 className="text-[15px] font-semibold">Connectors</h2>
        <p className="mt-1 text-[13px] text-text-secondary">
          Connect an MCP server and its tools become available in chat.
        </p>
        <p className="mt-2 text-[12.5px] text-text-muted">
          0 of 1 connected · upgrade for unlimited
        </p>

        {!isAdding ? (
          <div className="mt-5 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border py-10">
            <Plug size={22} className="text-text-muted" />
            <p className="text-[13px] text-text-secondary">
              No connectors yet.
            </p>
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-2.5 rounded-lg border border-border p-4">
            <input
              placeholder="Name — shown in the connectors list"
              className="rounded-md border border-border bg-canvas px-3 py-2 text-[13px] outline-none placeholder:text-text-muted"
            />
            <input
              placeholder="https://mcp.example.com/mcp"
              className="rounded-md border border-border bg-canvas px-3 py-2 text-[13px] outline-none placeholder:text-text-muted"
            />
            <input
              placeholder="Authorization header (optional), e.g. Bearer abc123"
              className="rounded-md border border-border bg-canvas px-3 py-2 text-[13px] outline-none placeholder:text-text-muted"
            />
            <p className="text-[11.5px] text-text-muted">
              Only connect servers you trust — their tools can act on your
              behalf.
            </p>
            <div className="mt-1 flex justify-end gap-2">
              <button
                onClick={() => setAdding(false)}
                className="rounded-md px-3 py-1.5 text-[13px] text-text-secondary hover:bg-border"
              >
                Cancel
              </button>
              <button className="rounded-md bg-accent px-3.5 py-1.5 text-[13px] font-medium text-white hover:bg-accent-hover">
                Continue
              </button>
            </div>
          </div>
        )}

        {!isAdding && (
          <button
            onClick={() => setAdding(true)}
            className="mt-5 w-full rounded-lg bg-accent py-2.5 text-[13.5px] font-semibold text-white hover:bg-accent-hover"
          >
            Add connector
          </button>
        )}
      </div>
    </Modal>
  );
}
