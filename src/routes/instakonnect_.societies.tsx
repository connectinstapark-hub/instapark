import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, CarFront, UserX, ShieldAlert, Package, Smartphone, BellRing } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { Reveal } from "@/components/instapark/reveal";
import { Parallax } from "@/components/instapark/parallax";
import { RealWorldProblem } from "@/components/instapark/real-world-problem";
import { VerticalHero, SectionHead, LeadForm, scrollToForm, verticalHead } from "@/components/instapark/instakonnect-vertical";

export const Route = createFileRoute("/instakonnect_/societies")({
  head: () => verticalHead("/instakonnect/societies", "instaKonnect for Societies & Office Parks | InstaPark", "Co-branded privacy QR parking tags for gated communities, RWAs and office parks. Guards and neighbours trigger masked calls — no app, no number leaks.", "/instakonnect-societies.jpg"),
  component: SocietiesPage,
});

const pains = [
  { icon: CarFront, t: "Double-parked basement cars", d: "Guards scan the blocking car and ring its owner in seconds — no intercom hunt, no honking." },
  { icon: UserX, t: "Unauthorised visitor parking", d: "Resident tags make unknown vehicles stand out instantly during patrol rounds." },
  { icon: ShieldAlert, t: "Numbers leaking on WhatsApp groups", d: "Women and senior residents stay reachable without their mobile numbers circulating on society groups." },
];
const steps = [
  { icon: Package, t: "Bulk tag delivery", d: "Co-branded decals arrive at your society office, pre-mapped to flats." },
  { icon: Smartphone, t: "60-sec OTP activation", d: "Each resident scans their tag and verifies with a one-time password." },
  { icon: BellRing, t: "Instant masked alerts", d: "Guards and neighbours scan to call — both numbers stay hidden." },
];
const fields = [
  { key: "org", label: "Society / Company Name", type: "text", autoComplete: "organization" },
  { key: "slots", label: "Total Flats / Parking Slots", type: "number", autoComplete: "off" },
  { key: "name", label: "Contact Person", type: "text", autoComplete: "name" },
  { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { key: "city", label: "City", type: "text", autoComplete: "address-level2" },
] as const;

function SocietiesPage() {
  return <div className="min-h-screen bg-slate">
    <SiteNav solid />
    <main>
      <VerticalHero img="/instakonnect-societies.jpg" alt="Guard scanning an instaKonnect tag in a society basement" className="bg-brand-deep text-brand-foreground" scrim="bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/20" badgeClass="bg-emerald/20 text-emerald ring-1 ring-emerald/40" badge="FOR GATED COMMUNITIES, RWAs & OFFICE PARKS"
        title={<>End Basement Parking Chaos — <span className="text-gold">Without Exposing Resident Phone Numbers.</span></>}
        sub={<>Replace paper windshield slips with co-branded <strong>[Your Society] × instaKonnect</strong> QR tags. Guards and neighbors scan to trigger masked calls—zero app downloads, zero privacy leaks.</>}
        cta="Apply for 50-Tag Society Pilot" onCta={() => scrollToForm("society-pilot")}
        accent={<div className="mt-8 flex flex-wrap gap-3">{["Zero app downloads", "Masked calls", "OTP-verified residents"].map((t) => <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-emerald/15 px-3 py-1.5 text-xs font-semibold text-emerald"><BadgeCheck className="size-4" />{t}</span>)}</div>} />
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl text-brand">
        <SectionHead eyebrow="3 pain points solved" title="Every society knows these problems." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{pains.map((p, i) => <Reveal key={p.t} delay={i * 120} className="lift-card rounded-2xl border border-border bg-card p-7"><span className="flex size-12 items-center justify-center rounded-xl bg-brand text-gold"><p.icon className="size-6" /></span><h3 className="mt-5 text-lg font-semibold text-foreground">{p.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p><p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald"><BadgeCheck className="size-4" />Solved by instaKonnect</p></Reveal>)}</div>
      </div></section>
      <section className="relative overflow-hidden bg-brand px-5 py-20 text-brand-foreground lg:px-8">
        <Parallax speed={0.2} className="pointer-events-none absolute -right-20 top-0"><div className="glow-orb size-96 bg-emerald/25" /></Parallax>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div><SectionHead eyebrow="Co-branded tag showcase" title="Your society's name. Our privacy shield." /><p className="mt-5 leading-relaxed text-brand-foreground/80">Each decal carries your society's name and logo alongside instaKonnect — a premium, weatherproof upgrade from paper stickers that residents are proud to display.</p></div>
          <Reveal className="mx-auto w-full max-w-xs"><div className="rotate-2 rounded-3xl bg-brand-deep p-5 shadow-2xl ring-1 ring-gold/40"><div className="rounded-xl bg-emerald/15 px-3 py-2 text-center text-xs font-bold tracking-widest text-emerald">LAKEVIEW RESIDENCY</div><p className="mt-3 text-center text-xs text-brand-foreground/70">× instaKonnect</p><img src="/instaconnect-tag.png" alt="Sample co-branded instaKonnect society decal" className="mt-3 w-full rounded-xl" loading="lazy" /></div></Reveal>
        </div>
      </section>
      <RealWorldProblem stepsId="society-rollout" />
      <section id="society-rollout" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="3-step rollout" title="Live in your society within a week." className="text-brand" />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">{steps.map((s, i) => <Reveal as="li" key={s.t} delay={i * 120} className="relative rounded-2xl border border-border bg-card p-7"><span className="font-display text-5xl font-bold text-emerald/30">0{i + 1}</span><s.icon className="mt-2 size-7 text-brand" /><h3 className="mt-4 text-lg font-semibold">{s.t}</h3><p className="mt-2 text-sm text-muted-foreground">{s.d}</p></Reveal>)}</ol>
        <LeadForm id="society-pilot" className="mt-14" subject="instaKonnect — 50-tag society pilot application" fields={fields} title="Apply for the 50-Tag Society Pilot" note="Tell us about your community. Our team will confirm pricing and delivery." />
      </div></section>
    </main>
    <SiteFooter />
  </div>;
}
