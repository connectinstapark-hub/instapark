import { Building, CalendarRange, Hotel, Layers } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const segments = [
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    body: "Cut arrival-lane congestion and give guests a retrieval status they can watch from their room.",
  },
  {
    icon: CalendarRange,
    title: "Event Venues & Grounds",
    body: "Handle mass simultaneous egress on open fields with GPS-tagged spots instead of row-by-row searching.",
  },
  {
    icon: Layers,
    title: "Hotel Chains & Multi-Property Groups",
    body: "One tenant, many properties: standardized workflows with comparative analytics across every site.",
  },
  {
    icon: Building,
    title: "Event Management Companies",
    body: "Spin up a venue, credential a temporary crew, and shut it down again — without provisioning new software.",
  },
];

export function Audiences() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for operators who own the arrival experience"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg, i) => (
            <Reveal
              key={seg.title}
              delay={i * 80}
              className="corner-cut flex h-full flex-col border border-border bg-background p-6"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-gold/15 text-primary">
                <seg.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">
                {seg.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {seg.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
