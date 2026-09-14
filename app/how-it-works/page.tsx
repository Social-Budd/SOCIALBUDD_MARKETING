import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { WorkflowSection } from "@/components/marketing/workflow-section";
import { ClippingDemoSection } from "@/components/marketing/clipping-demo-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "How it works",
  description:
    "Connect your accounts once. We make the content, you approve it if you want to, and it publishes itself.",
  path: "/how-it-works",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const asks = [
  [
    "What we need from you",
    "One approval per platform, and somewhere to find the material you already record.",
  ],
  [
    "What we handle",
    "Reading the recording, cutting it, writing it, sizing it, timing it and sending it.",
  ],
  [
    "What you keep",
    "The final say if you want it, and everything that gets made, whether you stay or not.",
  ],
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        badge="How it works"
        title="Connect it once. It runs from there."
        description="Four steps, and only the first one needs you. This is what each part actually involves."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />

      <WorkflowSection heading={false} />

      <ClippingDemoSection />

      <Section className="pt-0 md:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {asks.map(([title, body], i) => (
              <MotionReveal key={title} delay={i * 0.06}>
                <div className={`${card} h-full`}>
                  <h2 className="text-[17px] font-semibold tracking-tight">{title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={0.15}>
            <div className={`${card} mt-4 text-center sm:p-10`}>
              <h2 className="text-[17px] font-semibold tracking-tight">
                See it on your own channels
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Tell us where you post and what you record. We will walk you through what
                the first month would look like.
              </p>
              <Button asChild className="mt-8 h-11 rounded-full px-6 text-[15px]">
                <Link href="/contact">
                  Contact us
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
