import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { CalendarSection } from "@/components/marketing/calendar-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Scheduling",
  description: "Schedule and publish social content across Instagram, TikTok, YouTube, LinkedIn, and Facebook from one calendar.",
  path: "/product/scheduling",
});

export default function SchedulingPage() {
  return (
    <>
      <PageHero
        badge="Scheduling"
        title="Schedule once. Publish everywhere."
        description="Plan your content calendar and publish to all connected social accounts from a single dashboard."
        primaryCta={{ label: "Start for free", href: "/start" }}
      />
      <CalendarSection />
      <Section>
        <Container className="text-center">
          <Button asChild size="lg">
            <Link href="/start">Start for free</Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}
