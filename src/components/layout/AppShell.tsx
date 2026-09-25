"use client";

import { useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { SettingsModal } from "@/components/layout/SettingsModal";
import { SearchModal } from "@/components/layout/SearchModal";
import { useSearchModalStore } from "@/store/useSearchModalStore";

export function AppShell({ children }: { children: React.ReactNode }) {
  const openSearch = useSearchModalStore((s) => s.open);

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

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto bg-canvas">{children}</main>
      </div>
      <SettingsModal />
      <SearchModal />
    </div>
  );
}
