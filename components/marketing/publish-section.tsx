"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { platforms } from "@/lib/demo-data";

export function PublishSection() {
  return (
    <Section variant="muted">
      <Container>
        <MotionReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Create once. Publish everywhere.
          </h2>
        </MotionReveal>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10"
            >
              <span className="text-sm font-bold text-accent">SB</span>
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-xs font-medium">
                  {platform.name.slice(0, 2)}
                </div>
                <span className="text-xs text-muted-foreground">{platform.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">One clip →</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {["Instagram Reel", "TikTok", "YouTube Short", "LinkedIn"].map((format) => (
                <span
                  key={format}
                  className="rounded-full border border-border px-3 py-1 text-xs"
                >
                  {format}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
