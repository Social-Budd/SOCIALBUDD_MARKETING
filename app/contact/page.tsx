import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Tell us what you need running and we will reply within one working day.",
  path: "/contact",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const next = [
  ["You write", "A line about your brand or your clients, and where you post today."],
  ["We reply", "Within one working day, with a view on what we would post first."],
  ["We walk you through it", "The clips, the schedule and the channels we would run, on a short call."],
];

export default function ContactPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <Container>
        <MotionReveal>
          <h1 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Tell us what you need running.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            A person reads every message. We reply within one working day, usually sooner.
          </p>
        </MotionReveal>

        <div className="mt-12 grid items-stretch gap-4 md:mt-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* What happens after you send it, one card per step */}
          <div className="grid content-start gap-4">
            {next.map(([title, body], i) => (
              <MotionReveal key={title} delay={i * 0.06}>
                <div className={card}>
                  <h2 className="text-[17px] font-semibold tracking-tight">{title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* The form */}
          <MotionReveal delay={0.08} className="h-full">
            <div className={`${card} h-full`}>
              <ContactForm />
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
