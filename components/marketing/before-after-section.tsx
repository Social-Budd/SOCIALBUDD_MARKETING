import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

/* -------------------------------------------------------------------------- */
/*  Surfaces                                                                   */
/* -------------------------------------------------------------------------- */

const tile =
  "relative flex h-full flex-col overflow-hidden rounded-2xl p-7 sm:p-8 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

const figure = "text-[3rem] font-light leading-none tracking-[-0.03em] sm:text-[3.5rem]";

/* -------------------------------------------------------------------------- */
/*  The two ways it goes                                                       */
/* -------------------------------------------------------------------------- */

const columns = [
  {
    heading: "On your own",
    amount: "6 hrs",
    unit: "per video",
    points: [
      ["Seven steps", "for every single video"],
      ["Someone owns it", "every week, without fail"],
      ["Three posts", "go out, if the week allows"],
    ],
    footnote:
      "Watching it back, cutting, subtitling, captioning, resizing, scheduling, posting.",
    lit: false,
  },
  {
    heading: "With Social Budd",
    amount: "10 min",
    unit: "per video",
    points: [
      ["One step", "approve it, or skip approvals"],
      ["Nobody to hire", "and nothing to chase"],
      ["Fifteen posts", "go out, every week"],
    ],
    footnote: "All of it handled, on every account you connect.",
    lit: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function BeforeAfterSection() {
  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            The difference is the time and the effort.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            The posts that go out look the same either way. What changes is how much of
            your week they take, and how many people it takes to get them there.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
          {columns.map(({ heading, amount, unit, points, footnote, lit }, i) => (
            <MotionReveal key={heading} delay={i * 0.08}>
              <div className={`${tile} ${lit ? "bg-[#17171a]" : "bg-[#101012]"}`}>
                <p
                  className={`relative text-[15px] font-semibold tracking-tight ${
                    lit ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {heading}
                </p>

                <p className={`relative mt-6 ${figure} ${lit ? "" : "text-muted-foreground"}`}>
                  {amount}
                  <span className="ml-2 text-[0.32em] tracking-normal text-muted-foreground">
                    {unit}
                  </span>
                </p>

                <ul className="relative mt-8 space-y-3.5">
                  {points.map(([value, rest]) => (
                    <li key={value} className="text-[15px] leading-relaxed">
                      <span className={lit ? "text-foreground" : "text-foreground/80"}>
                        {value}
                      </span>
                      <span className="text-muted-foreground"> {rest}</span>
                    </li>
                  ))}
                </ul>

                <p className="relative mt-auto pt-8 text-[13px] leading-relaxed text-muted-foreground/80">
                  {footnote}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
