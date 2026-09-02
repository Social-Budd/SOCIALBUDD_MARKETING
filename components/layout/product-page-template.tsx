import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ClippingDemoSection } from "@/components/marketing/clipping-demo-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

type ProductPageProps = {
  title: string;
  description: string;
  path: string;
  badge: string;
  demo?: React.ReactNode;
};

export function createProductPage({ title, description, path, badge, demo }: ProductPageProps) {
  const metadata = createMetadata({ title, description, path });

  function ProductPage() {
    return (
      <>
        <PageHero
          badge={badge}
          title={title}
          description={description}
          primaryCta={{ label: "Start for free", href: "/start" }}
          secondaryCta={{ label: "See pricing", href: "/pricing" }}
        />
        {demo}
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

  return { metadata, ProductPage };
}
