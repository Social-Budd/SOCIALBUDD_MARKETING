import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Notes on keeping social channels running: what gets posted, what works, and what we learn.",
  path: "/blog",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

/** What the first pieces will cover, so the page says something today. */
const planned = [
  [
    "What a month of posts costs",
    "The hours behind a week of content, counted properly, including the parts nobody logs.",
  ],
  [
    "Why the good moments get missed",
    "The parts of a recording that hold attention are rarely the parts you remember afterwards.",
  ],
  [
    "One clip, four platforms",
    "The same thirty seconds, cut and written four ways, and what changes between them.",
  ],
];

export default function BlogPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <Container>
        <MotionReveal>
          <h1 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Notes from running other people&apos;s channels.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            What gets posted, what actually works, and what we learn doing it week after
            week. The first pieces are being written now.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {planned.map(([title, body], i) => (
            <MotionReveal key={title} delay={i * 0.06}>
              <div className={`${card} flex h-full flex-col`}>
                <h2 className="text-[17px] font-semibold tracking-tight">{title}</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <span className="mt-auto pt-6 text-[13px] text-muted-foreground/60">
                  In the works
                </span>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.15}>
          <div className={`${card} mt-4 text-center sm:p-10`}>
            <h2 className="text-[17px] font-semibold tracking-tight">
              Want the first one when it lands?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Send us a line and we will put you on the list. No newsletter machine, just
              the piece when it is written.
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
