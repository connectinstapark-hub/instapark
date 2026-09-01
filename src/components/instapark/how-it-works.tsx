import { Reveal, SectionHeading } from "./reveal";

const phases = [
  {
    title: "Setup & Provisioning",
    body: "Tenant registration, venue and lot mapping, staff credentialing with role-based access.",
  },
  {
    title: "Digital Check-In",
    body: "Vehicle intake, QR pass and entry code generation, driver claims the task, mandatory damage-inspection photos, GPS / lot spot tagging.",
  },
  {
    title: "Live Tracking",
    body: "Real-time driver location monitoring for managers, live-status pass for the guest.",
  },
  {
    title: "Retrieval",
    body: "Standard guest-initiated retrieval, lost-pass override flow, and authorized self-pickup clearance.",
  },
  {
    title: "Audit & Analytics",
    body: "Full lifecycle history — timestamps, photos, GPS — plus incident review and throughput reporting.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="purple-gradient ribbon-clip-up relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rotate-[18deg] bg-gold/8 [clip-path:polygon(25%_0,100%_25%,75%_100%,0_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          tone="dark"
          title="Five phases, one continuous chain of custody"
          description="Every vehicle moves through the same lifecycle — and each step leaves an auditable trace."
        />

        <ol className="relative mt-16 grid gap-8 lg:grid-cols-5 lg:gap-5">
          {phases.map((phase, i) => (
            <Reveal
              as="li"
              key={phase.title}
              delay={i * 90}
              className="relative pl-16 lg:pl-0"
            >
              {/* connector line to the next phase */}
              {i < phases.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[1.375rem] top-12 h-[calc(100%+2rem-3rem)] w-[2px] bg-gradient-to-b from-gold/70 to-gold/15 lg:left-12 lg:top-[1.375rem] lg:h-[2px] lg:w-[calc(100%+1.25rem-3rem)] lg:bg-gradient-to-r"
                >
                  <span className="absolute -bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rotate-45 bg-gold/60 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-x-0 lg:-translate-y-1/2" />
                </span>
              )}
              <span className="gold-gradient absolute left-0 top-0 z-10 inline-flex size-11 items-center justify-center rounded-lg font-display text-base font-bold text-gold-foreground shadow-lg shadow-black/25 lg:relative lg:left-auto lg:top-auto lg:mb-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-bold text-brand-foreground">
                {phase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-foreground/70">
                {phase.body}
              </p>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  );
}
