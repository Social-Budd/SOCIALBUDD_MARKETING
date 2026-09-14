"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Phone, SCREEN } from "@/components/ui/phone";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";

/* -------------------------------------------------------------------------- */
/*  Surface                                                                    */
/* -------------------------------------------------------------------------- */

/* The selected platform wears the same card as the workflow rail. */
const selectedCard =
  "absolute inset-0 overflow-hidden rounded-2xl bg-[#131315] " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(65%_60%_at_100%_0%,rgba(255,255,255,0.07),transparent_70%)]";

const tile =
  "relative overflow-hidden rounded-2xl bg-[#131315] p-6 sm:p-7 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  The same moment, in four native versions                                   */
/* -------------------------------------------------------------------------- */

const versions = [
  {
    name: "Instagram",
    Mark: InstagramIcon,
    shape: "Reel, 4:5",
    media: 208, full: false, handle: "Your Brand",
    caption: "Six months on the wrong road, and the call that turned it around.",
    tags: "#founders #podcast",
    specs: [
      ["Cut", "Cover frame picked from the clip"],
      ["Words", "One-line hook, three hashtags"],
      ["Sent", "Tuesday 09:00, when your followers are on"],
    ],
  },
  {
    name: "TikTok",
    Mark: TikTokIcon,
    shape: "Vertical, 9:16",
    media: SCREEN.height, full: true, handle: "Your Brand",
    caption: "we spent six months going the wrong way so you don't have to",
    tags: "#startup #lessons",
    specs: [
      ["Cut", "Subtitles burned into the video"],
      ["Words", "Plain-spoken hook, two hashtags"],
      ["Sent", "Tuesday 18:30, the evening scroll"],
    ],
  },
  {
    name: "YouTube",
    Mark: YouTubeIcon,
    shape: "Short, 9:16",
    media: SCREEN.height, full: true, handle: "Your Brand",
    caption: "The call that changed our whole strategy",
    tags: "#shorts",
    specs: [
      ["Cut", "Trimmed tight, titled for search"],
      ["Words", "Title, description and #shorts tag"],
      ["Sent", "Wednesday 11:00, beside your long-form"],
    ],
  },
  {
    name: "LinkedIn",
    Mark: LinkedInIcon,
    shape: "Square, 1:1",
    media: SCREEN.width, full: false, handle: "Your Brand",
    caption: "Six months on the wrong approach taught us more than the pivot.",
    tags: "",
    specs: [
      ["Cut", "Square, captions on a light background"],
      ["Words", "A short written post, no hashtag padding"],
      ["Sent", "Thursday 08:30, before the work day"],
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function PublishSection() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const video = useRef<HTMLVideoElement>(null);

  // Whichever card is nearest the middle of the screen owns the rail.
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

  const current = versions[active];

  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Every platform gets its own version.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            One moment from your recording goes out four different ways, each cut to
            shape, written to suit the audience, and posted when that platform is busy.
          </p>
        </MotionReveal>

        <div className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[210px_auto_minmax(0,1fr)] lg:gap-10">
          {/* Which platform you are on */}
          <nav className="hidden lg:sticky lg:top-32 lg:block lg:h-fit" aria-label="Platforms">
            <ul className="space-y-3">
              {versions.map(({ name, Mark, shape }, i) => {
                const on = i === active;
                return (
                  <li key={name}>
                    <button
                      type="button"
                      onClick={() =>
                        panels.current[i]?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                      }
                      aria-current={on ? "true" : undefined}
                      className="relative flex w-full items-center gap-3.5 rounded-2xl bg-white/[0.015] px-5 py-4 text-left"
                    >
                      {on && (
                        <motion.span
                          layoutId="publish-active"
                          transition={{ type: "spring", stiffness: 340, damping: 34 }}
                          className={selectedCard}
                        />
                      )}
                      <Mark className="relative h-5 w-5 shrink-0" />
                      <span className="relative min-w-0">
                        <span
                          className={`block text-[16px] font-semibold tracking-tight transition-colors ${
                            on ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {name}
                        </span>
                        <span
                          className={`mt-0.5 block text-[12px] transition-colors ${
                            on ? "text-muted-foreground" : "text-muted-foreground/50"
                          }`}
                        >
                          {shape}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* The clip stays put inside the phone, and the post re-shapes itself
              for whichever card you reach. The phone never changes size. */}
          <div className="sticky top-24 z-10 flex justify-center self-start lg:top-28">
            <div className="scale-[0.7] sm:scale-[0.85] lg:scale-100">
              <Phone>
                {/* who is posting, above the media in a feed */}
                {!current.full && (
                  <motion.div
                    key={`${current.name}-head`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2 px-2.5 pb-2 pt-8"
                  >
                    <current.Mark className="h-3 w-3" />
                    <span className="text-[9px] font-medium text-foreground/85">
                      {current.handle}
                    </span>
                    <span className="ml-auto text-[8px] text-muted-foreground/70">now</span>
                  </motion.div>
                )}

                {/* the post itself */}
                <motion.div
                  animate={{ height: current.media }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  className={`w-full overflow-hidden bg-black ${
                    current.full ? "absolute inset-x-0 top-0" : "relative"
                  }`}
                >
                  <video
                    ref={video}
                    src="/media/studio-source.mp4"
                    poster="/media/studio-source.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "49% 50%" }}
                  />
                </motion.div>

                {/* what sits under it, or over it when the video fills the screen */}
                <motion.div
                  key={`${current.name}-foot`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={
                    current.full
                      ? "absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 to-transparent px-2.5 pb-4 pt-10"
                      : "px-3 pt-3"
                  }
                >
                  {current.full && (
                    <div className="mb-2.5 flex items-center gap-2">
                      <current.Mark className="h-3 w-3" />
                      <span className="text-[9px] font-medium text-white/90">
                        {current.handle}
                      </span>
                    </div>
                  )}
                  {current.full && (
                    <>
                      <p className="line-clamp-2 text-[8px] leading-snug text-white/90">{current.caption}</p>
                      {current.tags && (
                        <p className="mt-1 text-[8px] text-white/55">{current.tags}</p>
                      )}
                    </>
                  )}
                </motion.div>

                {/* the rest of the feed, so the screen never sits half empty */}
                {!current.full && (
                  <div className="flex flex-1 flex-col px-2.5 pb-2">
                    <div className="flex items-center gap-3 pt-3 text-white/45" aria-hidden>
                      <Heart className="h-3.5 w-3.5" />
                      <MessageCircle className="h-3.5 w-3.5" />
                      <Send className="h-3.5 w-3.5" />
                      <Bookmark className="ml-auto h-3.5 w-3.5" />
                    </div>

                    <p className="mt-3 line-clamp-2 text-[8px] leading-snug text-foreground/85">
                      {current.caption}
                    </p>
                    {current.tags && (
                      <p className="mt-1 text-[8px] text-muted-foreground">{current.tags}</p>
                    )}

                    <div className="mt-5 flex items-center gap-2" aria-hidden>
                      <span className="h-4 w-4 rounded-full bg-white/[0.1]" />
                      <span className="h-1 w-14 rounded-full bg-white/[0.1]" />
                    </div>
                    <div className="mt-2 flex-1 rounded-t-lg bg-white/[0.05]" aria-hidden />
                  </div>
                )}
              </Phone>
            </div>
          </div>

          {/* One card of detail per platform, listed down the page */}
          <div className="space-y-4">
            {versions.map(({ name, Mark, specs }, i) => (
              <div
                key={name}
                ref={(el) => {
                  panels.current[i] = el;
                }}
                className="scroll-mt-32"
              >
                <MotionReveal>
                  <div className={tile}>
                    <p className="relative flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
                      <Mark className="h-5 w-5" />
                      {name}
                    </p>

                    <dl className="relative mt-6 space-y-5">
                      {specs.map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-[12px] font-medium text-muted-foreground/70">
                            {label}
                          </dt>
                          <dd className="mt-1.5 text-[15px] leading-relaxed text-foreground/85">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </MotionReveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
