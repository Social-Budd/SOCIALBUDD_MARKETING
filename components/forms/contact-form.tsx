"use client";

import { useState } from "react";
import { VerifiedBadge } from "@/components/ui/verified-badge";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
        <VerifiedBadge className="h-11 w-11 text-emerald-400" />
        <p className="mt-5 text-[17px] font-semibold tracking-tight">Message sent</p>
        <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
          We read every one and reply within a working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md bg-black/35 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/40 focus:bg-black/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-muted-foreground">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md bg-black/35 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/40 focus:bg-black/50"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-[13px] font-medium text-muted-foreground">
          Company
        </label>
        <input
          id="company"
          name="company"
          className="w-full rounded-md bg-black/35 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/40 focus:bg-black/50"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-muted-foreground">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-md bg-black/35 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/40 focus:bg-black/50"
        />
      </div>
      <Button type="submit" disabled={loading} size="lg" className="mt-2 h-12 w-full rounded-full">
        {loading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

export function StartForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-8 text-center">
        <VerifiedBadge className="h-11 w-11 text-emerald-400" />
        <p className="mt-4 font-medium">You&apos;re on the list</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll send you access details shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="start-email" className="mb-2 block text-[13px] font-medium text-muted-foreground">
          Email
        </label>
        <input
          id="start-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-md bg-black/35 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/40 focus:bg-black/50"
        />
      </div>
      <div>
        <label htmlFor="start-name" className="mb-2 block text-[13px] font-medium text-muted-foreground">
          Name
        </label>
        <input
          id="start-name"
          name="name"
          required
          className="w-full rounded-md bg-black/35 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/40 focus:bg-black/50"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full" size="lg">
        {loading ? "Creating account..." : "Create your account"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No credit card required
      </p>
    </form>
  );
}

export function FormPageLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} description={description} align="center" />
      <Section className="pt-0">
        <Container size="narrow">
          <div className="mx-auto max-w-md">{children}</div>
        </Container>
      </Section>
    </>
  );
}
