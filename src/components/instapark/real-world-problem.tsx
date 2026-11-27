import type { ReactNode } from "react";
import { ArrowDown, ExternalLink, Newspaper, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Reveal } from "@/components/instapark/reveal";
import { Parallax } from "@/components/instapark/parallax";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Source({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} {...ext} className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-brand-foreground">
      {children}
      <ExternalLink className="size-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
  );
}

const coverage = [
  { outlet: "The Economic Times", title: "Housing society parking dispute turns costly", href: "https://m.economictimes.com/wealth/legal/will/parking-dispute-turns-costly-homebuyer-loses-costly-court-case-after-neighbour-occupies-his-parking-space-with-second-car-heres-why/articleshow/132783858.cms" },
  { outlet: "The Independent (UK)", title: "Shared driveway & parking access legal battles", href: "https://www.independent.co.uk/news/uk/home-news/carol-esteban-brecon-beacons-court-b3092583.html" },
  { outlet: "Daily Mirror (UK)", title: "Driver rights when cars block spaces", href: "https://www.mirror.co.uk/news/uk-news/legal-rights-explained-driver-parks-37914506" },
];

/** "Why instaKonnect Matters" stat + news citation section. `stepsId` is the section the solution card scrolls to. */
export function RealWorldProblem({ stepsId }: { stepsId: string }) {
  const scroll = () => document.getElementById(stepsId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const cards = [
    { icon: TrendingUp, region: "India", stat: "7,000+", statLabel: "annual parking dispute calls", title: "3x Surge in Urban Parking Disputes", text: "Metro police control room data shows parking-related dispute calls have nearly tripled in recent years, with RWA groups flooded daily by blocked-gate complaints.", links: <Source href="https://theprint.in/ground-reports/delhi-parking-murder-court-cases-road-rage/2911224/">Read report on ThePrint →</Source> },
    { icon: Users, region: "UK", stat: "55%", statLabel: "of motorists affected", title: "55% of UK Drivers Face Obstructive Parking", text: "A nationwide AA poll of 14,901 drivers found over half view inconsiderate and obstructive residential parking as a serious everyday issue—while UK police advise resolving blocked driveways directly with the driver first.", links: <><Source href="https://www.theaa.com/about-us/newsroom/half-of-uk-drivers-say-illegal-parking-on-double-yellow-lines-is-a-serious-issue">View AA Driver Poll →</Source><Source href="https://www.express.co.uk/life-style/property/2261044/police-confirm-rule-blocked-driveway">Read Daily Express Police Rule Report →</Source></> },
  ];
  return (
    <section aria-labelledby="real-world-heading" className="relative overflow-hidden bg-brand-deep px-5 py-20 text-brand-foreground lg:px-8">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
      <Parallax speed={0.2} className="pointer-events-none absolute -left-24 top-10"><div className="glow-orb size-96 bg-brand" /></Parallax>
      <Parallax speed={-0.15} className="pointer-events-none absolute -right-20 bottom-0"><div className="glow-orb size-80 bg-gold/20" /></Parallax>
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-gold">THE REAL-WORLD PROBLEM</p>
          <h2 id="real-world-heading" className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">Blocked Gates & Driveways Shouldn’t Lead to Conflict — <span className="text-gold">Or Privacy Leaks.</span></h2>
          <p className="mt-4 text-base leading-relaxed text-brand-foreground/75 sm:text-lg">Every day, thousands of drivers and housing societies struggle to reach unknown vehicle owners without escalating arguments or exposing personal mobile numbers.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 140} className="glass-card lift-card flex flex-col rounded-2xl p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-gold"><c.icon className="size-5" /></span>
                <span className="rounded-full bg-brand-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-foreground/70">{c.region}</span>
              </div>
              <p className="gold-text mt-6 font-display text-5xl font-bold">{c.stat}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-foreground/60">{c.statLabel}</p>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-foreground/70">{c.text}</p>
              <div className="mt-6 flex flex-col gap-2 border-t border-brand-foreground/10 pt-5">{c.links}</div>
            </Reveal>
          ))}
          <Reveal delay={280} className="lift-card relative flex flex-col overflow-hidden rounded-2xl border border-gold/60 bg-brand p-7 shadow-[0_0_60px_-20px_var(--gold)]">
            <div className="flex items-center justify-between gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gold text-brand-deep"><ShieldCheck className="size-5" /></span>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">The solution</span>
            </div>
            <p className="gold-text mt-6 font-display text-5xl font-bold">0</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-foreground/60">personal numbers exposed</p>
            <h3 className="mt-5 text-lg font-semibold">100% Two-Way Number Privacy</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-foreground/80">Instead of honking, arguing, or leaving phone numbers on windshields, a 10-second QR scan connects drivers via a secure masked call or alert—de-escalating conflicts calmly.</p>
            <div className="mt-6 border-t border-brand-foreground/10 pt-5">
              <button type="button" onClick={scroll} className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-brand-foreground">
                See How It Works <ArrowDown className="size-4 transition-transform group-hover/cta:translate-y-0.5" />
              </button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150} className="mt-8 rounded-2xl border border-brand-foreground/10 bg-brand-foreground/5 px-6 py-5">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-foreground/60"><Newspaper className="size-4 shrink-0" />Featured Coverage on Parking & Access Disputes:</p>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {coverage.map((n) => (
              <li key={n.href} className="min-w-0">
                <a href={n.href} {...ext} className="group/news block">
                  <span className="text-xs font-semibold text-gold">{n.outlet}</span>
                  <span className="mt-1 flex items-start gap-1.5 text-sm italic text-brand-foreground/75 transition-colors group-hover/news:text-brand-foreground">“{n.title}”<ExternalLink className="mt-0.5 size-3.5 shrink-0" /></span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
