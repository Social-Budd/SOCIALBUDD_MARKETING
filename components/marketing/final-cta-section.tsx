import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function FinalCtaSection() {
  return (
    <Section className="relative overflow-hidden">
      {/* The same quiet ground the hero uses, so the page closes where it opened. */}
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[560px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.07),transparent_70%)]" />

      <Container>
        <MotionReveal>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              Your channels can be full by next week.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:mt-6">
              Connect your accounts, point us at what you already have, and the first
              posts go out in days.
            </p>

            <div className="mt-9 flex justify-center sm:mt-10">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full px-6 text-[15px] sm:h-12 sm:px-7 sm:text-base"
              >
                <Link href="/contact">
                  Contact us
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}
