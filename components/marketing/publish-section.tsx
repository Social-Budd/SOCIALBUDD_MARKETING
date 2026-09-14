import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";

/* -------------------------------------------------------------------------- */
/*  Surface                                                                    */
/* -------------------------------------------------------------------------- */

const tile =
  "relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#131315] p-6 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  The same moment, in four native versions                                   */
/* -------------------------------------------------------------------------- */

const versions = [
  {
    name: "Instagram",
    Mark: InstagramIcon,
    specs: [
      ["Cut", "9:16 Reel, cover frame picked from the clip"],
      ["Words", "One-line hook, three hashtags"],
      ["Sent", "Tuesday 09:00, when your followers are on"],
    ],
  },
  {
    name: "TikTok",
    Mark: TikTokIcon,
    specs: [
      ["Cut", "9:16 with subtitles burned in"],
      ["Words", "Plain-spoken hook, two hashtags"],
      ["Sent", "Tuesday 18:30, the evening scroll"],
    ],
  },
  {
    name: "YouTube",
    Mark: YouTubeIcon,
    specs: [
      ["Cut", "9:16 Short, titled for search"],
      ["Words", "Title, description and #shorts tag"],
      ["Sent", "Wednesday 11:00, alongside your long-form"],
    ],
  },
  {
    name: "LinkedIn",
    Mark: LinkedInIcon,
    specs: [
      ["Cut", "1:1 square, captions on light background"],
      ["Words", "A short written post, no hashtag padding"],
      ["Sent", "Thursday 08:30, before the work day"],
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function PublishSection() {
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

        <div className="mt-12 grid gap-4 md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {versions.map(({ name, Mark, specs }, i) => (
            <MotionReveal key={name} delay={i * 0.06}>
              <div className={tile}>
                <div className="relative flex items-center gap-2.5">
                  <Mark className="h-5 w-5" />
                  <p className="text-[15px] font-semibold tracking-tight">{name}</p>
                </div>

                <dl className="relative mt-5 space-y-4">
                  {specs.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[12px] font-medium text-muted-foreground/70">
                        {label}
                      </dt>
                      <dd className="mt-1 text-[14px] leading-relaxed text-foreground/85">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
