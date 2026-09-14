import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

/* -------------------------------------------------------------------------- */
/*  Vectors                                                                    */
/*                                                                             */
/*  One drawing per phase, all in the same material: thin strokes and low       */
/*  opacity fills in currentColor, so they sit in the page instead of on it.    */
/* -------------------------------------------------------------------------- */

const stroke = { stroke: "currentColor", strokeOpacity: 0.4, fill: "currentColor", fillOpacity: 0.08 };

/** Many channels docking into one place. */
function ConnectArt() {
  const ys = [10, 45, 80];
  return (
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className="h-20 w-36 text-foreground sm:h-28 sm:w-52">
      {ys.map((y) => (
        <g key={y}>
          <rect x="2" y={y} width="26" height="26" rx="8" {...stroke} />
          <path d={`M28 ${y + 13} H62`} stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.25" />
          <circle cx="62" cy={y + 13} r="2.5" fill="currentColor" fillOpacity="0.45" />
        </g>
      ))}
      <path d="M62 23 V97" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.25" />
      <path d="M62 58 H112" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.25" />
      <rect x="112" y="42" width="34" height="34" rx="11" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.4" />
    </svg>
  );
}

/** One source turning into a set of finished posts. */
function CreateArt() {
  const posts = [
    [72, 14],
    [116, 14],
    [72, 62],
    [116, 62],
  ];
  return (
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className="h-20 w-36 text-foreground sm:h-28 sm:w-52">
      <rect x="4" y="38" width="34" height="34" rx="11" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.4" />
      <path d="M38 55 H56 M56 55 V28 H68" stroke="currentColor" strokeOpacity="0.26" strokeWidth="1.25" />
      <path d="M56 55 V82 H68" stroke="currentColor" strokeOpacity="0.26" strokeWidth="1.25" />
      {posts.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="38" height="32" rx="8" {...stroke} />
          <rect x={x + 8} y={y + 10} width="22" height="3" rx="1.5" fill="currentColor" fillOpacity="0.45" />
          <rect x={x + 8} y={y + 18} width="14" height="3" rx="1.5" fill="currentColor" fillOpacity="0.22" />
        </g>
      ))}
    </svg>
  );
}

/** A post waiting on a yes, with the queue behind it. */
function ApproveArt() {
  return (
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className="h-20 w-36 text-foreground sm:h-28 sm:w-52">
      <rect x="52" y="10" width="76" height="52" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.2" />
      <rect x="42" y="22" width="88" height="60" rx="12" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="56" y="40" width="44" height="4" rx="2" fill="currentColor" fillOpacity="0.45" />
      <rect x="56" y="52" width="28" height="4" rx="2" fill="currentColor" fillOpacity="0.22" />
      <circle cx="128" cy="76" r="14" fill="#070708" />
      <circle cx="128" cy="76" r="12" fill="currentColor" fillOpacity="0.9" />
      <path d="M122 76.5 l4 4 l8 -8.5" stroke="#070708" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Posts going out on time, and the results coming back. */
function PublishArt() {
  const bars = [26, 34, 30, 46, 58, 54, 72];
  return (
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className="h-20 w-36 text-foreground sm:h-28 sm:w-52">
      <path d="M8 96 H172" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.25" />
      {bars.map((h, i) => (
        <g key={i}>
          <rect
            x={12 + i * 23}
            y={96 - h}
            width="15"
            height={h}
            rx="4"
            fill="currentColor"
            fillOpacity={0.08 + i * 0.035}
            stroke="currentColor"
            strokeOpacity="0.32"
          />
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  The phases                                                                 */
/* -------------------------------------------------------------------------- */

const phases = [
  {
    title: "Connect your channels",
    body: "One approval per platform and we can post as you. Instagram, TikTok, YouTube, LinkedIn, and whatever you add later.",
    Art: ConnectArt,
  },
  {
    title: "We make the content",
    body: "Clips, posts and captions written in your voice, cut and sized the way each platform expects them.",
    Art: CreateArt,
  },
  {
    title: "You approve, or you skip it",
    body: "Hold every post for a yes when you want the control. Leave approvals off and it publishes straight through.",
    Art: ApproveArt,
  },
  {
    title: "It publishes and reports back",
    body: "Posts go out at the right time for each channel, and you see what landed and what to make more of.",
    Art: PublishArt,
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function WorkflowSection() {
  return (
    <Section id="workflow">
      <Container>
        <MotionReveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Connect it once. It runs from there.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Nothing to learn, nothing to hand over every week. This is the whole of it.
          </p>
        </MotionReveal>

        <div className="mt-12 max-w-5xl md:mt-16">
          {phases.map(({ title, body, Art }, i) => (
            <MotionReveal key={title} delay={i * 0.05}>
              <div className="grid items-center gap-4 py-8 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-10 md:py-12">
                <span className="text-[1.75rem] font-light leading-none tracking-[-0.03em] text-muted-foreground/45 md:text-[2.25rem]">
                  {i + 1}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
                  <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>

                <Art />
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
