"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Captions,
  CalendarClock,
  ChartNoAxesCombined,
  ChevronDown,
  FileText,
  LifeBuoy,
  Menu,
  Podcast,
  ScissorsLineDashed,
  TrendingUp,
  UserRoundPen,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/platform-icons";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Menu content                                                               */
/* -------------------------------------------------------------------------- */

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

type MenuItem = {
  label: string;
  href: string;
  description: string;
  Icon: Icon;
  badge?: string;
};

const productItems: MenuItem[] = [
  {
    label: "AI Clipping",
    href: "/product/clipping",
    description: "Find the best moments and cut them into shorts",
    Icon: ScissorsLineDashed,
  },
  {
    label: "Captions",
    href: "/product/captions",
    description: "Animated, on-brand captions in one click",
    Icon: Captions,
  },
  {
    label: "Scheduling",
    href: "/product/scheduling",
    description: "Plan a month of posts across every channel",
    Icon: CalendarClock,
  },
  {
    label: "Analytics",
    href: "/product/analytics",
    description: "See what landed and make more of it",
    Icon: ChartNoAxesCombined,
    badge: "New",
  },
];

const resourceItems: MenuItem[] = [
  { label: "Blog", href: "/blog", description: "Playbooks and product news", Icon: BookOpen },
  { label: "Documentation", href: "/docs", description: "Set-up guides and the API", Icon: FileText },
  { label: "Help Center", href: "/help", description: "Answers from the team", Icon: LifeBuoy },
];

const solutionItems: MenuItem[] = [
  {
    label: "Agencies",
    href: "/agencies",
    description: "Run every client's channels from one workspace",
    Icon: Building2,
  },
  {
    label: "Podcasters",
    href: "/solutions/podcasters",
    description: "Turn each episode into a week of clips",
    Icon: Podcast,
  },
  {
    label: "Businesses",
    href: "/solutions/businesses",
    description: "Keep your brand posting without a video team",
    Icon: BriefcaseBusiness,
  },
  {
    label: "Creators",
    href: "/solutions/creators",
    description: "Post daily without burning out",
    Icon: UserRoundPen,
  },
];

/* -------------------------------------------------------------------------- */
/*  Pieces                                                                     */
/* -------------------------------------------------------------------------- */

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

function MenuLink({
  item,
  onClick,
  compact = false,
}: {
  item: MenuItem;
  onClick?: () => void;
  compact?: boolean;
}) {
  const { Icon } = item;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-3 rounded-2xl p-2.5 transition-colors duration-200 hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none"
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] text-foreground/85 transition-all duration-200 group-hover:border-white/0 group-hover:bg-white group-hover:text-[#111113] group-hover:shadow-[0_6px_18px_-6px_rgba(255,255,255,0.35)] group-focus-visible:bg-white group-focus-visible:text-[#111113]",
          compact ? "h-8 w-8" : "h-10 w-10",
        )}
      >
        <Icon className={compact ? "h-4 w-4" : "h-[18px] w-[18px]"} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-[14px] font-semibold leading-tight text-foreground">
          {item.label}
          {item.badge && (
            <span className="rounded-md bg-accent/15 px-1.5 py-px text-[10px] font-semibold text-accent">
              {item.badge}
            </span>
          )}
        </span>
        <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <p className="mb-2 px-2.5 text-[13px] font-medium text-muted-foreground">{children}</p>;
}

/** The Solutions menu's visual column: two small proofs of the product at work. */
function SolutionsShowcase() {
  return (
    <div className="grid gap-3">
      <Link
        href="/solutions/podcasters"
        className="group relative block overflow-hidden rounded-xl border border-white/[0.08]"
      >
        <img
          src="/media/studio-source.jpg"
          alt=""
          width={1280}
          height={720}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur">
          <TrendingUp className="h-3 w-3 text-success" />
          +62% reach
        </span>
        <span className="absolute inset-x-3 bottom-3 text-[13px] font-semibold text-white">
          Podcasters
        </span>
      </Link>

      <Link
        href="/agencies"
        className="group block rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.05]"
      >
        <span className="text-[13px] font-semibold text-foreground">Agencies</span>
        <span className="mt-2 flex items-center">
          {[InstagramIcon, TikTokIcon, YouTubeIcon, LinkedInIcon, XIcon].map((Mark, i) => (
            <span
              key={i}
              style={{ zIndex: 5 - i }}
              className="relative -ml-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#161618] bg-[#1c1c20] first:ml-0"
            >
              <Mark className="h-3.5 w-3.5" />
            </span>
          ))}
          <span className="relative -ml-1.5 flex h-7 items-center rounded-full border-2 border-[#161618] bg-[#1c1c20] px-2 text-[10px] font-semibold text-foreground/80">
            + More
          </span>
        </span>
        <span className="mt-2 block text-[12px] text-muted-foreground">
          Every client, every channel, one workspace
        </span>
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop nav                                                                */
/* -------------------------------------------------------------------------- */

type MenuKey = "product" | "solutions";

function NavTrigger({
  label,
  open,
  onOpen,
  onClose,
  ...rest
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-haspopup="true"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={() => (open ? onClose() : onOpen())}
      className={cn(
        "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors",
        open
          ? "bg-white/[0.07] text-foreground"
          : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
      )}
      {...rest}
    >
      {label}
      <ChevronDown
        className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
      />
    </button>
  );
}

function NavItem({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function DesktopNav() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const closeTimer = useRef<number | null>(null);

  // A short grace period so the pointer can travel from the trigger down
  // into the panel without the menu closing on the way.
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const show = (key: MenuKey) => {
    cancelClose();
    setOpen(key);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      className="relative hidden items-center gap-0.5 lg:flex"
      aria-label="Main"
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
      }}
    >
      <NavTrigger
        label="Product"
        open={open === "product"}
        onOpen={() => show("product")}
        onClose={() => setOpen(null)}
      />
      <NavTrigger
        label="Solutions"
        open={open === "solutions"}
        onOpen={() => show("solutions")}
        onClose={() => setOpen(null)}
      />
      <NavItem href="/pricing">Pricing</NavItem>
      <NavItem href="/agencies">Agencies</NavItem>

      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            // Opaque from the first frame: the panel sits over the hero
            // headline, and any opacity ramp shows the text through it.
            initial={{ y: 10, scale: 0.985 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.99, transition: { duration: 0.12 } }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className={cn(
              "absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 rounded-2xl border border-white/[0.09] bg-[#161618] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl",
              open === "product" ? "w-[760px]" : "w-[820px]",
            )}
          >
            {open === "product" ? (
              <div className="grid grid-cols-[1fr_auto_240px] gap-3">
                <div>
                  <SectionTitle>Product</SectionTitle>
                  <div className="grid grid-cols-2 gap-1">
                    {productItems.map((item) => (
                      <MenuLink key={item.href} item={item} />
                    ))}
                  </div>
                </div>
                <div className="w-px bg-white/[0.08]" />
                <div>
                  <SectionTitle>Resources</SectionTitle>
                  <div className="grid gap-1">
                    {resourceItems.map((item) => (
                      <MenuLink key={item.href} item={item} compact />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-[1fr_auto_260px] gap-3">
                <div>
                  <SectionTitle>Who it&apos;s for</SectionTitle>
                  <div className="grid grid-cols-2 gap-1">
                    {solutionItems.map((item) => (
                      <MenuLink key={item.href} item={item} />
                    ))}
                  </div>
                </div>
                <div className="w-px bg-white/[0.08]" />
                <SolutionsShowcase />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                     */
/* -------------------------------------------------------------------------- */

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

  const close = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-background/80 backdrop-blur-3xl"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Logo />

          <DesktopNav />

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" size="sm" className="rounded-full px-4">
              <Link href="/contact">Talk to sales</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full px-4">
              <Link href="/start">
                Start for free
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-background lg:hidden"
          >
            <Container className="max-h-[calc(100svh-4rem)] overflow-y-auto py-5">
              <nav className="flex flex-col gap-6" aria-label="Mobile">
                <div>
                  <SectionTitle>Product</SectionTitle>
                  <div className="grid gap-1 sm:grid-cols-2">
                    {productItems.map((item) => (
                      <MenuLink key={item.href} item={item} compact onClick={close} />
                    ))}
                  </div>
                </div>
                <div>
                  <SectionTitle>Who it&apos;s for</SectionTitle>
                  <div className="grid gap-1 sm:grid-cols-2">
                    {solutionItems.map((item) => (
                      <MenuLink key={item.href} item={item} compact onClick={close} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 border-t border-border pt-4">
                  <Link href="/pricing" className="rounded-full px-3.5 py-2 text-sm hover:bg-white/[0.05]" onClick={close}>
                    Pricing
                  </Link>
                  <Link href="/blog" className="rounded-full px-3.5 py-2 text-sm hover:bg-white/[0.05]" onClick={close}>
                    Blog
                  </Link>
                  <Link href="/docs" className="rounded-full px-3.5 py-2 text-sm hover:bg-white/[0.05]" onClick={close}>
                    Docs
                  </Link>
                  <Link href="/contact" className="rounded-full px-3.5 py-2 text-sm hover:bg-white/[0.05]" onClick={close}>
                    Talk to sales
                  </Link>
                </div>
                <Button asChild className="h-11 rounded-md px-5">
                  <Link href="/start" onClick={close}>
                    Start for free
                    <ArrowRight />
                  </Link>
                </Button>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
