import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/product-ui/app-shell";

export const metadata = createMetadata({
  title: "AI Captions",
  description: "Generate platform-ready captions for every clip automatically with Social Budd.",
  path: "/product/captions",
});

export default function CaptionsPage() {
  return (
    <>
      <PageHero
        badge="Captions"
        title="Platform-ready captions, written for you."
        description="Social Budd generates captions tailored for Instagram, TikTok, LinkedIn, and more — so every clip is ready to publish."
        primaryCta={{ label: "Start for free", href: "/start" }}
      />
      <Section>
        <Container>
          <AppShell clientName="Acme">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="aspect-[9/16] rounded-lg bg-muted" />
              <div className="space-y-4">
                <p className="text-sm font-medium">Generated caption</p>
                <div className="rounded-lg border border-border bg-card p-4 text-sm">
                  When we realized our entire strategy was wrong, everything changed.
                  Here&apos;s what we learned about pivoting fast. 🎯
                </div>
                <div className="flex gap-2">
                  {["Instagram", "TikTok", "LinkedIn"].map((p) => (
                    <span key={p} className="rounded border border-border px-2 py-1 text-xs">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AppShell>
        </Container>
      </Section>
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
