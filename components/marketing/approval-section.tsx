"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";

const steps = [
  { id: "create", label: "Agency creates content" },
  { id: "send", label: "Client receives approval link" },
  { id: "review", label: "Client reviews post" },
  { id: "approved", label: "Approved & scheduled" },
];

export function ApprovalSection() {
  const [step, setStep] = useState(0);

  const handleApprove = () => setStep(3);
  const handleRequestChanges = () => setStep(2);

  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Client approval without endless messages.
          </h2>
        </MotionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-2">
            {steps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStep(i)}
                className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                  step === i ? "border-accent bg-accent/5" : "border-border bg-card"
                }`}
              >
                {i + 1}. {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              {step === 2 && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-soft"
                >
                  <p className="text-sm font-medium">Approve this post?</p>
                  <div className="mt-4 aspect-[9/16] rounded-lg bg-muted" />
                  <p className="mt-3 text-xs text-muted-foreground">
                    Strategy pivot clip · Instagram Reel
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" onClick={handleApprove}>
                      <Check className="mr-1 h-3.5 w-3.5" />
                      Approve
                    </Button>
                    <Button size="sm" variant="secondary" onClick={handleRequestChanges}>
                      <MessageSquare className="mr-1 h-3.5 w-3.5" />
                      Request changes
                    </Button>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  key="approved"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl border border-green-500/30 bg-green-500/5 p-8 text-center"
                >
                  <Check className="mx-auto h-12 w-12 text-green-400" />
                  <p className="mt-4 font-medium text-green-400">Approved</p>
                  <p className="mt-2 text-sm text-muted-foreground">Scheduled for Monday 9:00 AM</p>
                </motion.div>
              )}
              {step < 2 && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl border border-border bg-muted/30 p-8 text-center"
                >
                  <p className="text-sm text-muted-foreground">
                    {steps[step].label}
                  </p>
                  <Button className="mt-4" size="sm" onClick={() => setStep(2)}>
                    Continue to review
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
