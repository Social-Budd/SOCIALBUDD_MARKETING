import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { FeaturesSection } from "@/components/marketing/features-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "For Creators",
  description: "Social Budd helps creators turn long-form video into consistent short-form content.",
  path: "/solutions/creators",
});

export default function CreatorsPage() {
  return (
    <>
      <PageHero
        badge="Creators"
        title="Create more. Edit less."
        description="Focus on making great long-form content. Social Budd handles finding moments, creating clips, and getting them ready to publish."
        primaryCta={{ label: "Start for free", href: "/start" }}
      />
      <FeaturesSection />
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
