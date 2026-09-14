import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ClippingDemoSection } from "@/components/marketing/clipping-demo-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "AI Clipping",
  description:
    "The moments worth posting, found in the whole recording and cut ready to go out.",
  path: "/product/clipping",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const points = [
  [
    "It reads everything",
    "The full transcript, not the first ten minutes. The best line is rarely near the top.",
  ],
  [
    "Cut where it makes sense",
    "Clips start on the thought, not mid-sentence, and end before the moment goes flat.",
  ],
  [
    "Framed on the speaker",
    "The crop follows whoever is talking, so a vertical cut still looks deliberate.",
  ],
  [
    "Subtitled as standard",
    "Burned in and checked against the transcript, because most of this is watched on mute.",
  ],
];

export default function ClippingPage() {
  return (
    <>
      <PageHero
        badge="AI clipping"
        title="The moments are already in the recording."
        description="We read the whole thing, mark the parts that hold attention, and cut each one into something ready to post."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />

      <ClippingDemoSection heading={false} />

      <Section className="pt-0 md:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map(([title, body], i) => (
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
                Try it on your own recording
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Point us at something you have already recorded and we will show you what
                comes out of it.
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
