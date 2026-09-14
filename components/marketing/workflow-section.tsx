"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { BRAND_PATHS } from "@/components/ui/platform-icons";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/* -------------------------------------------------------------------------- */
/*  Vectors                                                                    */
/*                                                                             */
/*  One drawing per phase, all in the same material: thin strokes and low       */
/*  opacity fills in currentColor, so they sit in the page instead of on it.    */
/* -------------------------------------------------------------------------- */

const art = "h-32 w-52 text-foreground sm:h-40 sm:w-72 lg:h-44 lg:w-80";
const stroke = { stroke: "currentColor", strokeOpacity: 0.4, fill: "currentColor", fillOpacity: 0.08 };
const line = { stroke: "currentColor", strokeOpacity: 0.3, strokeWidth: 1.25 };

/* The drawing assembles itself once, in the order the step actually happens:
   the pieces arrive, then the lines run out and connect them. */
const flow: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};

const nodeIn: Variants = {
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const lineIn: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.55, ease: "easeInOut" }, opacity: { duration: 0.1 } },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  shown: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 18 } },
};

const growIn: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  shown: { opacity: 1, scaleY: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

/** Scale transforms on SVG shapes need their own box to grow from. */
const fromCenter = { transformBox: "fill-box", transformOrigin: "center" } as const;
const fromBottom = { transformBox: "fill-box", transformOrigin: "bottom" } as const;

/** Wraps a drawing so it plays once, when it reaches the middle of the screen. */
function Drawing({ children }: { children: React.ReactNode }) {
  const calm = usePrefersReducedMotion();
  return (
    <svg viewBox="0 0 200 122" fill="none" aria-hidden className={art}>
      <motion.g
        variants={flow}
        initial={calm ? "shown" : "hidden"}
        whileInView="shown"
        viewport={{ once: true, amount: 0.6 }}
      >
        {children}
      </motion.g>
    </svg>
  );
}

/** One workspace, the platforms it posts to, and the accounts on each. */
function ConnectArt() {
  const rows = [
    { y: 20, mark: BRAND_PATHS.instagram, accounts: 3 },
    { y: 61, mark: BRAND_PATHS.tiktok, accounts: 2 },
    { y: 102, mark: BRAND_PATHS.linkedin, accounts: 2 },
  ];
  const branches = [
    "M56 61 a10 10 0 0 0 10 -10 V30 a10 10 0 0 1 10 -10",
    "M56 61 a10 10 0 0 1 10 10 V92 a10 10 0 0 0 10 10",
    "M36 61 H76",
  ];

  return (
    <Drawing>
      <motion.rect
        variants={nodeIn}
        x="4"
        y="45"
        width="32"
        height="32"
        rx="10"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.4"
      />

      {branches.map((d) => (
        <motion.path key={d} variants={lineIn} d={d} {...line} />
      ))}

      {rows.map(({ y, mark }) => (
        <motion.g key={y} variants={nodeIn}>
          <rect x="76" y={y - 13} width="26" height="26" rx="8" {...stroke} />
          <g transform={`translate(82.5 ${y - 6.5}) scale(0.54)`}>
            <path d={mark} fill="currentColor" fillOpacity="0.7" />
          </g>
        </motion.g>
      ))}

      {rows.map(({ y, accounts }) => (
        <motion.g key={`a${y}`} variants={nodeIn}>
          <path d={`M102 ${y} H126`} {...line} />
          {Array.from({ length: accounts }, (_, i) => accounts - 1 - i).map((i) => (
            <g key={i}>
              <circle cx={133 + i * 10} cy={y} r="8.5" fill="#131315" />
              <circle
                cx={133 + i * 10}
                cy={y}
                r="7"
                fill="currentColor"
                fillOpacity="0.16"
                stroke="currentColor"
                strokeOpacity="0.38"
              />
            </g>
          ))}
        </motion.g>
      ))}
    </Drawing>
  );
}

/** One landscape video recut into every aspect ratio a channel wants. */
function CreateArt() {
  const outputs = [
    { x: 149, y: 6, w: 18, h: 32 },
    { x: 145, y: 48, w: 26, h: 26 },
    { x: 140, y: 84, w: 36, h: 20 },
  ];
  const branches = [
    "M92 61 a10 10 0 0 0 10 -10 V32 a10 10 0 0 1 10 -10 H149",
    "M92 61 a10 10 0 0 1 10 10 V84 a10 10 0 0 0 10 10 H140",
    "M64 61 H145",
  ];

  return (
    <Drawing>
      <motion.g variants={nodeIn}>
        <rect x="4" y="44" width="60" height="34" rx="8" {...stroke} />
        <path d="M29 55 l12 6 l-12 6 z" fill="currentColor" fillOpacity="0.5" />
      </motion.g>

      {branches.map((d) => (
        <motion.path key={d} variants={lineIn} d={d} {...line} />
      ))}

      {outputs.map(({ x, y, w, h }) => (
        <motion.g key={h} variants={popIn} style={fromCenter}>
          <rect x={x} y={y} width={w} height={h} rx="6" {...stroke} />
          <rect
            x={x + 4}
            y={y + h - 8}
            width={w - 8}
            height="3"
            rx="1.5"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </motion.g>
      ))}
    </Drawing>
  );
}

/** The three recuts going in, one approved post coming out. */
function ApproveArt() {
  const inputs = [
    { x: 8, y: 8, w: 14, h: 25 },
    { x: 5, y: 51, w: 20, h: 20 },
    { x: 2, y: 95, w: 26, h: 15 },
  ];
  const branches = [
    "M22 20 H56 a10 10 0 0 1 10 10 V51 a10 10 0 0 0 10 10",
    "M28 102 H56 a10 10 0 0 0 10 -10 V71 a10 10 0 0 1 10 -10",
    "M25 61 H104",
  ];

  return (
    <Drawing>
      {inputs.map(({ x, y, w, h }) => (
        <motion.rect key={h} variants={nodeIn} x={x} y={y} width={w} height={h} rx="5" {...stroke} />
      ))}

      {branches.map((d) => (
        <motion.path key={d} variants={lineIn} d={d} {...line} />
      ))}

      <motion.g variants={nodeIn}>
        <rect
          x="104"
          y="34"
          width="78"
          height="54"
          rx="12"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeOpacity="0.4"
        />
        <rect x="118" y="52" width="42" height="4" rx="2" fill="currentColor" fillOpacity="0.45" />
        <rect x="118" y="64" width="26" height="4" rx="2" fill="currentColor" fillOpacity="0.22" />
      </motion.g>

      <motion.g variants={popIn} style={fromCenter}>
        <circle cx="178" cy="86" r="14" fill="#131315" />
        <circle cx="178" cy="86" r="12" fill="currentColor" fillOpacity="0.9" />
        <path
          d="M172 86.5 l4 4 l8 -8.5"
          stroke="#131315"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </Drawing>
  );
}

/** Posts going out on every channel, and the results coming back. */
function PublishArt() {
  const rows = [
    { y: 20, mark: BRAND_PATHS.instagram },
    { y: 61, mark: BRAND_PATHS.tiktok },
    { y: 102, mark: BRAND_PATHS.linkedin },
  ];
  const branches = [
    "M30 20 H56 a10 10 0 0 1 10 10 V51 a10 10 0 0 0 10 10",
    "M30 102 H56 a10 10 0 0 0 10 -10 V71 a10 10 0 0 1 10 -10",
    "M30 61 H104",
  ];
  const bars = [12, 18, 15, 24, 32, 40];

  return (
    <Drawing>
      {rows.map(({ y, mark }) => (
        <motion.g key={y} variants={nodeIn}>
          <rect x="4" y={y - 13} width="26" height="26" rx="8" {...stroke} />
          <g transform={`translate(10.5 ${y - 6.5}) scale(0.54)`}>
            <path d={mark} fill="currentColor" fillOpacity="0.7" />
          </g>
        </motion.g>
      ))}

      {branches.map((d) => (
        <motion.path key={d} variants={lineIn} d={d} {...line} />
      ))}

      <motion.rect
        variants={nodeIn}
        x="104"
        y="30"
        width="92"
        height="62"
        rx="12"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeOpacity="0.28"
      />

      {bars.map((h, i) => (
        <motion.rect
          key={i}
          variants={growIn}
          style={fromBottom}
          x={116 + i * 13}
          y={78 - h}
          width="8"
          height={h}
          rx="3"
          fill="currentColor"
          fillOpacity={0.16 + i * 0.05}
          stroke="currentColor"
          strokeOpacity="0.3"
        />
      ))}
    </Drawing>
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

/** The heading is dropped where the page already has one of its own. */
export function WorkflowSection({ heading = true }: { heading?: boolean }) {
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
        {heading && (
          <MotionReveal>
            <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              Connect it once. It runs from there.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center md:mt-6 text-[15px] leading-relaxed text-muted-foreground">
              Nothing to learn, nothing to hand over every week. This is the whole of it.
            </p>
          </MotionReveal>
        )}

        <div className={`grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 ${heading ? "mt-12 md:mt-16" : ""}`}>
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
