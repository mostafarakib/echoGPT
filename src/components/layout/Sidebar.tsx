"use client";

import { useEffect } from "react";
import { ChevronsLeft, ChevronsRight, Plus, Search } from "lucide-react";
import clsx from "clsx";
import { useSidebarStore } from "@/store/useSidebarStore";
import { engagementLinks } from "@/lib/data/nav-links";

export function Sidebar() {
  const { isMini, isMobileOpen, toggleMini, closeMobile } = useSidebarStore();

  useEffect(() => {
    useSidebarStore.persist.rehydrate();
  }, []);

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/45 md:hidden"
          onClick={closeMobile}
        />
      )}

      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-30 flex h-full w-72 flex-col border-r border-border bg-surface-sidebar transition-transform duration-200 md:static md:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
          isMini ? "md:w-18" : "md:w-64",
        )}
      >
        {/* Header: brand + collapse toggle */}
        <div
          className={clsx(
            "flex items-center gap-2 px-3.5 pt-4 pb-3",
            isMini
              ? "md:flex-col-reverse md:justify-center md:gap-2.5 md:px-2"
              : "justify-between",
          )}
        >
          <div className="flex min-w-0 items-center gap-2.5 overflow-hidden">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
              E
            </div>
            <span
              className={clsx(
                "truncate text-[15px] font-semibold",
                isMini && "md:hidden",
              )}
            >
              EchoGPT
            </span>
          </div>
          <button
            onClick={toggleMini}
            title={isMini ? "Expand sidebar" : "Collapse sidebar"}
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-text-secondary hover:bg-border hover:text-text md:flex"
          >
            {isMini ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
          </button>
        </div>

        {/* New chat + Search */}
        <div className="flex flex-col gap-1 px-2.5">
          <button
            className={clsx(
              "flex items-center gap-2.5 rounded-lg bg-accent-soft px-2.5 py-2 text-[13.5px] font-semibold text-accent hover:brightness-95",
              isMini && "md:justify-center md:px-2",
            )}
          >
            <Plus size={17} className="shrink-0" />
            <span className={clsx(isMini && "md:hidden")}>New chat</span>
          </button>
          <button
            className={clsx(
              "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13.5px] font-medium text-text hover:bg-border",
              isMini && "md:justify-center md:px-2",
            )}
          >
            <Search size={17} className="shrink-0 text-text-secondary" />
            <span className={clsx(isMini && "md:hidden")}>Search</span>
          </button>
        </div>

        {/* Engagement links */}
        <nav className="mt-3.5 flex-1 overflow-y-auto px-2.5 pb-3">
          <p
            className={clsx(
              "px-2.5 pb-1 text-[11px] font-semibold text-text-muted",
              isMini && "md:hidden",
            )}
          >
            Engagement
          </p>
          <div className="flex flex-col gap-0.5">
            {engagementLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  title={link.label}
                  className={clsx(
                    "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13.5px] text-text-secondary hover:bg-border hover:text-text",
                    isMini && "md:justify-center md:px-2",
                  )}
                >
                  <Icon size={17} className="shrink-0" />
                  <span
                    className={clsx(
                      "flex flex-1 items-center gap-2 truncate",
                      isMini && "md:hidden",
                    )}
                  >
                    {link.label}
                    {link.pro && (
                      <span className="rounded-full bg-pro-bg px-1.5 py-0.5 text-[10px] font-bold text-pro-text">
                        PRO
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
}
