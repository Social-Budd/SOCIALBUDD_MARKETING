import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Simple, transparent pricing for creators, teams, and agencies.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Plans that scale with your content."
        description="Start free and upgrade as you grow. No hidden fees."
        primaryCta={{ label: "Start for free", href: "/start" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
        align="center"
      />
      <PricingSection />
      <Section>
        <Container className="text-center">
          <p className="text-muted-foreground">
            Questions about pricing?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Contact us
            </Link>
          </p>
          <Button asChild className="mt-6">
            <Link href="/start">Start for free</Link>
          </Button>
        </Container>
      </Section>
      <FaqSection />
    </>
  );
}
