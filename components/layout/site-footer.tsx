import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";

/* Legal sits in the bottom bar rather than as a column of its own, and the
   agencies link is parked while those sections are off the site. */
const footerColumns = [
  { title: "Product", links: navLinks.product },
  {
    title: "Solutions",
    links: navLinks.solutions.filter((link) => link.href !== "/agencies"),
  },
  { title: "Resources", links: navLinks.resources },
  { title: "Company", links: navLinks.company },
];

const platforms = [InstagramIcon, TikTokIcon, YouTubeIcon, LinkedInIcon, FacebookIcon];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-sm font-bold">
                SB
              </span>
              <span className="text-base font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              Create once. Multiply everywhere.
            </p>

            <div className="mt-7 flex items-center gap-4" aria-hidden>
              {platforms.map((Mark, i) => (
                <Mark key={i} mono className="h-[18px] w-[18px] text-muted-foreground/60" />
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[14px] font-semibold text-foreground/90">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-foreground/75 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-[13px] text-muted-foreground">© 2026 {siteConfig.name}</p>

          <ul className="flex flex-wrap items-center justify-center">
            {navLinks.legal.map((link, i) => (
              <li key={link.href} className="flex items-center">
                {i > 0 && <span className="mx-4 h-3 w-px bg-white/[0.14]" aria-hidden />}
                <Link
                  href={link.href}
                  className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* The name in glass, sitting behind the footer as a watermark. */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-0.12em] z-0 select-none bg-gradient-to-b from-white/[0.028] via-white/[0.012] to-transparent bg-clip-text text-center font-display text-[15vw] font-extrabold leading-none tracking-[-0.05em] text-transparent"
      >
        {siteConfig.name}
      </p>
    </footer>
  );
}
