"use client";

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

export function FaqSection() {
  return (
    <Section variant="light" id="faq">
      <Container size="narrow">
        <MotionReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionReveal>
      </Container>
    </Section>
  );
}
