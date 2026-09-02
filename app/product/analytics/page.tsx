import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { AnalyticsSection } from "@/components/marketing/analytics-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Analytics",
  description: "Understand which clips and content perform best with Social Budd analytics.",
  path: "/product/analytics",
});

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        badge="Analytics"
        title="Know what content actually works."
        description="Track views, engagement, and top performing clips. Make data-driven decisions about your content strategy."
        primaryCta={{ label: "Start for free", href: "/start" }}
      />
      <AnalyticsSection />
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
