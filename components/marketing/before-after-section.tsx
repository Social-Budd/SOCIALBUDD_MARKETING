"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

const beforeSteps = [
  "60-minute video",
  "Find clips manually",
  "Edit",
  "Subtitle",
  "Write caption",
  "Upload",
  "Schedule",
  "Hours of work",
];

const afterSteps = [
  "60-minute video",
  "AI finds clips",
  "Automatic subtitles",
  "AI captions",
  "Review",
  "Schedule",
  "Minutes, not hours",
];

export function BeforeAfterSection() {
  const [hovered, setHovered] = useState<"before" | "after" | null>(null);

  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            The difference is time.
          </h2>
        </MotionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            onHoverStart={() => setHovered("before")}
            onHoverEnd={() => setHovered(null)}
            animate={{ opacity: hovered === "after" ? 0.5 : 1 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-lg font-semibold text-muted-foreground">Before Social Budd</h3>
            <div className="mt-6 space-y-2">
              {beforeSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{i + 1}</span>
                  <div className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => setHovered("after")}
            onHoverEnd={() => setHovered(null)}
            animate={{ opacity: hovered === "before" ? 0.5 : 1 }}
            className="rounded-xl border border-accent/30 bg-accent/5 p-6"
          >
            <h3 className="text-lg font-semibold text-accent">With Social Budd</h3>
            <div className="mt-6 space-y-2">
              {afterSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="text-xs text-accent">{i + 1}</span>
                  <div className="flex-1 rounded-lg border border-accent/20 bg-card px-4 py-2.5 text-sm">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
