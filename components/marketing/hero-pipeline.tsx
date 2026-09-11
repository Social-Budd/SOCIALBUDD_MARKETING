"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CalendarClock,
  MessageSquare,
  Send,
  Sparkles,
  TrendingUp,
  Upload,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";
import { easePremium } from "@/lib/motion";

/**
 * Scenes waiting in the queue hold still: every entrance, timer and sweep
 * inside them is skipped, exactly as when motion is reduced.
 */
const StillContext = createContext(false);

/**
 * Reduced motion is only honoured after hydration: the server cannot know the
 * preference, so reading it during the first client render would produce
 * markup that differs from the server's and trip a hydration error.
 */
const useCalm = () => {
  const reduced = useReducedMotion();
  const still = useContext(StillContext);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return (reduced && hydrated) || still;
};

/* -------------------------------------------------------------------------- */
/*  Surface language                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Objects float straight on the page as lit glass: a faint white wash, a
 * hairline edge, a brighter top rim where the light lands, deep shadow below.
 */
// A translucent face over the stage glow picks the light up as a pale band,
// so the cards are solid charcoal: a hairline edge and a deep shadow only.
const glass =
  "border border-white/[0.09] bg-[#161618] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]";

/**
 * The recording's card is fully covered by the video, so a backdrop blur would
 * cost every frame and show nothing. Border and shadow only.
 */
const solid =
  "border border-white/[0.09] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]";

/** Weighted, unhurried arrivals. */
const glide = { type: "spring", stiffness: 100, damping: 19, mass: 1 } as const;

/* -------------------------------------------------------------------------- */
/*  Content                                                                    */
/* -------------------------------------------------------------------------- */

const stages = [
  { name: "Add", Icon: Upload, copy: "Drop in a recording, or paste a link." },
  { name: "Create", Icon: Sparkles, copy: "AI pulls out the moments worth posting." },
  { name: "Review", Icon: MessageSquare, copy: "Comments and sign-off stay on the clip." },
  { name: "Schedule", Icon: CalendarClock, copy: "Pick a slot per channel, or let us choose." },
  { name: "Publish", Icon: Send, copy: "Goes out native to every platform you run." },
  { name: "Analytics", Icon: TrendingUp, copy: "What lands feeds back into the next cut." },
] as const;

const ADD = 0;
const CREATE = 1;
const REVIEW = 2;
const SCHEDULE = 3;
const PUBLISH = 4;
const MEASURE = 5;

/**
 * Three crops of the same frame — the core move of the product, shown
 * literally. Each is framed on the speaker and varied by `zoom`, so no cut
 * ever shows him half out of frame. `hot` is the word the caption lights on.
 */
const clips = [
  {
    Icon: InstagramIcon,
    channel: "Instagram",
    words: ["we", "cut", "ad", "spend", "to", "zero"],
    hot: 5,
    focus: "44% 30%",
    zoom: 1.28,
    length: "0:38",
    score: 94,
  },
  {
    Icon: TikTokIcon,
    channel: "TikTok",
    words: ["the", "first", "3", "seconds", "decide"],
    hot: 2,
    focus: "44% 32%",
    zoom: 1,
    length: "0:24",
    score: 97,
  },
  {
    Icon: YouTubeIcon,
    channel: "YouTube",
    words: ["post", "it", "four", "ways,", "not", "one"],
    hot: 2,
    focus: "44% 26%",
    zoom: 1.5,
    length: "0:51",
    score: 91,
  },
] as const;

/** The channels people run first; the rest sit behind a count. */
const channels = [
  { Icon: InstagramIcon, name: "Instagram" },
  { Icon: TikTokIcon, name: "TikTok" },
  { Icon: YouTubeIcon, name: "YouTube" },
  { Icon: LinkedInIcon, name: "LinkedIn" },
  { Icon: XIcon, name: "X" },
] as const;
const MORE_CHANNELS = 6;
const TOTAL_CHANNELS = channels.length + MORE_CHANNELS;

/** Where in the recording the three cuts come from, as fractions. */
const moments = [
  [0.07, 0.17],
  [0.38, 0.5],
  [0.7, 0.82],
] as const;

const reach = [18, 24, 21, 33, 41, 38, 52, 61, 74, 88];

/* -------------------------------------------------------------------------- */
/*  Objects on the stage                                                       */
/* -------------------------------------------------------------------------- */

/** The scalloped verified mark, drawn in currentColor. */
function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M22.02 11.164a1.84 1.84 0 0 0-.57-.67l-1.33-1a.35.35 0 0 1-.14-.2a.36.36 0 0 1 0-.25l.55-1.63a2 2 0 0 0 .06-.9a1.8 1.8 0 0 0-.36-.84a1.86 1.86 0 0 0-.7-.57a1.75 1.75 0 0 0-.85-.17h-1.5a.41.41 0 0 1-.39-.3l-.43-1.5a1.9 1.9 0 0 0-.46-.81a2 2 0 0 0-.78-.49a2 2 0 0 0-.92-.06a1.9 1.9 0 0 0-.83.39l-1.14.9a.35.35 0 0 1-.23.09a.36.36 0 0 1-.22-.05l-1.13-.9a1.85 1.85 0 0 0-.8-.38a1.9 1.9 0 0 0-.88 0a1.9 1.9 0 0 0-.78.43a2.1 2.1 0 0 0-.51.79l-.43 1.51a.38.38 0 0 1-.15.22a.4.4 0 0 1-.27.07H5.41a1.9 1.9 0 0 0-.89.18a1.8 1.8 0 0 0-.71.57a1.9 1.9 0 0 0-.36.83c-.05.293-.03.595.06.88L4 8.993a.41.41 0 0 1-.14.45l-1.33 1c-.242.18-.44.412-.58.68a1.93 1.93 0 0 0 0 1.71a2 2 0 0 0 .58.68l1.33 1a.41.41 0 0 1 .14.45l-.55 1.63a2 2 0 0 0-.07.91c.05.298.174.58.36.82c.183.25.428.45.71.58c.265.126.557.184.85.17h1.49a.38.38 0 0 1 .25.08a.34.34 0 0 1 .14.21l.43 1.51a2 2 0 0 0 .46.8a1.89 1.89 0 0 0 2.54.17l1.15-.91a.39.39 0 0 1 .49 0l1.13.9c.24.202.53.337.84.39q.17.015.34 0a1.9 1.9 0 0 0 .58-.09a1.87 1.87 0 0 0 1.24-1.28l.44-1.52a.34.34 0 0 1 .14-.21a.4.4 0 0 1 .27-.08h1.43a2 2 0 0 0 .89-.17a1.91 1.91 0 0 0 1.06-1.4a1.9 1.9 0 0 0-.07-.92l-.54-1.62a.36.36 0 0 1 0-.25a.35.35 0 0 1 .14-.2l1.33-1a1.9 1.9 0 0 0 .57-.68a1.8 1.8 0 0 0 .21-.86a1.9 1.9 0 0 0-.23-.78m-5.44-.76l-4.42 4.42a2 2 0 0 1-.59.4c-.222.09-.46.138-.7.14a1.7 1.7 0 0 1-.71-.15a1.9 1.9 0 0 1-.6-.4l-2.18-2.19a1 1 0 0 1 1.41-1.41l2.08 2.08l4.3-4.31a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.46z"
      />
    </svg>
  );
}

/** One pass of the analysis head across the source frame. */
function ScanSweep() {
  return (
    <motion.span
      aria-hidden
      initial={{ left: "-6%", opacity: 0 }}
      animate={{ left: ["-6%", "104%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.7, ease: [0.33, 0, 0.2, 1], times: [0, 0.12, 0.86, 1] }}
      className="pointer-events-none absolute inset-y-0 w-[2px] bg-accent shadow-[0_0_26px_6px_rgba(255,106,61,0.5)]"
    />
  );
}

function CropFrame({ instant = false }: { instant?: boolean }) {
  const reduceMotion = useCalm();
  return (
    <motion.div
      initial={reduceMotion || instant ? { opacity: 0 } : { opacity: 0, scaleX: 1.5, scaleY: 1.15 }}
      animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.9, ease: easePremium }}
      className="pointer-events-none absolute left-[35%] top-[6%] h-[88%] w-[27.8%]"
    >
      <div className="absolute inset-0 rounded-sm border border-dashed border-accent/90" />
      {[
        "left-0 top-0 border-l-2 border-t-2",
        "right-0 top-0 border-r-2 border-t-2",
        "left-0 bottom-0 border-b-2 border-l-2",
        "right-0 bottom-0 border-b-2 border-r-2",
      ].map((pos) => (
        <span key={pos} className={`absolute h-3 w-3 border-accent ${pos}`} />
      ))}
    </motion.div>
  );
}

/**
 * The recording. It owns the centre while it is read and cut, then leaves
 * the stage entirely so the clips can take it.
 */
function SourceCard({
  stage,
  processed,
  back,
  animateIn,
}: {
  stage: number;
  /** The moments are already found: show the finished state, no scan. */
  processed: boolean;
  /** Arrived by stepping backwards. */
  back: boolean;
  /** False on the first paint so the server-rendered card is not invisible. */
  animateIn: boolean;
}) {
  const reduceMotion = useCalm();
  const videoRef = useRef<HTMLVideoElement>(null);
  const cutting = stage === CREATE;
  const scanning = cutting && !processed;
  const instant = reduceMotion || processed;

  // Gating `src`/`autoPlay` on reduceMotion would make server and client
  // markup differ. Ship the same markup and stop playback after mount.
  useEffect(() => {
    if (reduceMotion) videoRef.current?.pause();
  }, [reduceMotion]);

  return (
    <motion.div
      // Returning after the cut, it comes back down along the path it left
      // on. Only a fresh recording rises in from below.
      // Video under an animated blur is dropped by the compositor and flickers,
      // so the recording only ever moves and fades — never blurs.
      initial={
        reduceMotion || !animateIn
          ? false
          : back
            ? { opacity: 0, y: -90, scale: 0.86 }
            : { opacity: 0, y: 40 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: 0,
        y: -72,
        scale: 0.9,
        transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
      }}
      transition={glide}
      className={`relative z-10 w-[min(100%,640px)] overflow-hidden rounded-2xl will-change-[transform,opacity] ${solid}`}
    >
      <div className="relative overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="aspect-video w-full object-cover"
          poster="/media/studio-source.jpg"
          src="/media/studio-source.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="A podcast being recorded in a studio"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
        <span className="absolute left-3 top-2.5 text-[11px] font-medium text-white/90">
          growth-without-ads-ep142.mp4
        </span>
        <span className="absolute right-3 top-2.5 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-white/85 backdrop-blur">
          58:12
        </span>

        <AnimatePresence>
          {scanning && !reduceMotion && <ScanSweep key="sweep" />}
        </AnimatePresence>
        <AnimatePresence>{cutting && <CropFrame instant={instant} />}</AnimatePresence>

        {/* One overlay for both beats, so the foot of the recording never
            pops: the gradient and the track stay put while the label and the
            fill change under them. */}
        {stage <= CREATE && (
          <div className="absolute inset-x-0 bottom-0">
            <div className="h-14 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-x-4 bottom-3">
              <div className="mb-2 flex h-4 items-center justify-between text-[10px] font-medium text-white/85">
                <span className="relative h-4 min-w-[140px]">
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={cutting ? "find" : "read"}
                      initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3, ease: easePremium }}
                      className="absolute left-0 top-0 flex h-4 items-center gap-1.5 whitespace-nowrap"
                    >
                      {cutting ? (
                        <>
                          <Sparkles className="h-3 w-3 text-accent" />
                          Finding the moments
                        </>
                      ) : back ? (
                        "Audio read"
                      ) : (
                        "Reading audio"
                      )}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <motion.span
                  initial={false}
                  animate={{ opacity: cutting ? 1 : 0 }}
                  transition={{ delay: cutting && !instant ? 1.5 : 0, duration: 0.35 }}
                  className="tabular-nums text-accent"
                >
                  3 found
                </motion.span>
              </div>

              {/* the recording as a strip: read through first, then the kept
                  stretches take over the same track */}
              <div className="relative h-[3px] rounded-full bg-white/15">
                <motion.span
                  initial={{ width: back || instant ? "100%" : "0%" }}
                  animate={{ width: "100%", opacity: cutting ? 0 : 1 }}
                  transition={{
                    width: { duration: back || instant ? 0 : 2.3, ease: [0.3, 0, 0.1, 1] },
                    opacity: { duration: 0.5, ease: easePremium },
                  }}
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                />
                {moments.map(([a, b], i) => (
                  <motion.span
                    key={i}
                    initial={false}
                    animate={{ scaleX: cutting ? 1 : 0, opacity: cutting ? 1 : 0 }}
                    transition={{
                      delay: cutting && !instant ? 0.5 + i * 0.35 : 0,
                      duration: 0.45,
                      ease: easePremium,
                    }}
                    style={{ left: `${a * 100}%`, width: `${(b - a) * 100}%` }}
                    className="absolute inset-y-0 origin-left rounded-full bg-accent shadow-[0_0_10px_rgba(255,106,61,0.7)]"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/** Burned-in caption with the word the hook turns on lit in accent. */
function Caption({ words, hot }: { words: readonly string[]; hot: number }) {
  return (
    <p className="text-center text-[11px] font-extrabold leading-[1.35] tracking-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,.9)] sm:text-[12px] lg:text-[13px]">
      {words.map((w, i) => (
        <span key={i}>
          {i === hot ? (
            <span className="rounded-[4px] bg-accent px-1 py-px text-accent-foreground [text-shadow:none]">
              {w}
            </span>
          ) : (
            w
          )}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

/** The three cuts fan out from under the recording. */
function ClipFan({ stage, cut }: { stage: number; cut: boolean }) {
  const reduceMotion = useCalm();
  const found = stage >= CREATE && cut;
  const reviewed = stage >= REVIEW;
  const live = stage >= PUBLISH;

  const pose = [
    { rotate: -6, y: 16, x: 4, z: 1 },
    { rotate: 0, y: 0, x: 0, z: 3 },
    { rotate: 6, y: 16, x: -4, z: 2 },
  ];

  return (
    <div className="flex items-end justify-center">
      <AnimatePresence>
        {found &&
          clips.map(({ Icon, channel, words, hot, focus, zoom, length, score }, i) => (
            <motion.figure
              key={channel}
              style={{ zIndex: pose[i].z }}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: pose[i].y + 40,
                      x: pose[i].x,
                      scale: 0.96,
                      rotate: pose[i].rotate,
                    }
              }
              animate={{
                opacity: 1,
                y: pose[i].y,
                x: pose[i].x,
                scale: 1,
                rotate: pose[i].rotate,
              }}
              exit={{
                opacity: 0,
                y: pose[i].y - 20,
                scale: 0.96,
                transition: { duration: 0.5, ease: easePremium, delay: (2 - i) * 0.06 },
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: reduceMotion ? 0 : 0.25 + i * 0.14,
              }}
              className="relative mx-1 w-[94px] shrink-0 will-change-[transform,opacity] sm:w-[150px] md:w-[160px] lg:mx-1.5 xl:w-[184px]"
            >
              <motion.span
                initial={{ opacity: 0, y: 8, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...glide, delay: reduceMotion ? 0 : 1.05 + i * 0.14 }}
                className={`absolute -top-4 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full ${glass}`}
              >
                <Icon className="h-4 w-4" />
              </motion.span>

              <div className="relative overflow-hidden rounded-2xl bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                <img
                  src="/media/studio-source.jpg"
                  alt=""
                  width={1280}
                  height={720}
                  className="aspect-[9/16] w-full object-cover"
                  style={{
                    objectPosition: focus,
                    transform: `scale(${zoom})`,
                    transformOrigin: focus,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/35" />

                <span className="absolute right-2 top-2 text-[9px] font-medium tabular-nums text-white/85">
                  {length}
                </span>

                <AnimatePresence>
                  {live && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ...glide, delay: reduceMotion ? 0 : i * 0.14 }}
                      className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 text-[9px] font-semibold text-white backdrop-blur"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      Live
                    </motion.span>
                  )}
                </AnimatePresence>

                <div className="absolute inset-x-2 bottom-2 space-y-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: reduceMotion ? 0 : 1.1 + i * 0.14, duration: 0.6 }}
                  >
                    <Caption words={words} hot={hot} />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold tabular-nums text-white backdrop-blur">
                      {score}
                      <span className="ml-1 font-normal text-white/60">score</span>
                    </span>
                    <AnimatePresence>
                      {reviewed && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.4 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ ...glide, delay: reduceMotion ? 0 : 0.7 + i * 0.1 }}
                          className="text-success drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                        >
                          <VerifiedBadge className="h-5 w-5" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.figure>
          ))}
      </AnimatePresence>
    </div>
  );
}

/** A note from the team, landing beside the cuts. */
/** What the product is doing to the recording, one task at a time. */
const processing: Record<number, { title: string; tasks: { label: string; doneAt: number; note?: string }[] }> = {
  [ADD]: {
    title: "Preparing your recording",
    tasks: [
      { label: "Uploading recording", doneAt: 500 },
      { label: "Processing video", doneAt: 1500 },
      { label: "Transcribing audio", doneAt: 2500 },
    ],
  },
  [CREATE]: {
    title: "Creating clips",
    tasks: [
      { label: "Transcript ready", doneAt: 0 },
      { label: "Finding best moments", doneAt: 1500, note: "3 found" },
      { label: "Writing captions", doneAt: 1900 },
    ],
  },
};

function ProcessCard({ stage, back }: { stage: number; back: boolean }) {
  const reduceMotion = useCalm();
  const plan = processing[stage];
  const [elapsed, setElapsed] = useState(reduceMotion || back ? Infinity : 0);

  // Tick through the tasks on their own clock; a return visit shows them done.
  useEffect(() => {
    if (reduceMotion || back) {
      setElapsed(Infinity);
      return;
    }
    setElapsed(0);
    const start = performance.now();
    const id = setInterval(() => setElapsed(performance.now() - start), 100);
    return () => clearInterval(id);
  }, [stage, reduceMotion, back]);

  if (!plan) return null;

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24, transition: { duration: 0.35, ease: easePremium } }}
      transition={{ ...glide, delay: reduceMotion ? 0 : 0.25 }}
      className={`w-full rounded-2xl p-3.5 xl:w-[228px] ${glass}`}
    >
      <p className="text-[13px] font-semibold xl:text-[12px]">{plan.title}</p>
      <ul className="mt-2.5 space-y-2">
        {plan.tasks.map(({ label, doneAt, note }, i) => {
          const done = elapsed >= doneAt;
          const running = !done && (i === 0 || elapsed >= plan.tasks[i - 1].doneAt);
          return (
            <li key={label} className="flex items-center gap-2 text-[11px]">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                {done ? (
                  <VerifiedBadge className="h-4 w-4 text-success" />
                ) : running ? (
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-accent border-t-transparent" />
                ) : (
                  <span className="h-3.5 w-3.5 rounded-full border-[1.5px] border-white/15" />
                )}
              </span>
              <span
                className={`truncate transition-colors duration-500 ${
                  done ? "text-foreground/80" : running ? "text-foreground" : "text-muted-foreground/60"
                }`}
              >
                {label}
              </span>
              {note && done && (
                <span className="ml-auto shrink-0 text-[10px] font-semibold tabular-nums text-accent">
                  {note}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function ReviewCard({ show }: { show: boolean }) {
  const reduceMotion = useCalm();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{ ...glide, delay: reduceMotion ? 0 : 0.3 }}
          className={`w-full rounded-2xl p-3.5 xl:w-[228px] ${glass}`}
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/50 text-[10px] font-bold text-accent-foreground">
              PR
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold leading-tight">Priya</p>
              <p className="text-[10px] leading-tight text-muted-foreground">Creative lead</p>
            </div>
          </div>
          <p className="mt-2.5 text-[12px] leading-relaxed text-foreground/85">
            Hook lands on the second clip. Approving all three.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.9, duration: 0.4 }}
            className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-success/15 py-0.5 pl-1 pr-2 text-[10px] font-medium text-success"
          >
            <VerifiedBadge className="h-4 w-4" />
            Approved
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Where the cuts are going. Every channel lights up as it goes live. */
function ChannelsCard({ show, live }: { show: boolean; live: boolean }) {
  const reduceMotion = useCalm();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{ ...glide, delay: reduceMotion ? 0 : 0.3 }}
          className={`w-full rounded-2xl p-3.5 xl:w-[268px] ${glass}`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px] font-semibold">
              <CalendarClock className="h-3.5 w-3.5 text-accent" />
              {live ? "Published" : "Scheduled"}
            </span>
            <span className="text-[10px] tabular-nums text-muted-foreground">Tue 9:00 AM</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {channels.map(({ Icon, name }, i) => (
              <motion.span
                key={name}
                title={name}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: live ? [1, 1.18, 1] : 1 }}
                transition={{
                  opacity: { duration: 0.35, delay: reduceMotion ? 0 : 0.5 + i * 0.05 },
                  scale: {
                    duration: 0.6,
                    delay: reduceMotion ? 0 : live ? i * 0.07 : 0.5 + i * 0.05,
                  },
                }}
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-500 ${
                  live ? "border-success/50 bg-success/10" : "border-white/10 bg-white/[0.05]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <AnimatePresence>
                  {live && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ ...glide, delay: reduceMotion ? 0 : i * 0.07 }}
                      className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0b0b0d] bg-success"
                    />
                  )}
                </AnimatePresence>
              </motion.span>
            ))}
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.5 + channels.length * 0.05 }}
              title={`${MORE_CHANNELS} more channels`}
              className={`flex h-8 items-center justify-center rounded-full border px-3 text-[11px] font-semibold transition-colors duration-500 ${
                live
                  ? "border-success/50 bg-success/10 text-success"
                  : "border-white/10 bg-white/[0.05] text-foreground/80"
              }`}
            >
              + More
            </motion.span>
          </div>
          <p className="mt-2.5 text-[10px] text-muted-foreground">
            {live
              ? `Live on ${TOTAL_CHANNELS} channels, native to each`
              : `${TOTAL_CHANNELS} channels connected, best slot for each`}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Counts up once the results land. */
function ReachFigure({ run }: { run: boolean }) {
  const reduceMotion = useCalm();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) {
      setN(0);
      return;
    }
    if (reduceMotion) {
      setN(62);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.round(62 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, reduceMotion]);

  return (
    <p className="text-xl font-bold tabular-nums leading-none tracking-tight text-accent">
      +{n}%
    </p>
  );
}

/** What came back. */
function ResultsCard({ show }: { show: boolean }) {
  const reduceMotion = useCalm();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{ ...glide, delay: reduceMotion ? 0 : 0.25 }}
          className={`w-full rounded-2xl p-3.5 xl:w-[236px] ${glass}`}
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="flex items-center gap-1.5 text-[12px] font-semibold">
                <TrendingUp className="h-3.5 w-3.5 text-accent" />
                Reach
              </p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">first 48 hours</p>
            </div>
            <ReachFigure run={show} />
          </div>
          <div className="mt-3 flex h-10 items-end gap-[3px]" aria-hidden>
            {reach.map((h, i) => (
              <motion.span
                key={i}
                initial={reduceMotion ? false : { height: "6%" }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : 0.3 + i * 0.07,
                  ease: easePremium,
                }}
                className="flex-1 rounded-[2px] bg-gradient-to-t from-accent/40 to-accent"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  The stage                                                                  */
/* -------------------------------------------------------------------------- */

function Stage({
  stage,
  cut,
  processed,
  back,
  animateIn,
}: {
  stage: number;
  cut: boolean;
  processed: boolean;
  back: boolean;
  animateIn: boolean;
}) {
  const still = useContext(StillContext);
  const reviewed = stage >= REVIEW;
  const scheduled = stage >= SCHEDULE;
  const live = stage >= PUBLISH;
  const measured = stage >= MEASURE;

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col">
      {/* the light the objects sit in; a 64px blur is costly, so only the
          running scene gets it */}
      {!still && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 bottom-0 bg-[radial-gradient(55%_60%_at_50%_20%,rgba(255,106,61,0.22),transparent_70%)] blur-3xl"
        />
      )}

      <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center">
        <AnimatePresence>
          {!cut && (
            <SourceCard
              key="source"
              stage={stage}
              processed={processed}
              back={back}
              animateIn={animateIn}
            />
          )}
        </AnimatePresence>

        {/* wide screens: what is happening to the recording sits beside it */}
        <div className="absolute left-0 top-1/2 hidden w-[228px] -translate-y-1/2 xl:block">
          <AnimatePresence>
            {!cut && stage <= CREATE && (
              <ProcessCard key={stage} stage={stage} back={back} />
            )}
          </AnimatePresence>
        </div>

        <div className={`w-full ${cut ? "absolute inset-x-0 top-1/2 -translate-y-1/2" : "hidden"}`}>
          <ClipFan stage={stage} cut={cut} />

          {/* wide screens: the cards float beside the fan and accumulate */}
          <div className="hidden xl:block">
            <div className="absolute left-0 top-[24%]">
              <ReviewCard show={reviewed} />
            </div>
            <div className="absolute right-0 top-[4%]">
              <ChannelsCard show={scheduled} live={live} />
            </div>
            <div className="absolute bottom-0 right-0">
              <ResultsCard show={measured} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

/**
 * Stacked layouts (below xl): the cards this step is about, in a row beneath
 * the scene. Phones show one; from sm up two sit side by side from Schedule
 * on, so the story accumulates the way it does on desktop.
 */
function CardRow({ stage, back }: { stage: number; back: boolean }) {
  const live = stage >= PUBLISH;
  return (
    <div className="mt-4 min-h-[104px] xl:hidden">
      <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
        <div className={stage <= CREATE ? "sm:col-span-2 sm:mx-auto sm:w-[min(100%,340px)]" : "hidden"}>
          <AnimatePresence>
            {stage <= CREATE && <ProcessCard key={stage} stage={stage} back={back} />}
          </AnimatePresence>
        </div>

        <div
          className={
            stage === REVIEW
              ? "sm:col-span-2 sm:mx-auto sm:w-[min(100%,340px)]"
              : stage === SCHEDULE || stage === PUBLISH
                ? "hidden sm:block"
                : "hidden"
          }
        >
          <ReviewCard show={stage >= REVIEW && stage <= PUBLISH} />
        </div>

        <div className={stage === SCHEDULE || stage === PUBLISH || stage === MEASURE ? "" : "hidden"}>
          <div className={stage === MEASURE ? "hidden sm:block" : ""}>
            <ChannelsCard show={stage >= SCHEDULE} live={live} />
          </div>
        </div>

        <div className={stage === MEASURE ? "" : "hidden"}>
          <ResultsCard show={stage === MEASURE} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step bar                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * The six steps as one rounded bar heading the section: the running step is
 * lit, finished ones are ticked, and the stretch between them fills as the
 * story moves. One line beneath says what the running step does.
 */
function StepBar({
  stage,
  onSelect,
}: {
  stage: number;
  onSelect: (i: number) => void;
}) {
  const reduceMotion = useCalm();

  return (
    <ol
      className={`mx-auto flex w-full max-w-4xl items-center justify-between rounded-full p-1 sm:p-2 ${glass}`}
      aria-label="Workflow steps"
    >
      {stages.map(({ name, Icon }, i) => {
        const active = i === stage;
        const done = i < stage;
        return (
          <li key={name} className="relative flex min-w-0 flex-1">
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={name}
              aria-current={active ? "step" : undefined}
              className={`relative flex w-full items-center justify-center gap-2 rounded-full p-1 text-[13px] font-medium transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-1.5 sm:pl-1.5 sm:pr-2.5 ${
                active
                  ? "text-accent-foreground"
                  : done
                    ? "text-foreground/80"
                    : "text-muted-foreground/70 hover:text-foreground"
              }`}
            >
              {/* the highlight is one object that pours from step to step */}
              {active && (
                <motion.span
                  aria-hidden
                  layoutId="step-highlight"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 210, damping: 26, mass: 0.9 }
                  }
                  className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#ff7d55_0%,#ff6a3d_100%)] shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_0_28px_-6px_rgba(255,106,61,0.8)]"
                />
              )}
              <span
                className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                  active ? "bg-white/20" : done ? "bg-accent/15 text-accent" : "bg-white/[0.06]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className={`relative z-10 truncate ${active ? "hidden md:inline" : "hidden md:inline"}`}>
                {name}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

/** How long each step holds before the next begins. */
const HOLD = [2600, 4300, 2700, 2600, 2600, 3400];

/** How long the recording is worked on before the cuts come out of it. */
const CUT_AFTER = 1900;

const clampStage = (i: number) => Math.min(stages.length - 1, Math.max(0, i));

/**
 * A fixed-size section that plays the story on its own: it starts when it
 * comes into view, holds each step long enough to be read, and after Measure
 * cross-fades into the next take so the stage is never empty. The step bar
 * jumps to any step.
 */
export function HeroPipeline({ debugStage }: { debugStage?: number } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [liveStage, setLiveStage] = useState(ADD);
  const [back, setBack] = useState(false);
  // Which take is playing; a new one starts after Measure.
  const [take, setTake] = useState(0);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Bumped on every manual jump so the running timer restarts from it.
  const [run, setRun] = useState(0);
  const stageRef = useRef(ADD);
  // Lets a preview pin a step without waiting; unused in production.
  const stage = debugStage ?? liveStage;

  const setStage = (i: number) => {
    const next = clampStage(i);
    setBack(next < stageRef.current);
    stageRef.current = next;
    setLiveStage(next);
    setRun((n) => n + 1);
  };

  // After the first paint, later entrances may animate.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Play only while on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // With motion reduced there is nothing to play: rest on the finished step.
  useEffect(() => {
    if (reduceMotion) {
      stageRef.current = MEASURE;
      setLiveStage(MEASURE);
    }
  }, [reduceMotion]);

  // The clock. Each step holds, then hands over; after the last, a new take
  // begins from Add.
  useEffect(() => {
    if (reduceMotion || !inView || debugStage != null) return;
    const current = stageRef.current;
    const id = setTimeout(() => {
      setBack(false);
      if (current < stages.length - 1) {
        stageRef.current = current + 1;
        setLiveStage(current + 1);
      } else {
        stageRef.current = ADD;
        setLiveStage(ADD);
        setTake((n) => n + 1);
      }
    }, HOLD[current]);
    return () => clearTimeout(id);
  }, [liveStage, run, inView, reduceMotion, debugStage]);

  // The cut: going forward, the recording is worked on first, then leaves
  // and the clips take the stage. Going backward is the mirror: the clips
  // retract and the recording returns already processed.
  const [cut, setCut] = useState(false);
  const [processed, setProcessed] = useState(false);
  useEffect(() => {
    if (stage >= REVIEW) {
      setCut(true);
      setProcessed(true);
      return;
    }
    setCut(false);
    if (stage === ADD) {
      setProcessed(false);
      return;
    }
    if (back) {
      setProcessed(true);
      return;
    }
    setProcessed(false);
    const id = setTimeout(() => setCut(true), reduceMotion ? 0 : CUT_AFTER);
    return () => clearTimeout(id);
  }, [stage, back, reduceMotion]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col gap-4 sm:gap-6"
    >
      <StepBar stage={stage} onSelect={setStage} />
      <div className="relative mx-auto h-[236px] w-full max-w-6xl sm:h-[356px] md:h-[380px] xl:h-[388px]">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={take}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.985,
              transition: { duration: 0.6, ease: easePremium },
            }}
            transition={{ duration: 0.7, ease: easePremium }}
            className="absolute inset-0 flex flex-col"
          >
            <Stage
              stage={stage}
              cut={cut}
              processed={processed}
              back={back}
              animateIn={mounted}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <CardRow stage={stage} back={back} />
    </div>
  );
}
