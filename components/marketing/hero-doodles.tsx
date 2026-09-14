"use client";

import { MotionConfig, motion, type Variants } from "motion/react";

/**
 * Hand-written notes down either side of the hero, naming who this is for.
 * Each one writes itself in and then throws an arrow across to the headline.
 * Decorative, so it is hidden from assistive tech and never takes a click.
 */

type Note = {
  text: string;
  side: "left" | "right";
  top: string;
  /** How far into the free space beside the headline the note sits, 0 to 1. */
  depth: number;
  tilt: number;
  arrow: { rotate: number; width: string };
};

/** Pinned at irregular heights, depths and angles, the way notes get stuck on. */
const notes: Note[] = [
  { text: "Agencies", side: "left", top: "-3%", depth: 0.05, tilt: -9, arrow: { rotate: 6, width: "w-[58px]" } },
  { text: "Podcasts", side: "left", top: "37%", depth: 0.24, tilt: 4, arrow: { rotate: -10, width: "w-[52px]" } },
  { text: "Real estate", side: "left", top: "76%", depth: 0.11, tilt: -3, arrow: { rotate: -4, width: "w-[64px]" } },
  { text: "SaaS teams", side: "right", top: "4%", depth: 0.06, tilt: 7, arrow: { rotate: -5, width: "w-[56px]" } },
  { text: "Creators", side: "right", top: "43%", depth: 0.22, tilt: -6, arrow: { rotate: 10, width: "w-[52px]" } },
  { text: "Ecommerce", side: "right", top: "82%", depth: 0.10, tilt: 3, arrow: { rotate: 4, width: "w-[62px]" } },
];

const label: Variants = {
  hidden: { opacity: 0, y: 8 },
  shown: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.45 + i * 0.14, duration: 0.5, ease: "easeOut" },
  }),
};

const stroke: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.62 + i * 0.14, duration: 0.55, ease: "easeInOut" },
      opacity: { delay: 0.62 + i * 0.14, duration: 0.1 },
    },
  }),
};

const head: Variants = {
  hidden: { opacity: 0 },
  shown: (i: number) => ({
    opacity: 1,
    transition: { delay: 1.05 + i * 0.14, duration: 0.25 },
  }),
};

/**
 * A drawn arrow running from the note toward the headline. Every note uses the
 * same curve, mirrored for the right-hand side, so the set reads as one hand.
 * Length and angle vary per note instead.
 */
function Arrow({
  index,
  flip,
  width,
}: {
  index: number;
  flip?: boolean;
  width: string;
}) {
  return (
    <svg
      viewBox="0 0 96 46"
      fill="none"
      aria-hidden
      className={`h-[26px] ${width} text-foreground/30 ${flip ? "-scale-x-100" : ""}`}
    >
      <motion.path
        custom={index}
        variants={stroke}
        d="M4 7 C14 30 40 40 84 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        custom={index}
        variants={head}
        d="M72 22 L86 30 L70 37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroDoodles() {
  return (
    // reducedMotion="user" is read when the animation runs, so it holds for a
    // preference the server could not have known about at render time.
    <MotionConfig reducedMotion="user">
    <motion.div
      className="pointer-events-none absolute inset-0 hidden xl:block"
      aria-hidden
      /* The free space beside the headline column, which is what the notes are
         scattered across. It shrinks with the window, so they never clip. */
      style={{ "--gutter": "calc((100vw - 56rem) / 2)" } as React.CSSProperties}
      initial="hidden"
      animate="shown"
    >
      {notes.map(({ text, side, top, depth, tilt, arrow }, i) => (
        <span
          key={text}
          className={`absolute flex flex-col ${side === "left" ? "items-start" : "items-end"}`}
          style={{
            top,
            [side]: `calc(var(--gutter) * ${depth})`,
            transform: `rotate(${tilt}deg)`,
          }}
        >
          <motion.span
            custom={i}
            variants={label}
            className="font-hand whitespace-nowrap text-[21px] leading-none text-foreground/45"
          >
            {text}
          </motion.span>
          <span
            className={side === "left" ? "ml-5" : "mr-5"}
            style={{ transform: `rotate(${arrow.rotate}deg)` }}
          >
            <Arrow index={i} flip={side === "right"} width={arrow.width} />
          </span>
        </span>
      ))}
    </motion.div>
    </MotionConfig>
  );
}
