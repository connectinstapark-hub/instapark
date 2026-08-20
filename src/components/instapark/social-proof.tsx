import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

const metrics = [
  { value: "62%", label: "faster average retrieval times" },
  { value: "90%", label: "fewer lost-ticket incidents" },
  { value: "4x", label: "vehicles handled per shift" },
];

const logos = ["Marina Grand", "Westline Hotels", "Arena Fields", "Nova Events", "Palm Court"];

export function SocialProof() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sample content — to be replaced with real customer data
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <li
                key={logo}
                className="font-display text-base font-semibold tracking-tight text-muted-foreground/55"
              >
                {logo}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="corner-cut relative border border-border bg-cream p-8 lg:p-10">
            <Quote className="size-8 text-gold" />
            <blockquote className="mt-5 font-display text-xl font-medium leading-snug text-foreground lg:text-2xl">
              “Egress used to be the worst forty minutes of every event. With
              GPS-tagged spots and live driver assignment, our crew clears the
              same volume without a single radio call.”
            </blockquote>
            <footer className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Placeholder Name
              </span>{" "}
              — Director of Operations, Sample Venue Group
            </footer>
          </Reveal>

          <div className="grid gap-4">
            {metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 90}
                className="purple-gradient corner-cut flex items-center gap-5 p-6"
              >
                <span className="font-display text-3xl font-bold text-gold">
                  {m.value}
                </span>
                <span className="text-sm leading-snug text-brand-foreground/75">
                  {m.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
