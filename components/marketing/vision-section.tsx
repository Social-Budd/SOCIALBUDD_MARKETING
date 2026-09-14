import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

const tile =
  "relative h-full overflow-hidden rounded-2xl bg-[#131315] p-6 sm:p-7 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  What it learns as it goes                                                  */
/* -------------------------------------------------------------------------- */

const learns = [
  {
    title: "Hooks",
    body: "The openings your audience stays for, rather than the ones that read well on paper.",
  },
  {
    title: "Lengths",
    body: "Where attention drops off on your channels, and the cut that gets in before it does.",
  },
  {
    title: "Timing",
    body: "The hours your accounts are actually seen, which is rarely the same on two platforms.",
  },
];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function VisionSection() {
  return (
    <Section>
      <Container>
        <MotionReveal>
          <p className="flex justify-center">
            <span className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-medium text-muted-foreground">
              Coming soon
            </span>
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            It gets sharper the longer it runs.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            Every post teaches it something about your audience. What worked last month
            shapes what gets made next month, without anyone reading a report.
          </p>
        </MotionReveal>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {learns.map(({ title, body }, i) => (
            <MotionReveal key={title} delay={i * 0.07}>
              <div className={tile}>
                <p className="relative text-[2rem] font-light leading-none tracking-[-0.03em]">
                  {title}
                </p>
                <p className="relative mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>

      </Container>
    </Section>
  );
}
