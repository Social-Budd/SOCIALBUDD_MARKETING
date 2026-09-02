"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/product-ui/video-player";
import { TranscriptPane } from "@/components/product-ui/transcript-pane";
import { demoTranscript } from "@/lib/demo-data";

export function ClippingDemoSection() {
  const [showClip, setShowClip] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <Section variant="muted">
      <Container>
        <MotionReveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Let AI find the moments worth sharing.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            AI analyzes your transcript and highlights moments with high engagement potential.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <VideoPlayer
              playing={playing}
              onToggle={() => setPlaying(!playing)}
              progress={42}
            />
            <TranscriptPane lines={demoTranscript} className="mt-4" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">High engagement potential</span>
              </div>
              <p className="mt-3 text-sm italic text-muted-foreground">
                &ldquo;...and that&apos;s when we realized our entire strategy was wrong.&rdquo;
              </p>
              <Button
                className="mt-4"
                onClick={() => setShowClip(true)}
              >
                Create clip
              </Button>
            </div>

            {showClip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex justify-center"
              >
                <div className="w-48">
                  <VideoPlayer
                    aspect="portrait"
                    title="Strategy pivot"
                    duration="0:42"
                    progress={65}
                  />
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    9:16 · Subtitled · Branded
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
