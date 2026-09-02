"use client";

import {
  BarChart3,
  Calendar,
  Clapperboard,
  LayoutDashboard,
  Settings,
  Users,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Content", icon: Video },
  { label: "Clips", icon: Clapperboard, active: true },
  { label: "Calendar", icon: Calendar },
  { label: "Clients", icon: Users },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

type AppShellProps = {
  children: React.ReactNode;
  clientName?: string;
  className?: string;
  compact?: boolean;
};

export function AppShell({
  children,
  clientName = "Acme",
  className,
  compact = false,
}: AppShellProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-elevated",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground">Social Budd — {clientName}</span>
      </div>
      <div className="flex">
        {!compact && (
          <aside className="hidden w-44 shrink-0 border-r border-border bg-muted/30 p-3 md:block">
            <div className="mb-4 rounded-lg border border-border bg-card px-3 py-2">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Workspace</p>
              <p className="text-sm font-medium">{clientName}</p>
            </div>
            <nav className="space-y-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2.5 py-2 text-xs",
                    item.active
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </div>
              ))}
            </nav>
          </aside>
        )}
        <div className="min-w-0 flex-1 p-4">{children}</div>
      </div>
    </div>
  );
}
