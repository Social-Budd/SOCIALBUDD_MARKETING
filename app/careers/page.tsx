import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "We are a small team building Social Budd. No open roles right now, but we read every note.",
  path: "/careers",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const howWeWork = [
  ["Small on purpose", "Few people, short decisions, and nothing waiting on a committee."],
  ["Built in the open", "You ship to real accounts in your first week, not to a staging demo."],
  ["Craft over volume", "One thing done properly beats five half-done. That is the whole bar."],
];

export default function CareersPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <Container>
        <MotionReveal>
          <h1 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Come build the thing that posts for everyone else.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            We are a small team making one job disappear for the people who do it every
            week. Here is how that works day to day.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {howWeWork.map(([title, body], i) => (
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
            <h2 className="text-[2rem] font-light leading-none tracking-[-0.03em] sm:text-[2.5rem]">
              No open roles
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Not hiring at the moment. If you work on content, video or AI and this sounds
              like your kind of problem, write anyway. We keep the good ones on file and
              come back to them.
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
  );
}
