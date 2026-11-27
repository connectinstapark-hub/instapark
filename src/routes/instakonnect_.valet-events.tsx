import { createFileRoute } from "@tanstack/react-router";
import { ScanLine, BellRing, Crown, Building, Hotel, Flag, Presentation } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { Reveal } from "@/components/instapark/reveal";
import { Parallax } from "@/components/instapark/parallax";
import { VerticalHero, SectionHead, LeadForm, scrollToForm, verticalHead } from "@/components/instapark/instakonnect-vertical";

export const Route = createFileRoute("/instakonnect_/valet-events")({
  head: () => verticalHead("/instakonnect/valet-events", "instaKonnect Valet & Events Synergy | InstaPark", "Combine InstaPark valet management with permanent instaKonnect windshield tags for banquet halls, hotels, clubs and summits.", "/instakonnect-valet.jpg"),
  component: ValetPage,
});
const how = [
  { icon: ScanLine, t: "Instant guest vehicle recognition", d: "Valet desks scan a returning guest's tag and pull up the car in seconds." },
  { icon: BellRing, t: "Zero-app porch retrieval alerts", d: "Guests and drivers coordinate pickup through masked alerts — no app needed." },
  { icon: Crown, t: "Co-branded venue decals", d: "Your hotel or club's brand rides on every guest's windshield for years." },
];
const ideal = [{ icon: Building, t: "Luxury Banquet Halls" }, { icon: Hotel, t: "Hotels & Resorts" }, { icon: Flag, t: "Golf & Social Clubs" }, { icon: Presentation, t: "Corporate Summits" }];
const fields = [
  { key: "venue", label: "Venue / Event Name", type: "text", autoComplete: "organization" },
  { key: "volume", label: "Monthly Vehicle Volume", type: "number", autoComplete: "off" },
  { key: "name", label: "Contact Person", type: "text", autoComplete: "name" },
  { key: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { key: "email", label: "Email", type: "email", autoComplete: "email" },
] as const;

function ValetPage() {
  return <div className="min-h-screen bg-brand-deep text-brand-foreground">
    <SiteNav solid />
    <main>
      <VerticalHero img="/instakonnect-valet.jpg" alt="Valet attendant at a luxury hotel entrance" className="bg-brand-deep" scrim="bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/10" badgeClass="gold-gradient text-gold-foreground" badge="POWERED BY INSTAPARK VALET ECOSYSTEM"
        title={<>Turn Every Valet Ticket & Event Guest Into a <span className="gold-text">Connected, Protected Driver.</span></>}
        sub={<>Combine InstaPark’s QR valet management with permanent <strong>instaKonnect</strong> windshield tags—giving banquet halls, hotels, and clubs seamless porch coordination and a branded VIP takeaway guests keep on their car for years.</>}
        cta="Schedule a Venue / Event Partner Demo" onCta={() => scrollToForm("venue-partner")} />
      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <Parallax speed={0.2} className="pointer-events-none absolute -right-24 top-0"><div className="glow-orb size-96 bg-gold/20" /></Parallax>
        <div className="relative mx-auto max-w-6xl"><SectionHead eyebrow="How valet + instaKonnect work together" title="One ecosystem, from porch to parking." className="text-gold" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-gold/30 md:grid-cols-3">{how.map((h, i) => <Reveal key={h.t} delay={i * 120} className="bg-brand-deep p-8"><h.icon className="size-8 text-gold" /><h3 className="mt-6 font-display text-xl font-semibold">{h.t}</h3><p className="mt-3 text-sm leading-relaxed text-brand-foreground/70">{h.d}</p></Reveal>)}</div>
        </div>
      </section>
      <section className="bg-brand px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl"><SectionHead eyebrow="Ideal for" title="Made for premium hospitality." className="text-gold" />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">{ideal.map((x, i) => <Reveal key={x.t} delay={i * 80} className="rounded-2xl border border-gold/40 p-6 text-center"><x.icon className="mx-auto size-9 text-gold" /><p className="mt-4 font-display font-semibold">{x.t}</p></Reveal>)}</div>
      </div></section>
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-4xl"><LeadForm id="venue-partner" subject="instaKonnect — Venue / Event partner demo request" fields={fields} title="Partner Inquiry" note="Tell us about your venue. We'll schedule a walkthrough of InstaPark valet + instaKonnect." /></div></section>
    </main>
    <SiteFooter />
  </div>;
}
