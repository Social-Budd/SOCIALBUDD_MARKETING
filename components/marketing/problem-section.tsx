import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";

/* -------------------------------------------------------------------------- */
/*  Surface language                                                           */
/* -------------------------------------------------------------------------- */

/**
 * A quiet charcoal tile with a faint light source in one corner, so the grid
 * reads as one lit surface rather than a set of boxes.
 */
const tile =
  "relative overflow-hidden rounded-2xl bg-[#131315] " +
  "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.07),transparent_70%)]";

/** One body size across the grid, so no card reads louder than another. */
const copy = "text-[15px] leading-relaxed text-muted-foreground";

/** The kinds of teams Social Budd runs channels for, in their own words. */
const audiences = [
  "Marketing agencies",
  "SaaS companies",
  "Podcasts and creators",
  "Content teams",
  "Local businesses",
  "Real estate and travel",
  "Ecommerce and retail",
] as const;

/** Big figures are set light and tight, so the number carries the card. */
const figure = "text-[3.25rem] font-light leading-none tracking-[-0.03em] sm:text-[3.75rem]";

/* -------------------------------------------------------------------------- */
/*  Glyph: one organisation, every channel kept publishing                       */
/* -------------------------------------------------------------------------- */

function ChannelFlow() {
  // Three rails leaving one source, each ending in a published post.
  const rails = [
    { d: "M38 60 C60 60 60 22 82 22 H146", y: 8, dots: [98, 124] },
    { d: "M38 60 H146", y: 46, dots: [92, 118] },
    { d: "M38 60 C60 60 60 98 82 98 H146", y: 84, dots: [98, 124] },
  ];
  return (
    <svg
      viewBox="0 0 204 120"
      fill="none"
      aria-hidden
      className="h-28 w-48 text-foreground sm:h-32 sm:w-56"
    >
      {/* the organisation */}
      <rect
        x="4"
        y="44"
        width="32"
        height="32"
        rx="10"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.4"
      />

      {rails.map((rail, i) => (
        <g key={i}>
          <path d={rail.d} stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.25" />
          {rail.dots.map((cx, j) => (
            <circle
              key={cx}
              cx={cx}
              cy={rail.y + 14}
              r="2.5"
              fill="currentColor"
              fillOpacity={j === 0 ? 0.3 : 0.55}
            />
          ))}
          {/* the post that goes out */}
          <rect
            x="150"
            y={rail.y}
            width="50"
            height="28"
            rx="8"
            fill="currentColor"
            fillOpacity="0.07"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <rect x="160" y={rail.y + 9} width="30" height="3" rx="1.5" fill="currentColor" fillOpacity="0.5" />
          <rect x="160" y={rail.y + 16} width="18" height="3" rx="1.5" fill="currentColor" fillOpacity="0.25" />
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function ProblemSection() {
  return (
    <Section className="pb-14 md:pb-20 lg:pb-24">
      <Container>
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Everything you need to post every day, without the grind.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center md:mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Making the content, scheduling it and putting it out is handled for you, on
            every channel your organization runs.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.9fr] lg:grid-rows-[auto_auto]">
          {/* The organisation's channels, run for it */}
          <MotionReveal className="md:col-span-2 lg:col-span-2">
            <div className={`flex h-full items-center gap-6 p-7 sm:p-8 ${tile}`}>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Your organization&apos;s channels, run for you.
                </h3>
                <p className={`mt-3 max-w-md ${copy}`}>
                  Every platform your brand or your clients are on, kept active. Content is
                  created, scheduled and published day after day, with no team to hire.
                </p>
              </div>
              <div className="hidden shrink-0 sm:block">
                <ChannelFlow />
              </div>
            </div>
          </MotionReveal>

          {/* Who it runs for */}
          <MotionReveal delay={0.05} className="lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <div className={`flex h-full flex-col p-7 sm:p-8 ${tile}`}>
              <h3 className="text-xl font-semibold tracking-tight">
                Made for the people who post every day.
              </h3>

              <ul className="mt-8 flex flex-1 flex-col justify-center gap-5 sm:gap-6">
                {audiences.map((who) => (
                  <li key={who} className="text-[15px] leading-none tracking-[-0.005em] text-muted-foreground">
                    {who}
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>

          {/* Hours back */}
          <MotionReveal delay={0.1}>
            <div className={`flex h-full flex-col p-7 sm:p-8 ${tile}`}>
              <p className={figure}>
                70<span className="text-[0.5em] text-muted-foreground"> hrs</span>
              </p>
              <p className={`mt-2 ${copy}`}>Back in your week, every week.</p>
              {/* Parked for now, uncomment to put the link back.
              <Link
                href="/#workflow"
                className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
              */}
            </div>
          </MotionReveal>

          {/* Every major platform */}
          <MotionReveal delay={0.15}>
            <div className={`flex h-full flex-col justify-center p-7 sm:p-8 ${tile}`}>
              <div className="flex items-center gap-3.5" aria-hidden>
                {[InstagramIcon, TikTokIcon, XIcon, YouTubeIcon, LinkedInIcon].map((Mark, i) => (
                  <Mark key={i} className="h-7 w-7" />
                ))}
                <span className="text-[13px] font-semibold text-muted-foreground">+ More</span>
              </div>
              <p className={`mt-6 ${copy}`}>
                Every account connected to Social Budd, and the ones you add next. Each
                post goes out in that platform&apos;s native format.
              </p>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
