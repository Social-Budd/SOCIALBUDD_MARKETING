import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

/* -------------------------------------------------------------------------- */
/*  Surface                                                                    */
/* -------------------------------------------------------------------------- */

const tile =
  "relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#131315] p-6 sm:p-7 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  The job, in three parts                                                    */
/* -------------------------------------------------------------------------- */

const groups = [
  {
    stage: "Making it",
    items: [
      ["Clip finder", "The moments worth posting, pulled out of the full recording."],
      ["Subtitles", "Burned in and styled, checked against the transcript."],
      ["Speaker framing", "The crop follows whoever is talking, in every aspect ratio."],
    ],
  },
  {
    stage: "Sending it",
    items: [
      ["Native formats", "Vertical, square or landscape, cut for the platform it lands on."],
      ["Scheduling", "Slots picked per account and filled a month at a time."],
      ["Approvals", "Hold posts for a yes, or switch it off and let them run."],
    ],
  },
  {
    stage: "Knowing it worked",
    items: [
      ["Analytics", "Reach and engagement per account, tied to the clip that earned it."],
      ["Brand kit", "Your fonts, colours and logo applied to everything that goes out."],
      ["Workspaces", "A separate space per brand or client, with its own accounts."],
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function FeaturesSection() {
  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Everything you need in one platform.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            The whole job, from finding the moment to knowing how it did, without a second
            tool or a handover in between.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {groups.flatMap(({ items }) =>
            items.map(([name, body], i) => (
              <MotionReveal key={name} delay={i * 0.05}>
                <div className={tile}>
                  <h3 className="relative text-[17px] font-semibold tracking-tight">
                    {name}
                  </h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </MotionReveal>
            ))
          )}
        </div>
      </Container>
    </Section>
  );
}
