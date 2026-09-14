import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "For Podcasters",
  description:
    "Every episode carries weeks of posts. We find the moments, cut them and put them out on every account.",
  path: "/solutions/podcasters",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const forPodcasters = [
  [
    "An episode is a month of posts",
    "One conversation holds more short form than most shows put out in four weeks.",
  ],
  [
    "The moments you talked past",
    "The lines that land are rarely the ones you remember afterwards. The transcript finds them.",
  ],
  [
    "Both of you framed",
    "The crop follows whoever is speaking, so a two-hander still works as a vertical cut.",
  ],
  [
    "Out while it is fresh",
    "Clips go out across the week the episode drops, not whenever someone gets to the edit.",
  ],
];

export default function PodcastersPage() {
  return (
    <>
      <PageHero
        badge="For podcasters"
        title="Every episode becomes weeks of content."
        description="You record the show. Finding the moments, cutting them, writing them and posting them is ours."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />

      <Section className="pt-4 md:pt-6">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {forPodcasters.map(([title, body], i) => (
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
                Send us one episode
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Tell us where the show gets posted and we will come back with what that
                episode would put out across a month.
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
