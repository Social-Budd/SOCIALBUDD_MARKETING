"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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
      <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
        <p className="mt-4 font-medium">Message sent</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          name="company"
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
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
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
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
        <label htmlFor="start-email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="start-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="start-name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="start-name"
          name="name"
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full" size="lg">
        {loading ? "Creating account..." : "Start for free"}
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
