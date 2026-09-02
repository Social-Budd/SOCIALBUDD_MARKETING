"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { demoAnalytics } from "@/lib/demo-data";

export function AnalyticsChart({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const maxViews = Math.max(...demoAnalytics.views);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="rounded-lg border border-border bg-muted/20 p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium">Views over time</p>
          <span className="rounded border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
            Demo data
          </span>
        </div>
        <div className="flex h-32 items-end gap-2">
          {demoAnalytics.views.map((value, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-accent/80 transition-all duration-700 ease-out"
              style={{
                height: mounted ? `${(value / maxViews) * 100}%` : "0%",
                transitionDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { label: "Views", value: "38.2K" },
          { label: "Engagement", value: "7.6%" },
          { label: "Watch time", value: "4.2h" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <p className="mb-3 text-sm font-medium">Top performing clips</p>
        <div className="space-y-2">
          {demoAnalytics.topClips.map((clip, i) => (
            <div
              key={clip.title}
              className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm"
            >
              <span className="text-muted-foreground">
                {i + 1}. {clip.title}
              </span>
              <span className="text-xs text-muted-foreground">
                {clip.views} · {clip.engagement}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
