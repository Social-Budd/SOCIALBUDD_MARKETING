"use client";

import { cn } from "@/lib/utils";

type TranscriptPaneProps = {
  lines: readonly { time: string; text: string; highlight?: boolean }[];
  className?: string;
};

export function TranscriptPane({ lines, className }: TranscriptPaneProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-muted/30 p-4", className)}>
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Transcript
      </p>
      <div className="space-y-3">
        {lines.map((line) => (
          <div
            key={line.time}
            className={cn(
              "rounded-md px-3 py-2 text-sm transition-colors",
              line.highlight
                ? "border border-accent/30 bg-accent/10 text-foreground"
                : "text-muted-foreground"
            )}
          >
            <span className="mr-2 font-mono text-xs text-muted-foreground">{line.time}</span>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
