import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { faqItems } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Help Center",
  description:
    "Answers to the questions people ask most, and a person to write to for anything else.",
  path: "/help",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

export default function HelpPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <Container>
        <MotionReveal>
          <h1 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            The questions we get asked most. If yours is not here, write to us and a person
            will answer within a working day.
          </p>
        </MotionReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:mt-16 md:grid-cols-2">
          {faqItems.slice(0, 6).map((item, i) => (
            <MotionReveal key={item.question} delay={i * 0.05}>
              <div className={`${card} h-full`}>
                <h2 className="text-[17px] font-semibold tracking-tight">{item.question}</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.15}>
          <div className={`${card} mx-auto mt-4 max-w-4xl text-center sm:p-10`}>
            <h2 className="text-[17px] font-semibold tracking-tight">
              Still stuck on something?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Tell us what you are trying to do and we will answer it directly, not with a
              link to an article.
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
