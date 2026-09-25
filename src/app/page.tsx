"use client";

import { useChatStore } from "@/store/useChatStore";
import { ChatEmptyState } from "@/components/chat/ChatEmptyState";
import { MessageList } from "@/components/chat/MessageList";
import { ChatComposer } from "@/components/chat/ChatComposer";
import { ConnectorsModal } from "@/components/chat/ConnectorsModal";
import { PricingModal } from "@/components/chat/PricingModal";

export default function Home() {
  const hasMessages = useChatStore((s) => s.messages.length > 0);

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto">
        {hasMessages ? <MessageList /> : <ChatEmptyState />}
      </div>
      <ChatComposer />
      <ConnectorsModal />
      <PricingModal />
    </div>
  );
}
