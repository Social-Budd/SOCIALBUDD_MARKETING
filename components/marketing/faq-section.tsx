"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants";

/* Each question sits on its own light ground; the shared accordion keeps the
   open and close behaviour. */
const item = "rounded-2xl border-b-0 bg-white/[0.03] px-6 sm:px-7";

export function FaqSection() {
  return (
    <Section id="faq">
      <Container size="narrow">
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Questions people ask first.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            If yours is not here, ask us directly and a person will answer.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          {/* A light ground per question, so each one reads as its own row. */}
          <Accordion type="single" collapsible className="mt-12 space-y-3 md:mt-16">
            {faqItems.map((entry, i) => (
              <AccordionItem key={i} value={`item-${i}`} className={item}>
                <AccordionTrigger className="py-5 text-[16px] font-medium">
                  {entry.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed">
                  {entry.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionReveal>

        {/* <MotionReveal delay={0.15}>
          <p className="mt-10 text-center text-[14px] text-muted-foreground">
            Still deciding?{" "}
            <Link href="/contact" className="font-medium text-foreground hover:underline">
              Talk to us
            </Link>
          </p>
        </MotionReveal> */}
      </Container>
    </Section>
  );
}
