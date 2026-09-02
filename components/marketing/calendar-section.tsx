import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { AppShell } from "@/components/product-ui/app-shell";
import { CalendarGrid } from "@/components/product-ui/calendar-grid";

export function CalendarSection() {
  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Plan your content calendar in one place.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Schedule posts across platforms. Track status from draft to published.
          </p>
        </MotionReveal>

        <div className="mt-12">
          <AppShell clientName="Acme" compact>
            <CalendarGrid />
          </AppShell>
        </div>
      </Container>
    </Section>
  );
}
