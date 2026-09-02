import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Documentation",
  description: "Learn how to use Social Budd to transform long-form video into social content.",
  path: "/docs",
});

const docSections = [
  { title: "Getting started", description: "Upload your first video and create clips." },
  { title: "AI clipping", description: "How AI finds and generates your best moments." },
  { title: "Scheduling", description: "Connect accounts and schedule posts." },
  { title: "Agency workspaces", description: "Manage multiple clients and approvals." },
];

export default function DocsPage() {
  return (
    <>
      <PageHero
        badge="Documentation"
        title="Learn Social Budd"
        description="Guides and reference for getting the most out of your content workflow."
        primaryCta={{ label: "Start for free", href: "/start" }}
        align="center"
      />
      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {docSections.map((doc) => (
              <div
                key={doc.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{doc.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{doc.description}</p>
                <span className="mt-4 inline-block text-xs text-muted-foreground">Coming soon</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="secondary">
              <Link href="/help">Visit Help Center</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
