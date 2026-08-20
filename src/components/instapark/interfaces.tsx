import { useState } from "react";
import {
  ChevronDown,
  Building2,
  LayoutDashboard,
  Smartphone,
  UserCheck,
  Car,
  QrCode,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { cn } from "@/lib/utils";

const interfaces = [
  {
    icon: LayoutDashboard,
    name: "Superadmin Web",
    role: "System Administrator",
    bullets: [
      "Tenant onboarding & provisioning",
      "Subscription and billing management",
      "Platform-wide analytics",
    ],
    detail:
      "System-wide RBAC across every tenant, with plan-level controls, usage visibility, and cross-venue reporting for the platform operator.",
  },
  {
    icon: Building2,
    name: "Provider Web",
    role: "Venue Owner / Operations Admin",
    bullets: [
      "Facility & lot mapping",
      "Staff credentialing",
      "Full vehicle audit logs with GPS + photos",
    ],
    detail:
      "Incident management and operational analytics for the venue: throughput by shift, retrieval times, driver performance, and a searchable history of every vehicle handled.",
  },
  {
    icon: Smartphone,
    name: "Provider & Admin Mobile",
    role: "Venue Manager / Admin",
    bullets: [
      "Mobile queue dashboard",
      "Live driver GPS tracking",
      "Real-time alerts & occupancy metrics",
    ],
    detail:
      "Floor-level command from a phone: watch the retrieval queue build, see where every driver is, and get pushed alerts when wait times or occupancy cross thresholds.",
  },
  {
    icon: UserCheck,
    name: "Supervisor Mobile",
    role: "Site Supervisor",
    bullets: [
      "Rapid vehicle intake",
      "Entry code & QR pass generation",
      "Lost-pass override & self-pickup clearance",
    ],
    detail:
      "Built for lane supervision at peak arrival: intake a vehicle in seconds, hand the guest a QR pass, and resolve exceptions without leaving the curb.",
  },
  {
    icon: Car,
    name: "Driver Mobile",
    role: "Valet Driver",
    bullets: [
      "Intake code lookup & task claiming",
      "Mandatory photo inspection",
      "GPS / lot spot tagging",
    ],
    detail:
      "One-touch check-in and retrieval task execution, with the damage-inspection photo step enforced before a vehicle can be marked parked.",
  },
  {
    icon: QrCode,
    name: "Guest Web Interface",
    role: "Event Guest",
    bullets: [
      "App-free QR pass",
      "Live status: Parked → Ready",
      "One-click retrieval request",
    ],
    detail:
      "No download, no account. The guest scans once and follows their vehicle through Parked, Retrieval in Progress, Driver en Route, and Ready — and requests it back with a tap.",
  },
];

export function Interfaces() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="platform" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Platform overview"
          title="Six purpose-built interfaces, one operational record"
          description="Every role gets the surface it needs — and every action writes to the same vehicle lifecycle log."
        />

        <div id="interfaces" className="mt-14 grid scroll-mt-24 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {interfaces.map((item, i) => {
            const isOpen = open === item.name;
            return (
              <Reveal key={item.name} delay={(i % 3) * 80} className="h-full">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : item.name)}
                  className={cn(
                    "corner-cut group flex h-full w-full flex-col border p-6 text-left transition-all",
                    isOpen
                      ? "border-primary/40 bg-cream shadow-lg"
                      : "border-border bg-background hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-brand-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                      <item.icon className="size-5" />
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform",
                        isOpen && "rotate-180 text-primary",
                      )}
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.role}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden border-t border-border pt-4 text-sm leading-relaxed text-foreground">
                      {item.detail}
                    </p>
                  </div>
                  <span className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70">
                    {isOpen ? "Hide details" : "View details"}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
