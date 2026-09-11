"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";
import { easePremium } from "@/lib/motion";

const channels = [
  { name: "Instagram", Icon: InstagramIcon },
  { name: "TikTok", Icon: TikTokIcon },
  { name: "YouTube", Icon: YouTubeIcon },
  { name: "LinkedIn", Icon: LinkedInIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "X", Icon: XIcon },
];

const hashtags = [
  "#PostedEveryday",
  "#RepurposeEverything",
  "#ShortFormMachine",
  "#ClipsThatConvert",
  "#OneVideoManyPosts",
];

// Keeps the pill a fixed width so rotating tags never make it jump.
const widestHashtag = hashtags.reduce((a, b) => (b.length > a.length ? b : a));

export function HeroEyebrow() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % hashtags.length), 2400);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-border bg-card/70 py-1.5 pl-2 pr-3.5 backdrop-blur-sm sm:mb-6 sm:gap-3 sm:pr-4">
      <span className="sr-only">
        Publish to Instagram, TikTok, YouTube, LinkedIn, Facebook and X
      </span>

      {/* the marks as one overlapping stack, so the pill stays compact */}
      <div aria-hidden className="flex items-center">
        {channels.map(({ name, Icon }, i) => (
          // CSS entrance, so the marks are on screen before hydration too.
          <span
            key={name}
            style={{ zIndex: channels.length - i, animationDelay: `${0.15 + i * 0.06}s` }}
            className="hero-in relative -ml-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-background bg-elevated first:ml-0"
          >
            <Icon className="h-3 w-3" />
          </span>
        ))}
      </div>

      <span aria-hidden className="h-4 w-px bg-border" />

      <span className="relative block text-xs font-medium tracking-wide text-accent">
        {/* invisible sizer */}
        <span className="invisible">{widestHashtag}</span>
        <AnimatePresence initial={false}>
          <motion.span
            key={hashtags[index]}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: easePremium }}
            className="absolute inset-0 whitespace-nowrap text-left"
          >
            {hashtags[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
