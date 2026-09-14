import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

/* -------------------------------------------------------------------------- */
/*  Surface                                                                    */
/* -------------------------------------------------------------------------- */

const card =
  "relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#131315] p-6 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  What it can work from                                                      */
/* -------------------------------------------------------------------------- */

const sources = [
  ["A podcast episode", "One conversation carries a fortnight of posts on its own."],
  ["A webinar or talk", "The parts people replayed, cut out of the hour nobody watches twice."],
  ["An interview", "Questions you have answered a hundred times, said once and used everywhere."],
  ["A product demo", "The thirty seconds that explain it, lifted out of the walkthrough."],
  ["Footage from your phone", "Shot at your desk, on site, or between meetings. It is enough."],
  ["The archive you forgot", "Last year's recordings are still new to most of your audience."],
];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function SourceSection() {
  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            One hour of footage. A month of posts.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            You do not need a studio, a content plan or anything new. Whatever you already
            record is the raw material.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map(([title, body], i) => (
            <MotionReveal key={title} delay={i * 0.05}>
              <div className={card}>
                <h3 className="relative text-[17px] font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">
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
