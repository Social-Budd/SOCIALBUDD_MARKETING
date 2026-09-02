import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { WorkflowSection } from "@/components/marketing/workflow-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "For Podcasters",
  description: "Turn every podcast episode into weeks of social content with Social Budd.",
  path: "/solutions/podcasters",
});

export default function PodcastersPage() {
  return (
    <>
      <PageHero
        badge="Podcasters"
        title="Every episode becomes weeks of content."
        description="Upload your podcast and let AI find the best moments, create clips, add subtitles, and help you publish across social channels."
        primaryCta={{ label: "Start for free", href: "/start" }}
      />
      <WorkflowSection />
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
