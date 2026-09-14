import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

/** The opening of an inner page, on the same surfaces and scale as the home page. */
export function PageHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  align = "left",
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className={cn("pt-32 pb-10 md:pt-40 md:pb-14", className)}>
      <Container>
        <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
          {badge && (
            <p className={cn("mb-5", centered && "flex justify-center")}>
              <span className="inline-block rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-medium text-muted-foreground">
                {badge}
              </span>
            </p>
          )}

          <h1 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p
            className={cn(
              "mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:mt-6",
              centered && "mx-auto"
            )}
          >
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-3",
                centered && "justify-center"
              )}
            >
              {primaryCta && (
                <Button asChild className="h-11 rounded-full px-6 text-[15px]">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  variant="secondary"
                  className="h-11 rounded-full px-6 text-[15px]"
                >
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
