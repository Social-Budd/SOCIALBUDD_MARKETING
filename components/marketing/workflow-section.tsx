"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { workflowSteps } from "@/lib/demo-data";

export function WorkflowSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      const step = Math.min(Math.floor(progress * workflowSteps.length), workflowSteps.length - 1);
      setActiveStep(step);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="workflow" ref={ref}>
      <Container>
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Complete workflow
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            From long-form to everywhere.
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-2">
            {workflowSteps.map((step, i) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`w-full rounded-lg border px-4 py-4 text-left transition-all ${
                  activeStep === i
                    ? "border-accent bg-accent/5"
                    : "border-border bg-card hover:border-border/80"
                }`}
              >
                <span className="text-xs font-medium text-accent">Step {step.step}</span>
                <p className="mt-1 font-medium">{step.title}</p>
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border bg-card p-8 shadow-soft"
            >
              <span className="text-sm font-medium text-accent">
                Step {workflowSteps[activeStep].step}
              </span>
              <h3 className="mt-2 text-2xl font-bold">{workflowSteps[activeStep].title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {workflowSteps[activeStep].description}
              </p>
              <div className="mt-6 flex gap-1">
                {workflowSteps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i <= activeStep ? "bg-accent" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
