import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "For Creators",
  description:
    "Keep posting every day without editing every day. Social Budd turns what you already record into the short form.",
  path: "/solutions/creators",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const forCreators = [
  [
    "You record, it posts",
    "One long upload a week is enough. The clips, captions and timings come off the back of it.",
  ],
  [
    "Your voice, not a template",
    "Captions are written the way you talk, per platform, rather than the same line pasted four times.",
  ],
  [
    "Every account fed",
    "Reels, TikTok, Shorts and the rest, each in its own shape, without exporting four versions.",
  ],
  [
    "The editing stops",
    "No timeline, no subtitle burn-in, no resizing at midnight before a post goes out.",
  ],
];

export default function CreatorsPage() {
  return (
    <>
      <PageHero
        badge="For creators"
        title="Create more. Edit less."
        description="Spend the week making the thing you actually want to make. Everything that happens to it afterwards is handled."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />

      <Section className="pt-4 md:pt-6">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {forCreators.map(([title, body], i) => (
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
                One upload a week is enough
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Tell us where you post and what you record. We will show you what a month
                of it would look like.
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
