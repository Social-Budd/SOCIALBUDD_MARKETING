import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { BeforeAfterSection } from "@/components/marketing/before-after-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "For Businesses",
  description: "Social Budd helps businesses turn webinars, interviews, and long-form video into consistent social content.",
  path: "/solutions/businesses",
});

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        badge="Businesses"
        title="Turn company video into social reach."
        description="Webinars, interviews, and product demos become a steady stream of social content — without hiring more editors."
        primaryCta={{ label: "Start for free", href: "/start" }}
      />
      <BeforeAfterSection />
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
