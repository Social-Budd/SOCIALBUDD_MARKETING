import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Careers",
  description: "Join Social Budd and help build the future of social content automation.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers"
        title="Help us build the content workflow of the future."
        description="We're building Social Budd to help agencies and teams create more content with less manual work."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        align="center"
      />
      <Section>
        <Container size="narrow" className="text-center">
          <div className="rounded-xl border border-border bg-card p-12">
            <p className="text-lg font-medium">No open roles right now</p>
            <p className="mt-4 text-muted-foreground">
              We&apos;re not actively hiring at the moment, but we&apos;d love to hear from you.
              Send us a note if you&apos;re passionate about content, AI, and building great products.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
