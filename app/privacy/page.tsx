import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "How Social Budd collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: September 11, 2026" align="center" />
      <Section className="pt-0">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <p>
                This Privacy Policy explains how Social Budd (&ldquo;Social Budd,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses,
                and safeguards your information when you visit socialbudd.com or use our services
                (the &ldquo;Service&rdquo;). By using the Service, you agree to the practices
                described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
              <p>We collect the following categories of information:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong className="text-foreground">Account information</strong> — your name, email
                  address, password, and billing details when you create an account or subscribe.
                </li>
                <li>
                  <strong className="text-foreground">Content you provide</strong> — videos, audio,
                  images, captions, and other media you upload or generate to create clips, schedule
                  posts, or publish to connected accounts.
                </li>
                <li>
                  <strong className="text-foreground">Connected accounts</strong> — when you link a
                  social media account, we receive access tokens and profile details permitted by
                  that platform so we can publish and retrieve analytics on your behalf.
                </li>
                <li>
                  <strong className="text-foreground">Usage data</strong> — how you interact with the
                  Service, including features used, pages visited, device and browser type, IP
                  address, and log data.
                </li>
                <li>
                  <strong className="text-foreground">Cookies and similar technologies</strong> — used
                  to keep you signed in, remember preferences, and understand how the Service is used.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">How we use your information</h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>Provide, operate, and maintain the Service.</li>
                <li>Process your content to generate clips, captions, schedules, and analytics.</li>
                <li>Publish content to the social accounts you connect and authorize.</li>
                <li>Process payments and manage your subscription.</li>
                <li>Communicate with you about updates, security alerts, and support requests.</li>
                <li>Improve and develop new features and protect against fraud and abuse.</li>
                <li>Comply with legal obligations and enforce our terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">How we share your information</h2>
              <p>
                We do not sell your personal information. We share information only in the following
                circumstances:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong className="text-foreground">Service providers</strong> — trusted vendors who
                  help us with hosting, storage, payment processing, analytics, and AI processing,
                  under contractual confidentiality obligations.
                </li>
                <li>
                  <strong className="text-foreground">Connected platforms</strong> — when you publish
                  content, we share it with the social platforms you have authorized.
                </li>
                <li>
                  <strong className="text-foreground">Legal reasons</strong> — when required by law, or
                  to protect the rights, safety, and security of Social Budd and its users.
                </li>
                <li>
                  <strong className="text-foreground">Business transfers</strong> — in connection with
                  a merger, acquisition, or sale of assets, with notice to you.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Data retention</h2>
              <p>
                We retain your data for as long as your account is active or as needed to provide the
                Service. You may request deletion of your account and associated data at any time,
                after which we will delete or anonymize it except where retention is required for
                legal, accounting, or security purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Data security</h2>
              <p>
                We use industry-standard technical and organizational measures to protect your
                information, including encryption in transit and access controls. No method of
                transmission or storage is completely secure, so we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Your rights and choices</h2>
              <p>
                Depending on your location, you may have the right to access, correct, export, or
                delete your personal information, object to or restrict certain processing, and
                withdraw consent. You can manage most information from your account settings or by
                contacting us. You may also disconnect any linked social account at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">International transfers</h2>
              <p>
                Your information may be processed in countries other than your own. Where required, we
                use appropriate safeguards to protect your information when it is transferred
                internationally.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Children&rsquo;s privacy</h2>
              <p>
                The Service is not intended for individuals under the age of 13 (or the minimum age
                required in your jurisdiction). We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated version
                on this page and revise the &ldquo;Last updated&rdquo; date above. Material changes
                will be communicated where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p>
                For privacy-related questions or to exercise your rights, contact us at{" "}
                <a href="mailto:privacy@socialbudd.com" className="text-foreground underline">
                  privacy@socialbudd.com
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
