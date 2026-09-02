import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Help Center",
  description: "Get help with Social Budd. FAQs, guides, and support.",
  path: "/help",
});

export default function HelpPage() {
  return (
    <>
      <PageHero
        badge="Help Center"
        title="How can we help?"
        description="Find answers to common questions or reach out to our team."
        primaryCta={{ label: "Contact support", href: "/contact" }}
        align="center"
      />
      <Section>
        <Container size="narrow">
          <div className="space-y-4">
            {faqItems.slice(0, 5).map((item) => (
              <div key={item.question} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-medium">{item.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/contact">Contact support</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
