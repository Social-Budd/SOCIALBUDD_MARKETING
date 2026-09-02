"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted text-sm font-bold text-accent">
        SB
      </span>
      <span className="text-base font-semibold tracking-tight text-foreground">
        {siteConfig.name}
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-border bg-card p-2 shadow-elevated"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <NavDropdown label="Product" items={navLinks.product} />
            <NavDropdown label="Solutions" items={navLinks.solutions} />
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/agencies"
              className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Agencies
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/contact">Talk to sales</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/start">
                Start for free
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <Container className="py-6">
              <nav className="flex flex-col gap-6" aria-label="Mobile">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Product
                  </p>
                  <div className="flex flex-col gap-1">
                    {navLinks.product.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Solutions
                  </p>
                  <div className="flex flex-col gap-1">
                    {navLinks.solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <Link href="/pricing" className="px-3 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                    Pricing
                  </Link>
                  <Link href="/agencies" className="px-3 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                    Agencies
                  </Link>
                  <Link href="/contact" className="px-3 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                    Talk to sales
                  </Link>
                  <Button asChild className="mt-2">
                    <Link href="/start" onClick={() => setMobileOpen(false)}>
                      Start for free
                    </Link>
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
