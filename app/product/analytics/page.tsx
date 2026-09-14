import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { AnalyticsSection } from "@/components/marketing/analytics-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export const metadata = createMetadata({
  title: "Analytics",
  description:
    "Reach, engagement and growth per account, tied to the clips that earned them.",
  path: "/product/analytics",
});

const card = "rounded-2xl bg-white/[0.03] p-6 sm:p-7";

const measures = [
  [
    "Per account, not averaged",
    "Instagram and LinkedIn behave nothing alike. They are read separately, because they are.",
  ],
  [
    "Tied back to the clip",
    "Every number points at the moment that produced it, so you know what to make more of.",
  ],
  [
    "Growth, not vanity",
    "Followers gained and attention held, rather than impressions that flatter the chart.",
  ],
  [
    "Nothing to assemble",
    "No exports, no spreadsheet, no monthly deck. It is already in one view when you look.",
  ],
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        badge="Analytics"
        title="Reporting nobody has to assemble."
        description="No exports, no spreadsheet, no monthly deck. The numbers arrive on their own, with the clip that earned them attached."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />

      <AnalyticsSection heading={false} />

      <Section className="pt-0 md:pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {measures.map(([title, body], i) => (
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
                See it on your own accounts
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Tell us where you post today and we will show you what the first month of
                reporting would look like.
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
