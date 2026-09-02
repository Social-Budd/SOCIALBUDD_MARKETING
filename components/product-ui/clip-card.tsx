"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type ClipCardProps = {
  title: string;
  duration: string;
  engagement?: string;
  caption?: string;
  selected?: boolean;
  onClick?: () => void;
  index?: number;
  className?: string;
};

export function ClipCard({
  title,
  duration,
  engagement,
  caption,
  selected,
  onClick,
  index = 0,
  className,
}: ClipCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={onClick}
      className={cn(
        "group w-full rounded-lg border bg-elevated p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40",
        selected ? "border-accent ring-1 ring-accent/30" : "border-border",
        className
      )}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-md bg-muted">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Play className="h-3.5 w-3.5 fill-white text-white" />
          </span>
        </div>
        <div className="absolute bottom-2 left-2 right-2">
          <div className="rounded bg-black/50 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
            {caption?.slice(0, 40)}...
          </div>
        </div>
        <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
          {duration}
        </span>
      </div>
      <div className="mt-2.5">
        <p className="text-xs font-medium text-foreground">{title}</p>
        {engagement && (
          <p className="mt-0.5 text-[10px] text-accent">{engagement} engagement</p>
        )}
      </div>
    </motion.button>
  );
}
