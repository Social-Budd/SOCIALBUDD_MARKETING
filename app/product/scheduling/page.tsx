import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { CalendarSection } from "@/components/marketing/calendar-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "Scheduling",
  description:
    "A month of posts, placed at the hour each platform is busiest, without anyone opening a scheduler.",
  path: "/product/scheduling",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const points = [
  [
    "Times chosen per account",
    "The hour that works on LinkedIn is not the hour that works on TikTok, so they are not given the same slot.",
  ],
  [
    "A month, not a week",
    "The calendar fills far enough ahead that a quiet fortnight never turns into an empty feed.",
  ],
  [
    "Move one, keep the rest",
    "Push a post and everything around it stays where it is. Nothing cascades.",
  ],
  [
    "Approvals if you want them",
    "Hold the queue for a yes, or leave it running and check in when you feel like it.",
  ],
];

export default function SchedulingPage() {
  return (
    <>
      <PageHero
        badge="Scheduling"
        title="A full month, placed for you."
        description="Every post lands at the hour its platform is busiest. You never open a calendar to make it happen."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />

      <CalendarSection heading={false} />

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
                See a month mapped out
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Tell us which accounts you run and we will walk you through how a month
                would be laid out across them.
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
