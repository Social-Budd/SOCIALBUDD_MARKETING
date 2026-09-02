"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

const HeroProductVisual = dynamic(
  () => import("./hero-product-visual").then((m) => m.HeroProductVisual),
  { ssr: false, loading: () => <div className="h-[420px] animate-pulse rounded-xl bg-muted" /> }
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="accent" className="mb-6">
              AI-powered social content platform
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Turn one video into{" "}
            <span className="gradient-text">weeks of social content.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Social Budd finds your best moments, turns them into engaging short clips,
            writes captions, and publishes them across your social channels — automatically.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/start">
                Start for free
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/#workflow">See how it works</Link>
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground">
            No credit card required
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative z-10 mt-16 md:mt-20"
        >
          <HeroProductVisual />
        </motion.div>
      </Container>
    </section>
  );
}
