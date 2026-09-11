import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of Social Budd.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Last updated: September 11, 2026" align="center" />
      <Section className="pt-0">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Social
                Budd (&ldquo;Social Budd,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;), including socialbudd.com and our related services (the
                &ldquo;Service&rdquo;). Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Acceptance of terms</h2>
              <p>
                By accessing or using Social Budd, you agree to be bound by these Terms and our
                Privacy Policy. If you do not agree, do not use the Service. If you use the Service on
                behalf of an organization, you represent that you are authorized to bind that
                organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Eligibility and accounts</h2>
              <p>
                You must be at least 13 years old (or the minimum age required in your jurisdiction)
                to use the Service. You are responsible for maintaining the confidentiality of your
                account credentials and for all activity that occurs under your account. Notify us
                promptly of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Use of service</h2>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable right
                to use the Service to upload content, create clips, generate captions, schedule posts,
                view analytics, and publish to connected social accounts in accordance with these
                Terms and applicable platform policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Upload or publish content that is unlawful, infringing, or violates the rights of others.</li>
                <li>Use the Service to distribute spam, malware, or misleading content.</li>
                <li>Violate the terms or policies of any connected social media platform.</li>
                <li>Attempt to reverse engineer, disrupt, or gain unauthorized access to the Service.</li>
                <li>Resell or provide the Service to third parties except as expressly permitted.</li>
              </ul>
              <p>
                We may suspend or terminate accounts that violate these Terms or that create risk or
                legal exposure for us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Your content</h2>
              <p>
                You retain ownership of the content you upload or create (&ldquo;Your
                Content&rdquo;). By using the Service, you grant us a worldwide, non-exclusive license
                to host, store, process, reproduce, and modify Your Content solely as needed to
                provide the Service &mdash; for example, to generate clips and captions and to publish
                to the accounts you authorize. You represent that you have all rights necessary to
                grant this license.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Third-party platforms</h2>
              <p>
                The Service integrates with third-party social media platforms. Your use of those
                platforms is governed by their own terms and policies. We are not responsible for the
                availability, actions, or policies of third-party platforms, and access may change or
                be discontinued at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Subscriptions and payment</h2>
              <p>
                Paid plans are billed on a recurring basis according to the plan you select. Fees are
                non-refundable except where required by law. We may change pricing with reasonable
                notice. You can cancel at any time, and cancellation takes effect at the end of the
                current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Intellectual property</h2>
              <p>
                The Service, including its software, design, and trademarks, is owned by Social Budd
                and protected by intellectual property laws. Except for the rights expressly granted
                to you, we reserve all rights in and to the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Disclaimers</h2>
              <p>
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
                warranties of any kind, whether express or implied. We do not warrant that the Service
                will be uninterrupted, error-free, or secure, or that any AI-generated output will be
                accurate or fit for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, Social Budd will not be liable for any
                indirect, incidental, special, consequential, or punitive damages, or any loss of
                profits, data, or goodwill. Our total liability for any claim relating to the Service
                will not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Termination</h2>
              <p>
                You may stop using the Service at any time. We may suspend or terminate your access if
                you violate these Terms or if we discontinue the Service. Upon termination, your right
                to use the Service ends, and we may delete Your Content in accordance with our Privacy
                Policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Changes to these terms</h2>
              <p>
                We may update these Terms from time to time. We will post the updated version on this
                page and revise the &ldquo;Last updated&rdquo; date above. Your continued use of the
                Service after changes take effect constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p>
                For questions about these Terms, contact us at{" "}
                <a href="mailto:contact@socialbudd.com" className="text-foreground underline">
                  contact@socialbudd.com
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
