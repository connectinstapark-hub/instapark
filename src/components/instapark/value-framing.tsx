import { Camera, MapPinOff, TicketX } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const rows = [
  {
    icon: TicketX,
    before: "Paper tickets get lost, swapped, or duplicated — and every dispute becomes a manual argument.",
    after: "QR passes and entry codes with override workflows: a lost pass is cleared by a supervisor in seconds.",
    title: "Ticketing",
  },
  {
    icon: MapPinOff,
    before: "Open grounds have no addressable spots, so drivers hunt rows for a single vehicle.",
    after: "Live GPS spot tagging pins each vehicle exactly where it was parked, structured lot or open field.",
    title: "Locating",
  },
  {
    icon: Camera,
    before: "No visual record at intake means damage claims come down to memory.",
    after: "Mandatory photo inspection at intake, timestamped and attached to the vehicle's lifecycle log.",
    title: "Liability",
  },
];

export function ValueFraming() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why teams switch"
          title="Manual valet ticketing breaks at scale. Real-time operations don't."
          description="Three places where paper-and-radio valet costs venues time, money, and guest trust."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {rows.map((row, i) => (
            <Reveal
              key={row.title}
              delay={i * 90}
              className="corner-cut flex h-full flex-col border border-border bg-background p-7 shadow-sm"
            >
              <span className="gold-gradient inline-flex size-11 items-center justify-center rounded-lg text-gold-foreground">
                <row.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {row.title}
              </h3>
              <p className="mt-3 border-l-2 border-border pl-3 text-sm leading-relaxed text-muted-foreground">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70">
                  Manual today
                </span>
                {row.before}
              </p>
              <p className="mt-4 border-l-2 border-gold pl-3 text-sm font-medium leading-relaxed text-foreground">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-primary">
                  With InstaPark
                </span>
                {row.after}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
