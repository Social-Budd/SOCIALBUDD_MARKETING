"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { AppShell } from "@/components/product-ui/app-shell";
import { demoClients } from "@/lib/demo-data";

export function AgencySection() {
  return (
    <Section variant="muted">
      <Container>
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">For agencies</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Built for agencies managing content at scale.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            One place to manage content creation and publishing across all your clients.
          </p>
        </MotionReveal>

        <div className="mt-12">
          <AppShell clientName="Agency Workspace">
            <div className="mb-6 grid grid-cols-3 gap-4">
              {[
                { label: "Clients", value: "20" },
                { label: "Social accounts", value: "50" },
                { label: "Videos", value: "Hundreds" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-card p-4">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Clients (demo UI)
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {demoClients.map((client) => (
                <div
                  key={client.id}
                  className="rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/30"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-8 w-8 rounded-lg"
                      style={{ backgroundColor: client.color }}
                    />
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {client.accounts} accounts · {client.videos} videos
                      </p>
                    </div>
                  </div>
                  <span className="mt-3 inline-block rounded border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                    {client.status}
                  </span>
                </div>
              ))}
            </div>
          </AppShell>
        </div>
      </Container>
    </Section>
  );
}
