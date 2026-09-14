"use client";

import { useState } from "react";
import { CircleCheck, CircleDashed, Clock, TriangleAlert } from "lucide-react";
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
  "relative overflow-hidden rounded-2xl bg-[#131315] px-7 py-7 sm:px-12 sm:py-10 " +
  "before:pointer-events-none before:absolute before:inset-0 " +
  "before:bg-[radial-gradient(50%_60%_at_100%_0%,rgba(255,255,255,0.06),transparent_70%)]";

/* -------------------------------------------------------------------------- */
/*  A month of posts                                                           */
/* -------------------------------------------------------------------------- */

/** September 2026 starts on a Tuesday and runs 30 days. */
const MONTH = "September";
const FIRST_WEEKDAY = 1; // Monday is 0
const DAYS = 30;
const TODAY = 14;

type Status = "published" | "scheduled" | "approval" | "draft";

const status = {
  published: { label: "Published", dot: "bg-emerald-400/50", text: "text-emerald-400", Icon: CircleCheck },
  scheduled: { label: "Scheduled", dot: "bg-sky-300/50", text: "text-sky-300", Icon: Clock },
  approval: { label: "Needs approval", dot: "bg-amber-300/50", text: "text-amber-300", Icon: TriangleAlert },
  draft: { label: "Draft", dot: "bg-white/20", text: "text-muted-foreground", Icon: CircleDashed },
} as const;

const IG = InstagramIcon;
const TT = TikTokIcon;
const YT = YouTubeIcon;
const LI = LinkedInIcon;

type Post = {
  day: number;
  time: string;
  Mark: typeof IG;
  state: Status;
  title: string;
};

const posts: Post[] = [
  { day: 2, time: "9:00 AM", Mark: IG, state: "published", title: "Six months on the wrong road" },
  { day: 2, time: "6:30 PM", Mark: TT, state: "published", title: "The call that changed it" },
  { day: 4, time: "11:00 AM", Mark: YT, state: "published", title: "What we would do instead" },
  { day: 7, time: "8:30 AM", Mark: LI, state: "published", title: "The pivot, in full" },
  { day: 9, time: "5:30 PM", Mark: IG, state: "published", title: "Once a week to daily" },
  { day: 11, time: "1:00 PM", Mark: YT, state: "published", title: "Six weeks later" },
  { day: 14, time: "9:00 AM", Mark: IG, state: "scheduled", title: "The numbers were not close" },
  { day: 14, time: "7:00 PM", Mark: TT, state: "scheduled", title: "What nobody tells you" },
  { day: 16, time: "8:30 AM", Mark: LI, state: "approval", title: "Hiring for the pivot" },
  { day: 16, time: "4:00 PM", Mark: TT, state: "scheduled", title: "Two years from now" },
  { day: 18, time: "11:00 AM", Mark: YT, state: "approval", title: "The first month problem" },
  { day: 21, time: "9:00 AM", Mark: IG, state: "scheduled", title: "Start here instead" },
  { day: 23, time: "8:30 AM", Mark: LI, state: "draft", title: "What the data said" },
  { day: 25, time: "6:00 PM", Mark: TT, state: "draft", title: "One upload, one month" },
  { day: 28, time: "10:00 AM", Mark: IG, state: "draft", title: "The quiet compounding" },
  { day: 30, time: "5:00 PM", Mark: YT, state: "draft", title: "Where this goes next" },
];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function postsOn(day: number) {
  return posts.filter((post) => post.day === day);
}

/* -------------------------------------------------------------------------- */
/*  The section                                                                */
/* -------------------------------------------------------------------------- */

export function CalendarSection() {
  const [selected, setSelected] = useState(TODAY);
  const chosen = postsOn(selected);

  return (
    <Section>
      <Container>
        <MotionReveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Your month is filled in before it starts.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground md:mt-6">
            Every post has a date, a time and a state you can see at a glance. Pick any
            day to look at what goes out.
          </p>
        </MotionReveal>

        <MotionReveal>
          <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-[1.55fr_1fr]">
            {/* The month */}
            <div className={tile}>
              <p className="relative text-[15px] font-semibold tracking-tight">{MONTH}</p>

              <div className="relative mt-10">
                <div className="grid grid-cols-7">
                  {weekdays.map((day) => (
                    <p
                      key={day}
                      className="pb-6 pl-2 text-[11px] font-medium text-muted-foreground/70"
                    >
                      {day}
                    </p>
                  ))}
                </div>

                {/* No rules at all: the dates and their dots carry the grid. */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: FIRST_WEEKDAY }, (_, i) => (
                    <span key={`pad-${i}`} />
                  ))}

                  {Array.from({ length: DAYS }, (_, i) => i + 1).map((day) => {
                    const dayPosts = postsOn(day);
                    const on = selected === day;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelected(day)}
                        aria-pressed={on}
                        className={`flex h-[46px] flex-col items-start rounded-[5px] px-2 py-1.5 text-left transition-colors sm:h-[54px] ${
                          on ? "bg-white/[0.09]" : "hover:bg-white/[0.05]"
                        }`}
                      >
                        <span
                          className={`text-[12px] tabular-nums ${
                            day === TODAY
                              ? "font-semibold text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {day}
                        </span>
                        <span className="mt-1.5 flex gap-1">
                          {dayPosts.map((post, i) => (
                            <span
                              key={i}
                              className={`h-1 w-1 rounded-full ${status[post.state].dot}`}
                            />
                          ))}
                        </span>
                      </button>
                    );
                  })}

                  {Array.from(
                    { length: (7 - ((FIRST_WEEKDAY + DAYS) % 7)) % 7 },
                    (_, i) => (
                      <span key={`tail-${i}`} />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* The day */}
            <div className={tile}>
              <p className="relative flex items-baseline gap-2 text-[15px] font-semibold tracking-tight">
                <span>{MONTH}</span>
                <span className="tabular-nums">{selected}</span>
              </p>

              <ul className="relative mt-10 space-y-7">
                {chosen.map(({ time, Mark, state, title }) => (
                  <li key={time}>
                    <div className="flex items-center gap-2.5">
                      <Mark className="h-4 w-4 shrink-0" />
                      <span className="text-[13px] tabular-nums text-foreground/85">
                        {time}
                      </span>
                      <span className={`ml-auto flex items-center gap-1.5 ${status[state].text}`}>
                        {(() => {
                          const Icon = status[state].Icon;
                          return <Icon className="h-3.5 w-3.5" strokeWidth={2} />;
                        })()}
                        <span className="text-[12px]">{status[state].label}</span>
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] leading-snug text-muted-foreground">
                      {title}
                    </p>
                  </li>
                ))}

                {chosen.length === 0 && (
                  <li className="mx-auto max-w-[17rem] text-balance py-8 text-center text-[14px] leading-relaxed text-muted-foreground">
                    A quiet day. Nothing goes out until the next slot.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}
