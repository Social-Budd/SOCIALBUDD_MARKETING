import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import {
  createMetadata,
  organizationJsonLd,
  softwareJsonLd,
} from "@/lib/metadata";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

/** Carries the headlines, where the page needs a voice of its own. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/** Used only for the hand-written notes beside the hero. */
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${bricolage.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
      </head>
      {/* Browser extensions stamp attributes on <body> before React hydrates
          (ColorZilla adds cz-shortcut-listen, for one), which React reports as
          a mismatch. Ignoring attribute differences on this one element keeps
          that noise out of the console without hiding real mismatches. */}
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
