import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <Container>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Turn your next video into your next month of content.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Upload once. Let Social Budd handle the rest.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/start">
                Start for free
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
