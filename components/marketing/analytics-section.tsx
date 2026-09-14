import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/ui/platform-icons";

/* -------------------------------------------------------------------------- */
/*  Surface                                                                    */
/* -------------------------------------------------------------------------- */

const tile =
  "relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#131315] p-6 sm:p-8 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(60%_50%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  What came back                                                             */
/* -------------------------------------------------------------------------- */

/** Views per week over the last eight weeks, in thousands. */
const weeks = [8.2, 11.4, 9.8, 14.6, 17.2, 16.1, 21.4, 24.8];

/* Named for what each clip is about, so a title never reads as a statement
   from us. */
const top = [
  { title: "The strategy pivot", Mark: InstagramIcon, views: "12.4K", rate: "8.2%" },
  { title: "Weekly to daily posting", Mark: TikTokIcon, views: "9.8K", rate: "7.1%" },
  { title: "Results after six weeks", Mark: YouTubeIcon, views: "7.2K", rate: "6.4%" },
];

const stats = [
  { value: "+2,410", label: "followers this month" },
  { value: "6.9%", label: "average engagement" },
];

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

/** The heading is dropped where the page already has one of its own. */
export function AnalyticsSection({ heading = true }: { heading?: boolean }) {
  const peak = Math.max(...weeks);

  return (
    <Section>
      <Container>
        {heading && (
          <MotionReveal>
            <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
              You see what worked, and what to make more of.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
              Reach, engagement and follower growth come back in one place, tied to the
              clips that earned them.
            </p>
          </MotionReveal>
        )}

        <div className={`grid gap-4 lg:grid-cols-[1.3fr_1fr] ${heading ? "mt-12 md:mt-16" : ""}`}>
          {/* Reach */}
          <MotionReveal>
            <div className={tile}>
              <p className="relative text-[15px] font-semibold tracking-tight">Reach</p>

              <p className="relative mt-6 flex items-baseline gap-3">
                <span className="text-[3rem] font-light leading-none tracking-[-0.03em] sm:text-[3.5rem]">
                  124K
                </span>
                <span className="text-[14px] text-emerald-400/90">+62%</span>
              </p>
              <p className="relative mt-2 text-[14px] text-muted-foreground">
                views in the last thirty days
              </p>

              <svg
                viewBox="0 0 320 120"
                fill="none"
                aria-hidden
                className="relative mt-8 h-28 w-full text-foreground sm:h-32"
                preserveAspectRatio="none"
              >
                {weeks.map((value, i) => {
                  const height = (value / peak) * 104;
                  return (
                    <rect
                      key={i}
                      x={8 + i * 39}
                      y={112 - height}
                      width="24"
                      height={height}
                      rx="4"
                      fill="currentColor"
                      fillOpacity={0.14 + i * 0.045}
                    />
                  );
                })}
              </svg>

              <p className="relative mt-auto pt-6 text-[13px] text-muted-foreground/80">
                Last eight weeks. Figures are illustrative.
              </p>
            </div>
          </MotionReveal>

          {/* What did the work */}
          <MotionReveal delay={0.08}>
            <div className={tile}>
              <p className="relative text-[15px] font-semibold tracking-tight">
                Clips that did the work
              </p>

              <ul className="relative mt-7 space-y-6">
                {top.map(({ title, Mark, views, rate }) => (
                  <li key={title}>
                    <div className="flex items-center gap-2.5">
                      <Mark className="h-4 w-4 shrink-0" />
                      <p className="min-w-0 flex-1 truncate text-[15px] text-foreground/90">
                        {title}
                      </p>
                    </div>
                    <p className="mt-1.5 pl-[26px] text-[13px] tabular-nums text-muted-foreground">
                      {views} views · {rate} engaged
                    </p>
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto grid grid-cols-2 gap-4 pt-8">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-[1.6rem] font-light leading-none tracking-[-0.02em]">
                      {value}
                    </p>
                    <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
