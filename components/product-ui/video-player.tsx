"use client";

import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  title?: string;
  duration?: string;
  progress?: number;
  playing?: boolean;
  onToggle?: () => void;
  className?: string;
  aspect?: "video" | "portrait";
};

export function VideoPlayer({
  title = "Podcast Episode #42",
  duration = "60:24",
  progress = 35,
  playing = false,
  onToggle,
  className,
  aspect = "video",
}: VideoPlayerProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-muted/30 overflow-hidden", className)}>
      <div
        className={cn(
          "relative bg-gradient-to-br from-zinc-800 to-zinc-900",
          aspect === "video" ? "aspect-video" : "aspect-[9/16]"
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={onToggle}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform hover:scale-105"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="h-5 w-5 fill-white text-white" />
            )}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-sm font-medium text-white">{title}</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-accent transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-white/80">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
