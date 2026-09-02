import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { trustCategories } from "@/lib/demo-data";

export function TrustSection() {
  return (
    <Section variant="muted" className="py-12 md:py-16">
      <Container>
        <MotionReveal>
          <p className="text-center text-sm font-medium text-muted-foreground">
            Built for teams that create content at scale
          </p>
        </MotionReveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustCategories.map((category, i) => (
            <MotionReveal key={category} delay={i * 0.05}>
              <div className="flex h-12 items-center rounded-lg border border-border bg-card px-6">
                <span className="text-sm font-medium text-muted-foreground">{category}</span>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
