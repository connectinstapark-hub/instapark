import { Camera, Navigation, Repeat2, Satellite } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const items = [
  {
    icon: Satellite,
    title: "Live GPS Spot Tagging",
    body: "Purpose-built for open grounds and unstructured lots where numbered bays don't exist. Drivers tag the exact coordinates on check-in.",
  },
  {
    icon: Navigation,
    title: "Real-Time Driver Tracking",
    body: "See every driver's live position and active task, so managers can rebalance lanes before the queue builds.",
  },
  {
    icon: Camera,
    title: "Visual Condition Photo Logs",
    body: "Mandatory inspection photos at intake and retrieval create a timestamped damage record that protects the venue from liability.",
  },
  {
    icon: Repeat2,
    title: "Flexible Override Workflows",
    body: "Lost-pass verification and authorized self-pickup are first-class flows — not exceptions handled off-system.",
  },
];

export function Differentiators() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Differentiators"
          title="What you won't find in a ticketing app"
          description="The capabilities that matter once a lot holds hundreds of vehicles and thousands of guests."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 2) * 90}
              className="corner-cut group relative overflow-hidden border border-border bg-cream p-8 transition-shadow hover:shadow-xl"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-32 rotate-12 bg-gold/10 transition-transform duration-500 group-hover:rotate-45 [clip-path:polygon(25%_0,100%_25%,75%_100%,0_70%)]"
              />
              <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-primary text-brand-foreground">
                <item.icon className="size-5" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
