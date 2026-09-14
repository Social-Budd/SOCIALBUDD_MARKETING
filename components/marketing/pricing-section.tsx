import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*  Surface                                                                    */
/* -------------------------------------------------------------------------- */

const card =
  "relative flex h-full flex-col overflow-hidden rounded-2xl p-7 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function PricingSection() {
  return (
    <Section id="pricing">
      <Container>
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Simple, transparent pricing.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            Start free and move up when you outgrow it. Every plan includes the clipping,
            captions and scheduling; the difference is how much you run through it.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <MotionReveal key={plan.name} delay={i * 0.05}>
              <div
                className={`${card} ${plan.highlighted ? "bg-[#1a1a1e]" : "bg-[#131315]"}`}
              >
                <div className="relative flex items-center gap-3">
                  <h3 className="text-[17px] font-semibold tracking-tight">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-white/[0.08] px-2.5 py-1 text-[11px] font-medium text-foreground/80">
                      Most popular
                    </span>
                  )}
                </div>

                <p className="relative mt-5 flex items-baseline gap-1.5">
                  <span className="text-[2.5rem] font-light leading-none tracking-[-0.03em]">
                    ${plan.price}
                  </span>
                  <span className="text-[13px] text-muted-foreground">/month</span>
                </p>

                <p className="relative mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="relative mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-[14px] leading-relaxed">
                      <Check
                        className="mt-[3px] h-3.5 w-3.5 shrink-0 text-foreground/45"
                        strokeWidth={2.5}
                      />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="relative mt-8 w-full rounded-full"
                  variant={plan.highlighted ? "default" : "secondary"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.2}>
          <p className="mt-10 text-center text-[14px] text-muted-foreground">
            Running more than this?{" "}
            <Link href="/contact" className="font-medium text-foreground hover:underline">
              Talk to sales
            </Link>
          </p>
        </MotionReveal>
      </Container>
    </Section>
  );
}
