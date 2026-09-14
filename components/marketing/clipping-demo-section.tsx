"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";

/* -------------------------------------------------------------------------- */
/*  Surface                                                                    */
/* -------------------------------------------------------------------------- */

const tile =
  "relative h-full overflow-hidden rounded-2xl bg-[#131315] p-6 sm:p-7 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.07),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  One recording, read as it plays                                            */
/* -------------------------------------------------------------------------- */

/** The footage runs about thirteen seconds; the real duration wins at runtime. */
const WINDOW = 12.9;

/**
 * Each line owns a second of the reel. Whichever line the playhead is inside is
 * the one being said, so the transcript reads along with the video rather than
 * on a timer of its own.
 */
const transcript = [
  { time: "12:18", at: 0, text: "So we spent six months going down the wrong road." },
  { time: "12:21", at: 2.6, text: "Then one call changed how we saw the whole thing." },
  { time: "12:24", at: 5.2, text: "That is when we found out our strategy was wrong." },
  { time: "12:27", at: 7.8, text: "We went from posting once a week to posting daily." },
  { time: "12:30", at: 10.4, text: "Six weeks later the numbers were not even close." },
];

/**
 * Where the speaker sits across the frame, measured from the footage. He holds
 * near the middle, so the crop only drifts; it is what keeps him centred in a
 * vertical cut.
 */
const framing: [number, number][] = [
  [0, 49],
  [5, 49.5],
  [9, 48],
  [12.9, 46.5],
];

function cropAt(time: number) {
  for (let i = 1; i < framing.length; i++) {
    const [prevTime, prevX] = framing[i - 1];
    const [nextTime, nextX] = framing[i];
    if (time <= nextTime) {
      const span = nextTime - prevTime;
      const progress = span > 0 ? (time - prevTime) / span : 0;
      return prevX + (nextX - prevX) * progress;
    }
  }
  return framing[framing.length - 1][1];
}

const platforms = [InstagramIcon, TikTokIcon, YouTubeIcon, LinkedInIcon, FacebookIcon];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

/** The heading is dropped where the page already has one of its own. */
export function ClippingDemoSection({ heading = true }: { heading?: boolean }) {
  const calm = usePrefersReducedMotion();
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "ended">("idle");
  const [line, setLine] = useState(0);
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  // Nothing plays until the reel is actually on screen.
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The reel runs its window once. Reduced motion leaves it idle, waiting to be
  // started by hand.
  useEffect(() => {
    if (running && phase === "idle" && !calm) setPhase("playing");
  }, [running, phase, calm]);

  // While it plays, the playhead drives both the crop and the line that is lit.
  // Reading it per frame keeps the two exactly together.
  useEffect(() => {
    const el = video.current;
    if (!el) return;

    if (phase !== "playing" || !running) {
      el.pause();
      return;
    }

    let raf = 0;

    const follow = () => {
      const time = el.currentTime;

      const end = Number.isFinite(el.duration) && el.duration > 0 ? el.duration : WINDOW;
      if (time >= end - 0.06) {
        el.pause();
        setPhase("ended");
        return;
      }

      el.style.objectPosition = `${cropAt(time).toFixed(2)}% 50%`;

      let current = 0;
      for (let i = 0; i < transcript.length; i++) {
        if (time >= transcript[i].at) current = i;
      }
      setLine((previous) => (previous === current ? previous : current));
      raf = requestAnimationFrame(follow);
    };

    const stop = () => setPhase("ended");
    el.addEventListener("ended", stop);

    void el.play().catch(() => {});
    raf = requestAnimationFrame(follow);
    return () => {
      el.removeEventListener("ended", stop);
      cancelAnimationFrame(raf);
    };
  }, [phase, running]);

  /** Back to the first frame and the first line. */
  const restart = () => {
    const el = video.current;
    if (el) {
      el.currentTime = 0;
      el.style.objectPosition = `${cropAt(0).toFixed(2)}% 50%`;
    }
    setLine(0);
    setPhase("playing");
  };

  return (
    <Section>
      <Container>
        {heading && (
          <MotionReveal>
            <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              One recording. Every clip inside it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
              AI reads the whole transcript, marks the lines that land, and cuts each one
              into a post sized for the platform it goes to.
            </p>
          </MotionReveal>
        )}

        <div ref={frame} className={`grid gap-4 lg:grid-cols-2 ${heading ? "mt-12 md:mt-16" : ""}`}>
          {/* What is being said */}
          <MotionReveal>
            <div className={tile}>
              <div className="relative flex items-center justify-between">
                <p className="text-[15px] font-semibold tracking-tight">Transcript</p>
                <p className="text-[13px] text-muted-foreground">58:12 recording</p>
              </div>

              <ul className="relative mt-5 space-y-1">
                {transcript.map(({ time, text }, i) => {
                  const on = i === line;
                  return (
                    <li
                      key={time}
                      className={`relative flex items-start gap-4 px-3 py-2.5 text-[15px] leading-relaxed transition-colors duration-300 ${
                        on
                          ? "text-foreground"
                          : "text-muted-foreground/65"
                      }`}
                    >
                      {/* One highlight for the whole list, so it slides from
                          line to line instead of two rows sitting lit. */}
                      {on && (
                        <motion.span
                          layoutId="transcript-line"
                          transition={{ type: "spring", stiffness: 420, damping: 38 }}
                          className="absolute inset-0 rounded-lg bg-white/[0.07]"
                        />
                      )}
                      <span className="relative shrink-0 tabular-nums text-[13px] leading-6 text-muted-foreground/60">
                        {time}
                      </span>
                      <span className="relative min-w-0 flex-1">{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </MotionReveal>

          {/* What comes out of it */}
          <MotionReveal delay={0.08}>
            <div className={tile}>
              <div className="relative flex items-center justify-between">
                <p className="text-[15px] font-semibold tracking-tight">Clip made</p>
                <p className="text-[13px] text-muted-foreground">Ready to post</p>
              </div>

              <div className="relative mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7">
                <div className="relative aspect-[9/16] w-[148px] shrink-0 overflow-hidden rounded-xl bg-black">
                  <video
                    ref={video}
                    src="/media/studio-source.mp4"
                    poster="/media/studio-source.jpg"
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "51% 50%" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 to-transparent" />

                  {phase !== "playing" && (
                    <button
                      type="button"
                      onClick={restart}
                      className="absolute inset-0 grid place-items-center bg-black/45 transition-colors hover:bg-black/35"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#111113]">
                        {phase === "ended" ? (
                          <RotateCcw className="h-[18px] w-[18px]" strokeWidth={2} />
                        ) : (
                          <Play className="ml-0.5 h-[18px] w-[18px] fill-current" strokeWidth={0} />
                        )}
                      </span>
                      <span className="sr-only">
                        {phase === "ended" ? "Play the clip again" : "Play the clip"}
                      </span>
                    </button>
                  )}
                  <span className="absolute bottom-2 right-2 text-[11px] font-medium tabular-nums text-white/80">
                    0:42
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    AI watches the whole recording, picks the parts that hold attention,
                    and cuts each one into a clip.
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    Each one is captioned in your voice and posted to every account you
                    connect, so your organization reaches more people without making
                    anything new.
                  </p>

                  <div className="mt-5 flex items-center gap-4" aria-hidden>
                    {platforms.map((Mark, i) => (
                      <Mark key={i} mono className="h-5 w-5 text-foreground/55" />
                    ))}
                    <span className="text-[13px] font-medium text-muted-foreground">
                      + more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
