"use client";

import { useState, type KeyboardEvent } from "react";
import { Plug, Crown, Mic, ArrowUp } from "lucide-react";
import { ModelSelect } from "@/components/chat/ModalSelect";
import { useChatStore } from "@/store/useChatStore";
import { useConnectorsModalStore } from "@/store/useConnectorsModalStore";
import { usePricingModalStore } from "@/store/usePricingModalStore";

export function ChatComposer() {
  const [value, setValue] = useState("");
  const sendMessage = useChatStore((s) => s.sendMessage);
  const isReplying = useChatStore((s) => s.isReplying);
  const openConnectors = useConnectorsModalStore((s) => s.open);
  const openPricing = usePricingModalStore((s) => s.open);

  function handleSend() {
    if (!value.trim() || isReplying) return;
    sendMessage(value);
    setValue("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="px-4 pb-4 pt-1 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface shadow-[0_8px_30px_rgba(20,20,30,0.12)]">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Ask a question..."
          className="max-h-40 w-full resize-none bg-transparent px-4 pt-3.5 pb-2 text-[14px] text-text outline-none placeholder:text-text-muted"
        />
        <div className="flex items-center justify-between px-2.5 pb-2.5">
          <div className="flex items-center gap-1">
            <ModelSelect />
            <button
              onClick={openConnectors}
              title="Connectors"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-border hover:text-text"
            >
              <Plug size={17} />
            </button>
            <button
              onClick={openPricing}
              title="Upgrade"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-accent hover:bg-accent-soft"
            >
              <Crown size={17} />
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              title="Voice input"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-border hover:text-text"
            >
              <Mic size={17} />
            </button>
            <button
              onClick={handleSend}
              disabled={!value.trim() || isReplying}
              title="Send"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white hover:bg-accent-hover disabled:opacity-40"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-2 max-w-3xl text-center text-[11.5px] text-text-muted">
        3 of 5 messages left this 5-hour window · 5 on advanced models · Resets
        in 4h 58m
      </p>
    </div>
  );
}
