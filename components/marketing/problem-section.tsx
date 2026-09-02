"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { problemTools } from "@/lib/demo-data";

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const toolsOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.3]);

  return (
    <Section ref={ref}>
      <Container>
        <MotionReveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Your content shouldn&apos;t require five different tools.
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              The old workflow
            </p>
            <motion.div style={{ opacity: toolsOpacity }} className="space-y-3">
              {problemTools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-xs font-medium">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-lg border border-border bg-card px-4 py-3">
                    <p className="text-sm font-medium">{tool}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <MotionReveal>
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                There should be one workflow
              </p>
              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                Social Budd replaces the fragmented workflow.
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Upload once. AI finds your best moments, creates clips, adds subtitles,
                writes captions, and helps you schedule and publish — all from one platform.
              </p>
              <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-6">
                <p className="text-sm font-medium text-accent">One video in. Many social posts out.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Create → Edit → Approve → Schedule → Publish → Analyze
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
