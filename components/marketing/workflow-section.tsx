"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

/* -------------------------------------------------------------------------- */
/*  Vectors                                                                    */
/*                                                                             */
/*  One drawing per phase, all in the same material: thin strokes and low       */
/*  opacity fills in currentColor, so they sit in the page instead of on it.    */
/* -------------------------------------------------------------------------- */

const art = "h-32 w-52 text-foreground sm:h-40 sm:w-72 lg:h-44 lg:w-80";
const stroke = { stroke: "currentColor", strokeOpacity: 0.4, fill: "currentColor", fillOpacity: 0.08 };

/** Many channels docking into one place. */
function ConnectArt() {
  // Each channel runs into one trunk with a rounded elbow. The paths meet at a
  // single point, so no line crosses another or runs past a joint.
  const branches = [
    "M28 23 H52 a10 10 0 0 1 10 10 V48 a10 10 0 0 0 10 10",
    "M28 93 H52 a10 10 0 0 0 10 -10 V68 a10 10 0 0 1 10 -10",
    "M28 58 H112",
  ];
  return (
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className={art}>
      {[10, 45, 80].map((y) => (
        <rect key={y} x="2" y={y} width="26" height="26" rx="8" {...stroke} />
      ))}
      {branches.map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.25" />
      ))}
      <rect x="112" y="41" width="34" height="34" rx="11" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.4" />
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
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className={art}>
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
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className={art}>
      {/* Both cards share one treatment, and the front one is opaque so the
          card behind reads as a queue rather than showing through it. */}
      <rect x="58" y="8" width="74" height="50" rx="10" fill="#1a1a1e" stroke="currentColor" strokeOpacity="0.34" />
      <rect x="40" y="24" width="88" height="58" rx="12" fill="#212126" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="54" y="42" width="44" height="4" rx="2" fill="currentColor" fillOpacity="0.45" />
      <rect x="54" y="54" width="28" height="4" rx="2" fill="currentColor" fillOpacity="0.22" />
      <circle cx="128" cy="76" r="14" fill="#131315" />
      <circle cx="128" cy="76" r="12" fill="currentColor" fillOpacity="0.9" />
      <path d="M122 76.5 l4 4 l8 -8.5" stroke="#131315" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Posts going out on time, and the results coming back. */
function PublishArt() {
  const bars = [26, 34, 30, 46, 58, 54, 72];
  return (
    <svg viewBox="0 0 180 110" fill="none" aria-hidden className={art}>
      {bars.map((h, i) => (
        <rect
          key={i}
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
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  The phases                                                                 */
/* -------------------------------------------------------------------------- */

const panelSurface =
  "relative overflow-hidden bg-[#131315] " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(65%_60%_at_100%_0%,rgba(255,255,255,0.07),transparent_70%)]";

const selectedCard =
  "absolute inset-0 overflow-hidden rounded-2xl bg-[#131315] " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(65%_60%_at_100%_0%,rgba(255,255,255,0.07),transparent_70%)]";

const phases = [
  {
    label: "Connect",
    title: "Connect your channels",
    body: "One approval per platform and we can post as you. Instagram, TikTok, YouTube, LinkedIn, and whatever you add later.",
    Art: ConnectArt,
  },
  {
    label: "Create",
    title: "We make the content",
    body: "Clips, posts and captions written in your voice, cut and sized the way each platform expects them.",
    Art: CreateArt,
  },
  {
    label: "Approve",
    title: "You approve, or you skip it",
    body: "Hold every post for a yes when you want the control. Leave approvals off and it publishes straight through.",
    Art: ApproveArt,
  },
  {
    label: "Publish",
    title: "It publishes and reports back",
    body: "Posts go out at the right time for each channel, and you see what landed and what to make more of.",
    Art: PublishArt,
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function WorkflowSection() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  // The panel closest to the middle of the screen owns the list. Measuring on
  // scroll (rather than watching for a band crossing) leaves no dead zones, so
  // the list never lags behind or sticks between two panels.
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let nearest = 0;
      let shortest = Infinity;

      panels.current.forEach((el, i) => {
        if (!el) return;
        const box = el.getBoundingClientRect();
        const distance = Math.abs(box.top + box.height / 2 - middle);
        if (distance < shortest) {
          shortest = distance;
          nearest = i;
        }
      });

      setActive((current) => (current === nearest ? current : nearest));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

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

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          {/* The phase list follows the scroll, and can be clicked to jump. */}
          <nav className="hidden lg:sticky lg:top-32 lg:block lg:h-fit" aria-label="Workflow phases">
            <ul className="space-y-3">
              {phases.map((phase, i) => (
                <li key={phase.label}>
                  <button
                    type="button"
                    onClick={() =>
                      panels.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                    aria-current={active === i ? "step" : undefined}
                    className="relative w-full rounded-2xl bg-white/1.5 px-5 py-4 text-left"
                  >
                    {active === i && (
                      <motion.span
                        layoutId="workflow-active"
                        transition={{ type: "spring", stiffness: 340, damping: 34 }}
                        className={selectedCard}
                      />
                    )}
                    <span
                      className={`relative block text-[13px] font-medium transition-colors ${
                        active === i ? "text-muted-foreground" : "text-muted-foreground/50"
                      }`}
                    >
                      Step {i + 1}
                    </span>
                    <span
                      className={`relative mt-1 block text-[17px] font-semibold tracking-tight transition-colors ${
                        active === i ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {phase.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* The panels themselves. */}
          <div className="space-y-14 lg:space-y-24">
            {phases.map(({ title, body, Art }, i) => (
              <div
                key={title}
                data-index={i}
                ref={(el) => {
                  panels.current[i] = el;
                }}
                className="scroll-mt-32"
              >
                <div
                  className={`flex h-[220px] items-center justify-center rounded-lg sm:h-[280px] ${panelSurface}`}
                >
                  <Art />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">
                  <span className="mr-2 font-light text-muted-foreground/50 lg:hidden">{i + 1}</span>
                  {title}
                </h3>
                <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
