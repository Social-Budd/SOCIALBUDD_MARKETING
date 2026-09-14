"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { features } from "@/lib/demo-data";

function FeatureDemo({ demo }: { demo: string }) {
  const demos: Record<string, React.ReactNode> = {
    "clip-finder": (
      <div className="space-y-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-2 rounded bg-accent/30" style={{ width: `${100 - i * 15}%` }} />
        ))}
      </div>
    ),
    subtitles: (
      <div className="rounded bg-black/80 px-2 py-1 text-[10px] text-white">
        Auto-generated subtitles
      </div>
    ),
    framing: (
      <div className="relative h-12 rounded bg-muted">
        <div className="absolute inset-x-4 top-1/2 h-8 -translate-y-1/2 rounded border-2 border-accent/50" />
      </div>
    ),
    captions: (
      <p className="text-[10px] text-muted-foreground line-clamp-2">
        When we realized our entire strategy was wrong...
      </p>
    ),
    brand: (
      <div className="flex gap-1">
        {["#FAFAFA", "#3B82F6", "#22C55E"].map((c) => (
          <div key={c} className="h-4 w-4 rounded" style={{ backgroundColor: c }} />
        ))}
      </div>
    ),
    scheduling: (
      <div className="grid grid-cols-3 gap-1">
        {["M", "T", "W"].map((d) => (
          <div key={d} className="rounded border border-border py-1 text-center text-[8px]">
            {d}
          </div>
        ))}
      </div>
    ),
    team: (
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-6 rounded-full border-2 border-card bg-muted" />
        ))}
      </div>
    ),
    approval: (
      <div className="flex gap-1">
        <div className="rounded bg-green-500/20 px-2 py-0.5 text-[8px] text-green-400">Approve</div>
        <div className="rounded bg-amber-500/20 px-2 py-0.5 text-[8px] text-amber-400">Changes</div>
      </div>
    ),
    analytics: (
      <div className="flex h-8 items-end gap-0.5">
        {[40, 60, 45, 80, 55].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-accent/60" style={{ height: `${h}%` }} />
        ))}
      </div>
    ),
  };

  return <div className="mt-4 h-12">{demos[demo] ?? null}</div>;
}

export function FeaturesSection() {
  return (
    <Section variant="muted">
      <Container>
        <MotionReveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need in one platform.
          </h2>
        </MotionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
            >
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              <FeatureDemo demo={feature.demo} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
