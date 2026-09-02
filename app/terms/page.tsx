import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Social Budd terms of service.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Last updated: September 2026" align="center" />
      <Section className="pt-0">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">Acceptance of terms</h2>
              <p>
                By accessing or using Social Budd, you agree to be bound by these Terms of Service.
                If you do not agree, do not use our service.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">Use of service</h2>
              <p>
                You may use Social Budd to upload content, create clips, and publish to connected
                social accounts in accordance with these terms and applicable platform policies.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">Your content</h2>
              <p>
                You retain ownership of content you upload. By using Social Budd, you grant us a
                license to process your content to provide our services.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p>
                For questions about these terms, contact us at legal@socialbudd.com.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
