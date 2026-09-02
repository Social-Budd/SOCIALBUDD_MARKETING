import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/constants";

const footerColumns = [
  { title: "Product", links: navLinks.product },
  { title: "Solutions", links: navLinks.solutions },
  { title: "Resources", links: navLinks.resources },
  { title: "Company", links: navLinks.company },
  { title: "Legal", links: navLinks.legal },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted text-sm font-bold text-accent">
                SB
              </span>
              <span className="text-base font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              One video in. Many social posts out. AI-powered content workflow for agencies and teams.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 {siteConfig.name}
          </p>
          <p className="text-sm text-muted-foreground">
            Create → Edit → Approve → Schedule → Publish → Analyze
          </p>
        </div>
      </Container>
    </footer>
  );
}
