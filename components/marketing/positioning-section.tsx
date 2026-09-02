import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

const traditionalTools = [
  "OpusClip",
  "CapCut",
  "Canva",
  "Buffer",
  "Analytics tool",
  "Manual file management",
];

const socialBuddWorkflow = [
  "Create",
  "Edit",
  "Approve",
  "Schedule",
  "Publish",
  "Analyze",
];

export function PositioningSection() {
  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            One workflow. Fewer tools. More content.
          </h2>
        </MotionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <MotionReveal>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-muted-foreground">Traditional workflow</h3>
              <div className="mt-6 space-y-2">
                {traditionalTools.map((tool, i) => (
                  <div key={tool} className="flex items-center gap-2">
                    <span className="text-sm">{tool}</span>
                    {i < traditionalTools.length - 1 && (
                      <span className="text-muted-foreground">+</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-8">
              <h3 className="text-lg font-semibold text-accent">Social Budd</h3>
              <p className="mt-2 text-2xl font-bold">One platform</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {socialBuddWorkflow.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-accent/20 bg-card px-3 py-1.5 text-sm">
                      {step}
                    </span>
                    {i < socialBuddWorkflow.length - 1 && (
                      <span className="text-accent">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
