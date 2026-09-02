import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Blog",
  description: "Insights on social content, AI, and agency workflows from Social Budd.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Content, AI, and agency workflows."
        description="Insights and updates from the Social Budd team."
        align="center"
      />
      <Section>
        <Container size="narrow" className="text-center">
          <div className="rounded-xl border border-border bg-card p-12">
            <p className="text-lg font-medium">Coming soon</p>
            <p className="mt-4 text-muted-foreground">
              We&apos;re working on articles about social content strategy, AI clipping, and agency workflows.
            </p>
            <Button asChild variant="secondary" className="mt-6">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
