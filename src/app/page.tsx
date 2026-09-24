import { Sidebar } from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-1 items-center justify-center bg-canvas">
        <p className="text-sm text-text-secondary">Sidebar preview — Stage 4</p>
      </main>
    </div>
  );
}
