import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ClippingDemoSection } from "@/components/marketing/clipping-demo-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "AI Clipping",
  description: "Let AI find the strongest moments in your long-form video and create engaging short clips automatically.",
  path: "/product/clipping",
});

export default function ClippingPage() {
  return (
    <>
      <PageHero
        badge="AI Clipping"
        title="Let AI find the moments worth sharing."
        description="Upload a long-form video and Social Budd identifies high-engagement moments, then generates ready-to-publish short clips."
        primaryCta={{ label: "Start for free", href: "/start" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
      <ClippingDemoSection />
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
