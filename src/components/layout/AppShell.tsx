"use client";

import { useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { SettingsModal } from "@/components/layout/SettingsModal";
import { SearchModal } from "@/components/layout/SearchModal";
import { useSearchModalStore } from "@/store/useSearchModalStore";
import { ConnectorsModal } from "../chat/ConnectorsModal";
import { PricingModal } from "../shared/PricingModal";
import { UpgradeModal } from "../shared/UpgradeModal";
import { RightPanel } from "@/components/ui/RightPanel";
import { useRightPanelStore } from "@/store/useRightPanelStore";
import { JobAnalysisHistoryPanelContent } from "@/components/job-analysis/JobAnalysisHistoryPanelContent";

export function AppShell({ children }: { children: React.ReactNode }) {
  const openSearch = useSearchModalStore((s) => s.open);
  const activePanelId = useRightPanelStore((s) => s.activePanelId);
  const closeRightPanel = useRightPanelStore((s) => s.close);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [openSearch]);

  const rightPanelTitles: Record<string, string> = {
    "job-analysis-history": "Job Analysis History",
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto bg-canvas">{children}</main>
      </div>
      <SettingsModal />
      <SearchModal />
      <ConnectorsModal />
      <PricingModal />
      <UpgradeModal />
      <RightPanel
        isOpen={activePanelId !== null}
        onClose={closeRightPanel}
        title={activePanelId ? (rightPanelTitles[activePanelId] ?? "") : ""}
      >
        {activePanelId === "job-analysis-history" && (
          <JobAnalysisHistoryPanelContent />
        )}
      </RightPanel>
    </div>
  );
}
