import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <Section variant="light" id="pricing">
      <Container>
        <MotionReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Simple, transparent pricing.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start free. Upgrade as you grow.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <MotionReveal key={plan.name} delay={i * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl border p-6 transition-all hover:-translate-y-1",
                  plan.highlighted
                    ? "border-accent bg-accent/5 shadow-elevated ring-1 ring-accent/20"
                    : "border-border bg-card"
                )}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-6 w-full"
                  variant={plan.highlighted ? "default" : "secondary"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need more?{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              Talk to sales
            </Link>
          </p>
        </MotionReveal>
      </Container>
    </Section>
  );
}
