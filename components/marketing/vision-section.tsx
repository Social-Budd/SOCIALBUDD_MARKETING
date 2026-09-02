import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Badge } from "@/components/ui/badge";

export function VisionSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <Badge variant="outline" className="mb-6">
              Future capability
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Your content gets smarter over time.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Social Budd can eventually learn which topics perform best, which hooks work,
              which clip lengths perform best, and which formats work for each client.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="mt-12 rounded-xl border border-border bg-card p-8 text-left">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Client A — AI insight</span>
              </div>
              <p className="mt-4 text-lg font-medium">
                Short educational clips with strong hooks perform best.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Next upload: Social Budd automatically prioritizes similar moments.
              </p>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
