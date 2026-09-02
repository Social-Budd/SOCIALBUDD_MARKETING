import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { AppShell } from "@/components/product-ui/app-shell";
import { AnalyticsChart } from "@/components/product-ui/analytics-chart";

export function AnalyticsSection() {
  return (
    <Section variant="muted">
      <Container>
        <MotionReveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Know what content actually works.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Track views, engagement, and top performing clips. All data shown is illustrative demo data.
          </p>
        </MotionReveal>

        <div className="mt-12">
          <AppShell clientName="Acme">
            <AnalyticsChart />
          </AppShell>
        </div>
      </Container>
    </Section>
  );
}
