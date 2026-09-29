"use client";

import { useState } from "react";
import { useChatStore } from "@/store/useChatStore";
import { ExtensionPopupFrame } from "@/components/extension/ExtensionPopupFrame";
import { ExtensionBottomNav } from "@/components/extension/ExtensionBottomNav";
import { ExtensionChatView } from "@/components/extension/ExtensionChatView";
import { ExtensionToolsView } from "@/components/extension/ExtensionToolsView";
import { ExtensionHistoryView } from "@/components/extension/ExtensionHistoryView";
import { ExtensionSettingsView } from "@/components/extension/ExtensionSettingsView";
import { PricingModal } from "@/components/shared/PricingModal";
import { extensionTools } from "@/lib/data/extension-tools";

const viewTitles: Record<string, string> = {
  chat: "EchoGPT",
  tools: "Tools",
  history: "History",
  settings: "Settings",
};

export default function ExtensionConceptPage() {
  const [activeView, setActiveView] = useState("chat");
  const [openToolId, setOpenToolId] = useState<string | null>(null);
  const newChat = useChatStore((s) => s.newChat);

  function handleNavChange(id: string) {
    setActiveView(id);
    if (id !== "tools") setOpenToolId(null);
  }

  const openTool = openToolId
    ? extensionTools.find((t) => t.id === openToolId)
    : null;
  const title = openTool ? openTool.title : viewTitles[activeView];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#e8e8ee] px-4 py-12 dark:bg-[#0a0a0d]">
      <div className="text-center">
        <p className="text-[13px] font-semibold text-text">
          EchoGPT Chrome Extension — Concept
        </p>
        <p className="mt-1 text-[12px] text-text-secondary">
          A redesign of the multi-AI chat sidebar extension, sharing session
          state with the main app.
        </p>
      </div>

      <ExtensionPopupFrame
        title={title}
        onNewChat={() => {
          newChat();
          setActiveView("chat");
          setOpenToolId(null);
        }}
        footer={
          <ExtensionBottomNav
            activeId={activeView}
            onChange={handleNavChange}
          />
        }
      >
        {activeView === "chat" && (
          <ExtensionChatView
            onOpenTool={(id) => {
              setActiveView("tools");
              setOpenToolId(id);
            }}
          />
        )}
        {activeView === "tools" && (
          <ExtensionToolsView
            openToolId={openToolId}
            onOpenTool={setOpenToolId}
          />
        )}
        {activeView === "history" && <ExtensionHistoryView />}
        {activeView === "settings" && <ExtensionSettingsView />}
      </ExtensionPopupFrame>

      <PricingModal />
    </div>
  );
}
