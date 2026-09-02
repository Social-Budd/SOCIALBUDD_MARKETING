import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Social Budd privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: September 2026" align="center" />
      <Section className="pt-0">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
              <p>
                When you use Social Budd, we may collect information you provide directly, such as
                your name, email address, and content you upload. We also collect usage data to
                improve our service.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">How we use your information</h2>
              <p>
                We use your information to provide and improve Social Budd, process your content,
                communicate with you, and ensure the security of our platform.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">Data retention</h2>
              <p>
                We retain your data for as long as your account is active or as needed to provide
                services. You may request deletion of your account and associated data.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p>
                For privacy-related questions, contact us at privacy@socialbudd.com.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
