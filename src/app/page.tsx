"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { SettingsModal } from "@/components/layout/SettingsModal";
import { useSearchModalStore } from "@/store/useSearchModalStore";
import { SearchModal } from "@/components/layout/SearchModal";
import { useEffect } from "react";

export default function Home() {
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
        <main className="flex flex-1 items-center justify-center bg-canvas">
          <p className="text-sm text-text-secondary">Layout preview</p>
        </main>
      </div>
      <SettingsModal />
      <SearchModal />
    </div>
  );
}
