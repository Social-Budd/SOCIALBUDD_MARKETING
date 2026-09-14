import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "About",
  description:
    "Social Budd keeps an organization's social channels running: clips, captions, scheduling and publishing in one place.",
  path: "/about",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const beliefs = [
  [
    "Posting is a job, not a task",
    "Somebody has to own it every week, and that somebody is usually already doing another job.",
  ],
  [
    "The material already exists",
    "Most brands are sitting on recordings that would carry a month of posts. Very little of it ever goes out.",
  ],
  [
    "Tools are not the answer",
    "Another editor and another scheduler still leave a person moving files between them. The work has to come off the desk entirely.",
  ],
];

export default function AboutPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <Container>
        <MotionReveal>
          <h1 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            We run the channels so nobody has to.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            Social Budd takes the whole posting job off an organization&apos;s desk: finding
            the moments, cutting them, writing them, scheduling them and sending them out.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {beliefs.map(([title, body], i) => (
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
          <div className={`${card} mt-4 sm:p-10`}>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-[17px] font-semibold tracking-tight">Where we are now</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                We are a small team, working closely with the first organizations we run
                channels for. That is deliberate: the product gets shaped by the people
                whose week it is supposed to give back.
              </p>
              <Button asChild className="mt-8 h-11 rounded-full px-6 text-[15px]">
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
