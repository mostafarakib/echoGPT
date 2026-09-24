// src/app/page.tsx
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavbar />
        <main className="flex flex-1 items-center justify-center bg-canvas">
          <p className="text-sm text-text-secondary">Layout preview</p>
        </main>
      </div>
    </div>
  );
}
