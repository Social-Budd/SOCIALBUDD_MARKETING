import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";

export const metadata = createMetadata({
  title: "Captions",
  description:
    "The same moment written four ways, in your voice, for the platform it lands on.",
  path: "/product/captions",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

/** One moment, written for each platform, to show what changes between them. */
const written = [
  {
    name: "Instagram",
    Mark: InstagramIcon,
    text: "Six months on the wrong road, and the call that turned it around.",
    meta: "One-line hook · 3 hashtags",
  },
  {
    name: "TikTok",
    Mark: TikTokIcon,
    text: "we spent six months going the wrong way so you don't have to",
    meta: "Lowercase, spoken · 2 hashtags",
  },
  {
    name: "YouTube",
    Mark: YouTubeIcon,
    text: "The call that changed our whole strategy",
    meta: "Title for search · description · #shorts",
  },
  {
    name: "LinkedIn",
    Mark: LinkedInIcon,
    text: "Six months on the wrong approach taught us more than the pivot.",
    meta: "Written post · no hashtag padding",
  },
];

const how = [
  [
    "Your voice, learned once",
    "Give it a handful of posts you liked and everything after that sounds like the same person wrote it.",
  ],
  [
    "The hook comes first",
    "The line that stops a scroll goes at the front, because on most platforms there is no second line.",
  ],
  [
    "Hashtags that belong",
    "A few that fit the post, not thirty pasted under everything you publish.",
  ],
  [
    "Never the same text twice",
    "One caption copied to four platforms reads like a copy on three of them. Each one is written separately.",
  ],
];

export default function CaptionsPage() {
  return (
    <>
      <PageHero
        badge="Captions"
        title="Written for the platform, not pasted across it."
        description="Every clip goes out with words that suit where it lands, in a voice that stays yours."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />

      <Section className="pt-4 md:pt-6">
        <Container>
          <MotionReveal>
            <div className={card}>
              <p className="text-[13px] font-medium text-muted-foreground/70">
                The same moment, four ways
              </p>

              <ul className="mt-7 space-y-7">
                {written.map(({ name, Mark, text, meta }) => (
                  <li key={name}>
                    <div className="flex items-center gap-2.5">
                      <Mark className="h-4 w-4 shrink-0" />
                      <span className="text-[13px] font-medium text-muted-foreground">
                        {name}
                      </span>
                    </div>
                    <p className="mt-2 text-[16px] leading-relaxed text-foreground/90">
                      {text}
                    </p>
                    <p className="mt-1.5 text-[13px] text-muted-foreground/70">{meta}</p>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {how.map(([title, body], i) => (
              <MotionReveal key={title} delay={i * 0.06}>
                <div className={`${card} h-full`}>
                  <h2 className="text-[17px] font-semibold tracking-tight">{title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={0.15}>
            <div className={`${card} mt-4 text-center sm:p-10`}>
              <h2 className="text-[17px] font-semibold tracking-tight">
                Hear it in your own voice
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Send us a few posts you were happy with and we will show you what the next
                ones would read like.
              </p>
              <Button asChild className="mt-8 h-11 rounded-full px-6 text-[15px]">
                <Link href="/contact">
                  Contact us
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
