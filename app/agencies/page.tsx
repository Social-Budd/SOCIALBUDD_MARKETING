import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { AgencySection } from "@/components/marketing/agency-section";
import { ApprovalSection } from "@/components/marketing/approval-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Agencies",
  description: "Social Budd helps agencies manage content creation and publishing across multiple clients.",
  path: "/agencies",
});

export default function AgenciesPage() {
  return (
    <>
      <PageHero
        badge="For agencies"
        title="One platform for every client."
        description="Manage 20 clients, 50 social accounts, and hundreds of videos from a single workspace. Client approval, brand templates, and scheduling built in."
        primaryCta={{ label: "Start for free", href: "/start" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />
      <AgencySection />
      <ApprovalSection />
      <Section>
        <Container className="text-center">
          <h2 className="text-2xl font-bold">Ready to streamline your agency workflow?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/start">Start for free</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
