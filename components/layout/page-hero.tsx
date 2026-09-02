import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  align?: "left" | "center";
};

export function PageHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  align = "left",
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-border bg-background pt-32 pb-16 md:pt-40 md:pb-20", className)}>
      <Container>
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {badge && (
            <Badge variant="accent" className="mb-6">
              {badge}
            </Badge>
          )}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "mt-8 flex flex-wrap gap-4",
                align === "center" && "justify-center"
              )}
            >
              {primaryCta && (
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="ml-1" />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="secondary" size="lg">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
