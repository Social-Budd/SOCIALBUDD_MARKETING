"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { AppShell } from "@/components/product-ui/app-shell";
import { ClipCard } from "@/components/product-ui/clip-card";
import { VideoPlayer } from "@/components/product-ui/video-player";
import { demoClips } from "@/lib/demo-data";

export function HeroProductVisual() {
  const [selectedClip, setSelectedClip] = useState<string>(demoClips[0].id);
  const [processing, setProcessing] = useState(true);

  return (
    <AppShell clientName="Acme">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_auto_1fr] lg:items-center">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Source video
          </p>
          <VideoPlayer title="Marketing Strategy Podcast #42" duration="60:24" progress={35} />
        </div>

        <div className="hidden flex-col items-center gap-2 lg:flex">
          <motion.div
            animate={processing ? { opacity: [0.5, 1, 0.5] } : { opacity: 1 }}
            transition={{ repeat: processing ? Infinity : 0, duration: 1.5 }}
            className="flex flex-col items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3"
          >
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-xs font-medium text-accent">AI Analysis</span>
          </motion.div>
          <div className="h-px w-8 bg-border" />
          <span className="text-[10px] text-muted-foreground">4 clips found</span>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Generated clips
          </p>
          <div className="grid grid-cols-2 gap-2">
            {demoClips.map((clip, i) => (
              <ClipCard
                key={clip.id}
                {...clip}
                index={i}
                selected={selectedClip === clip.id}
                onClick={() => {
                  setSelectedClip(clip.id);
                  setProcessing(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
