import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "Documentation",
  description:
    "Guides for connecting accounts, shaping what gets made, and keeping the schedule running.",
  path: "/docs",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const guides = [
  [
    "Connecting accounts",
    "Approving each platform, adding a channel later, and disconnecting one when you want it back.",
  ],
  [
    "What gets made",
    "How moments are chosen, how captions are written in your voice, and the words to keep out.",
  ],
  [
    "Approvals",
    "Holding posts for a yes, reviewing a week in one pass, or letting them publish straight through.",
  ],
  [
    "The schedule",
    "How slots are picked per account, how a month fills, and moving something without breaking the rest.",
  ],
];

export default function DocsPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <Container>
        <MotionReveal>
          <h1 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            How it all works.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            Written guides for each part of the job. They land as we open them up; until
            then, ask us and we will walk you through it.
          </p>
        </MotionReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:mt-16 md:grid-cols-2">
          {guides.map(([title, body], i) => (
            <MotionReveal key={title} delay={i * 0.05}>
              <div className={`${card} flex h-full flex-col`}>
                <h2 className="text-[17px] font-semibold tracking-tight">{title}</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <span className="mt-auto pt-6 text-[13px] text-muted-foreground/60">
                  Coming soon
                </span>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.15}>
          <div className={`${card} mx-auto mt-4 max-w-4xl text-center sm:p-10`}>
            <h2 className="text-[17px] font-semibold tracking-tight">
              Need an answer today?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              The help centre covers the questions people ask most, and anything else comes
              straight back from a person.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="h-11 rounded-full px-6 text-[15px]">
                <Link href="/contact">
                  Contact us
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-11 rounded-full px-6 text-[15px]"
              >
                <Link href="/help">Help centre</Link>
              </Button>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}
