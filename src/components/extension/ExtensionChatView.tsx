"use client";

import { useState } from "react";
import { Send, Globe } from "lucide-react";
import { useChatStore } from "@/store/useChatStore";
import { MessageList } from "@/components/chat/MessageList";
import { ModelSelect } from "@/components/chat/ModelSelect";
import { AttachmentButton } from "@/components/ui/AttachmentButton";
import { extensionTools } from "@/lib/data/extension-tools";

const suggestions = [
  "Tell me an interesting fun fact",
  "Explain quantum computing in simple terms",
  "Recommend 5 great sci-fi movies",
];

interface ExtensionChatViewProps {
  onOpenTool: (toolId: string) => void;
}

export function ExtensionChatView({ onOpenTool }: ExtensionChatViewProps) {
  const [value, setValue] = useState("");
  const messages = useChatStore((s) => s.messages);
  const sendMessage = useChatStore((s) => s.sendMessage);
  const isReplying = useChatStore((s) => s.isReplying);

  function handleSend() {
    if (!value.trim() || isReplying) return;
    sendMessage(value);
    setValue("");
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {messages.length > 0 ? (
          <MessageList />
        ) : (
          <div className="px-4 pt-4">
            <p className="text-[11px] text-text-muted">Hi, good afternoon</p>
            <p className="mb-4 mt-0.5 text-[18px] font-bold text-text">
              How can I help you?
            </p>

            <div className="mb-4 flex gap-2.5 overflow-x-auto border-b border-border pb-3.5">
              {extensionTools.slice(0, 5).map((tool) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => onOpenTool(tool.id)}
                    className="flex w-14.5 shrink-0 flex-col items-center gap-1.5"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${tool.badgeClassName}`}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="text-center text-[10px] leading-tight text-text-secondary">
                      {tool.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mb-2 text-[11px] font-semibold text-text-muted">
              Suggestions
            </p>
            <div className="flex flex-col gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="rounded-xl border border-border bg-surface px-3 py-2.5 text-left text-[12.5px] text-text hover:border-accent hover:bg-accent-soft"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="shrink-0 border-t border-border bg-surface px-3.5 py-2.5">
        <div className="rounded-2xl border border-border bg-bg">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            rows={2}
            placeholder="Ask a question..."
            className="w-full resize-none bg-transparent px-3 pb-1 pt-2.5 text-[12.5px] text-text outline-none placeholder:text-text-muted"
          />
          <div className="flex items-center justify-between px-2 pb-2">
            <ModelSelect />
            <div className="flex items-center gap-1">
              <AttachmentButton
                onFilesSelected={() => {}}
                accept="image/*,.pdf,.doc,.docx"
              />
              <button
                title="Use page context"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-text-muted hover:bg-border hover:text-text"
              >
                <Globe size={15} />
              </button>
              <button
                onClick={handleSend}
                disabled={!value.trim() || isReplying}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white hover:bg-accent-hover disabled:opacity-40"
              >
                <Send size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
