import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "About",
  description: "Social Budd is an AI-powered social media content workflow platform for businesses and agencies.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="One video in. Many social posts out."
        description="Social Budd helps businesses and agencies transform long-form video into ready-to-publish social content — from finding the best moments to scheduling and publishing."
        primaryCta={{ label: "Start for free", href: "/start" }}
      />
      <Section>
        <Container size="narrow">
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg text-foreground">
              Content teams shouldn&apos;t need five different tools to turn one video into social posts.
            </p>
            <p>
              Social Budd is building the workflow platform that takes you from long-form video to
              published social content: upload, AI analysis, clip creation, subtitles, captions,
              review, approval, scheduling, and analytics — all in one place.
            </p>
            <p>
              We&apos;re focused on marketing agencies first, because they manage the most complex
              content workflows across multiple clients and platforms.
            </p>
            <div className="rounded-xl border border-border bg-card p-6 not-prose">
              <p className="font-medium text-foreground">Our workflow</p>
              <p className="mt-2 text-sm">
                Create → Edit → Approve → Schedule → Publish → Analyze
              </p>
            </div>
          </div>
          <Button asChild className="mt-8">
            <Link href="/start">Start for free</Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}
