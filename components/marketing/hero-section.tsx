"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroEyebrow } from "./hero-eyebrow";
import { HeroPipeline } from "./hero-pipeline";
import { HeroDoodles } from "./hero-doodles";

export function HeroSection() {
  return (
    <section className="relative overflow-x-clip pt-24 pb-4 sm:pt-28 sm:pb-6 md:pt-36 md:pb-8">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

      <Container>
        {/* Entrances are CSS keyframes rather than JS-driven, so the copy is
            on screen from the first paint even before hydration. */}
        <div className="relative">
          <HeroDoodles />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="hero-in hero-in-1">
            <HeroEyebrow />
          </div>

          <h1 className="hero-in hero-in-2 font-display text-balance text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-[2.75rem] md:text-6xl lg:text-7xl">
            Create once.{" "}
            <span className="gradient-text">Multiply everywhere.</span>
          </h1>

          <p className="hero-in hero-in-3 mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-[17px]">
            One piece of content becomes posts for every account connected to Social
            Budd, each one written, sized and scheduled for the platform it lands on.
          </p>

          {/* Side by side on every screen: half-width pills on phones, natural
              width from sm up. */}
          <div className="hero-in hero-in-4 mt-7 flex items-center justify-center gap-2.5 sm:mt-10 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-11 flex-1 rounded-full px-4 text-[14px] sm:h-12 sm:flex-none sm:px-6 sm:text-base"
            >
              <Link href="/start">
                Start for free
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-11 flex-1 rounded-full px-4 text-[14px] sm:h-12 sm:flex-none sm:px-6 sm:text-base"
            >
              <Link href="/#workflow">See how it works</Link>
            </Button>
          </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 md:mt-14">
          <HeroPipeline />
        </div>
      </Container>
    </section>
  );
}
