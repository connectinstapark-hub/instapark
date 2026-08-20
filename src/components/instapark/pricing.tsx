import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Standard",
    pitch: "Single venue, one operating crew.",
    features: [
      "One venue with unlimited lots",
      "Supervisor, driver & guest interfaces",
      "GPS spot tagging + photo logs",
      "Operational analytics",
    ],
  },
  {
    name: "Enterprise",
    pitch: "High-volume venues with compliance needs.",
    featured: true,
    features: [
      "Everything in Standard",
      "Incident management & audit exports",
      "Advanced RBAC and staff credentialing",
      "Priority onboarding and SLA",
    ],
  },
  {
    name: "Multi-Venue",
    pitch: "Chains and event operators across many sites.",
    features: [
      "Everything in Enterprise",
      "Multi-tenant provisioning",
      "Cross-property comparative analytics",
      "Custom billing per venue",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans scoped to your venue footprint"
          description="Enterprise valet deployments differ by lot size, crew, and property count — so every plan is quoted, not listed."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 90}
              className={cn(
                "corner-cut flex h-full flex-col border p-8",
                tier.featured
                  ? "purple-gradient border-primary shadow-2xl shadow-primary/20"
                  : "border-border bg-background",
              )}
            >
              {tier.featured ? (
                <span className="mb-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-foreground">
                  Most requested
                </span>
              ) : null}
              <h3
                className={cn(
                  "font-display text-2xl font-bold",
                  tier.featured ? "text-brand-foreground" : "text-foreground",
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  tier.featured
                    ? "text-brand-foreground/70"
                    : "text-muted-foreground",
                )}
              >
                {tier.pitch}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex gap-2.5 text-sm leading-relaxed",
                      tier.featured
                        ? "text-brand-foreground/85"
                        : "text-muted-foreground",
                    )}
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "corner-cut mt-8 inline-flex justify-center px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                  tier.featured
                    ? "gold-gradient text-gold-foreground"
                    : "bg-primary text-brand-foreground",
                )}
              >
                Contact Sales
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
