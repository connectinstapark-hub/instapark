import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Check, X, Building2, Package } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { InstaConnectRequest } from "@/components/instapark/instaconnect-request";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { InstaConnectPreview, CONNECT_STEPS } from "@/components/instapark/instaconnect-preview";
import { Parallax } from "@/components/instapark/parallax";
import { Reveal } from "@/components/instapark/reveal";
import { UtilityBento } from "@/components/instapark/utility-bento";
import { CONNECT_FAQS, type RequestKind } from "@/lib/instaconnect";

const description = "instaKonnect by InstaPark: privacy-first QR contact tags for cars, bikes, EVs and belongings. Reach owners through secure anonymous calls with no app download. Plate verification protects both numbers; WhatsApp and SMS alerts are coming soon.";
export const Route = createFileRoute("/instakonnect")({
  head: () => ({
    meta: [{ title: "instaKonnect — Privacy QR Contact Tags by InstaPark" }, { name: "description", content: description }, { property: "og:title", content: "instaKonnect — Privacy QR Contact Tags by InstaPark" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://park-instantly-lovely.lovable.app/instakonnect" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: "https://park-instantly-lovely.lovable.app/instakonnect" }],
  }),
  component: InstaConnectPage,
});

const gateways = [
  { to: "/instakonnect/societies", title: "Residential Societies & Offices", text: "End basement parking chaos with co-branded resident tags.", img: "/instakonnect-societies.jpg" },
  { to: "/instakonnect/ev-mobility", title: "Vehicles & EV Mobility", text: "Smart contact tags for every car, bike, EV and fleet.", img: "/instakonnect-ev.jpg" },
  { to: "/instakonnect/personal", title: "Personal Belongings & Family", text: "Luggage, laptops, kids and pets — found, privately.", img: "/instakonnect-personal.jpg" },
  { to: "/instakonnect/valet-events", title: "Valet & Events Synergy", text: "Connected, protected drivers for hotels, clubs and venues.", img: "/instakonnect-valet.jpg" },
] as const;

function InstaConnectPage() {
  const [kind, setKind] = useState<RequestKind | null>(null);
  return <div className="min-h-screen bg-background">
    <SiteNav solid />
    <main>
      <section className="relative isolate overflow-hidden bg-brand-deep pt-28 text-brand-foreground lg:pt-32">
        <Parallax speed={0.35} className="absolute inset-x-0 -top-24 -bottom-24 -z-10"><img src="/instakonnect-vehicle.jpg" alt="instaKonnect vehicle QR tag on a car windshield" width={1672} height={941} className="h-full w-full object-cover object-center" fetchPriority="high" /></Parallax>
        <div aria-hidden className="connect-photo-scrim pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 -z-10" />
        <Parallax speed={-0.15} className="pointer-events-none absolute -left-20 top-20 -z-10"><div className="glow-orb size-80 bg-gold/25" /></Parallax>
        <Parallax speed={0.25} className="pointer-events-none absolute right-0 bottom-0 -z-10"><div className="glow-orb size-96 bg-brand/70" /></Parallax>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pb-20">
          <Reveal className="max-w-xl">
            <p className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-gold"><ShieldCheck className="size-4 shrink-0" />BY INSTAPARK • 100% NUMBER PRIVACY</p>
            <p className="gold-text mt-6 font-display text-5xl font-bold sm:text-6xl">instaKonnect</p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Let Anyone Reach You — <span className="text-gold">Without Sharing Your Number.</span></h1>
            <p className="mt-5 text-base leading-relaxed text-brand-foreground/85">Stick the smart <strong>instaKonnect</strong> QR tag on your car, bike, EV, or valuables. Anyone can scan it with their phone camera—no app download needed—to reach you via a secure anonymous call, WhatsApp, or SMS while keeping both phone numbers 100% private.</p>
            <p className="mt-3 text-sm text-brand-foreground/75">Secure anonymous calling is live now. WhatsApp and SMS alerts are coming soon.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="gold" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("individual")}>Order instaKonnect Tags<ArrowRight /></Button>
              <Button variant="brandOutline" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>For Societies & Venues (Bulk)</Button>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">{[["0", "App downloads"], ["100%", "Number privacy"], ["4", "Digit plate check"]].map(([n, l]) => <div key={l} className="glass-card rounded-xl px-3 py-3"><p className="font-display text-2xl font-bold text-gold">{n}</p><p className="mt-1 text-[11px] leading-tight text-brand-foreground/75">{l}</p></div>)}</div>
          </Reveal>
          <Parallax speed={-0.08}><div className="float-slow"><InstaConnectPreview /></div></Parallax>
        </div>
      </section>
      <section className="relative overflow-hidden bg-cream px-5 py-20 lg:px-8">
        <Parallax speed={0.2} className="pointer-events-none absolute -right-24 top-0"><div className="glow-orb size-80 bg-gold/30" /></Parallax>
        <div className="relative mx-auto max-w-6xl"><Reveal><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">From a scan to a private connection</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Four steps. Both numbers protected.</h2></Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{CONNECT_STEPS.map((step, index) => <Reveal as="li" delay={index * 120} key={step.title} className="lift-card relative overflow-hidden rounded-2xl border border-border bg-card p-6"><span aria-hidden className="absolute -right-2 -top-6 font-display text-8xl font-bold text-primary/10">{index + 1}</span><span className="flex size-11 items-center justify-center rounded-xl bg-brand font-display text-lg font-bold text-gold">0{index + 1}</span><h3 className="mt-5 text-lg font-semibold">{step.title}{index === 0 ? <span className="mt-2 block text-xs font-semibold text-primary">No App Needed</span> : null}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>{index === 2 ? <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Standard: GJ01AB 1234 → 1234<br />BH: 22 BH 1234 AA → 1234<br />Short plates: 7 or 0007</p> : null}</Reveal>)}</ol>
        </div>
      </section>
      <UtilityBento />
      <section className="relative overflow-hidden bg-brand-deep px-5 py-20 text-brand-foreground lg:px-8">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
        <Parallax speed={-0.2} className="pointer-events-none absolute left-1/3 top-10"><div className="glow-orb size-96 bg-brand" /></Parallax>
        <div className="relative mx-auto max-w-6xl">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Same contact. More privacy.</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Leave a tag. Not your number.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="glass-card rounded-2xl p-7 opacity-80"><h3 className="text-xl font-semibold">The old way</h3><p className="mt-1 text-sm text-brand-foreground/60">Paper slips on the dashboard</p><ul className="mt-6 space-y-4">{["Exposes your personal number to strangers", "Invites spam calls and harassment", "Fades in sunlight", "Only works when someone looks closely"].map((text) => <li key={text} className="flex gap-3 text-sm text-brand-foreground/65"><X className="size-4 shrink-0" />{text}</li>)}</ul></Reveal>
            <Reveal delay={150} className="glass-card rounded-2xl border-gold/60 p-7 shadow-[0_0_60px_-20px_var(--gold)]"><h3 className="text-xl font-semibold text-gold">The instaKonnect way</h3><p className="mt-1 text-sm text-brand-foreground/70">Smart, masked QR contact</p><ul className="mt-6 space-y-4">{["100% phone number privacy", "Secure anonymous voice calls — live now", "Opens in a browser from any phone camera", "Weatherproof tags made to last for years"].map((text) => <li key={text} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-gold" />{text}</li>)}</ul></Reveal>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl"><Reveal><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Find your fit</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">One Privacy Tag. Built for Every Part of Life.</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2">{gateways.map((g, gi) => <Reveal key={g.to} delay={gi * 100}><Link to={g.to} className="group relative block aspect-[16/10] overflow-hidden rounded-3xl shadow-xl"><img src={g.img} alt={g.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/50 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-brand-foreground"><h3 className="font-display text-2xl font-bold">{g.title}</h3><p className="mt-2 text-sm text-brand-foreground/85">{g.text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">Explore<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div></Link></Reveal>)}</div></div></section>
      <section className="px-5 pb-20 lg:px-8"><div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="lift-card rounded-2xl border-2 border-gold bg-cream p-8"><p className="flex items-center gap-2 text-xs font-semibold uppercase text-primary"><Package className="size-4" />Multi-pack</p><h2 className="mt-3 text-2xl font-bold">instaKonnect Family & Mobility Pack</h2><ul className="mt-5 space-y-3">{["Car windshield decal", "Bike / helmet mini decal", "Luggage & keychain tags"].map((t) => <li key={t} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" />{t}</li>)}</ul><Button variant="gold" className="mt-6 h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("individual")}>Order the Family Pack<ArrowRight /></Button></Reveal>
        <Reveal delay={150} className="relative overflow-hidden rounded-2xl bg-brand p-8 text-brand-foreground"><Parallax speed={0.15} className="pointer-events-none absolute -right-16 -top-16"><div className="glow-orb size-64 bg-gold/35" /></Parallax><div className="relative"><p className="flex items-center gap-2 text-xs font-semibold uppercase text-gold"><Building2 className="size-4" />Your community. Your branding.</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">Deploying for a Residential Society, Corporate Park, or Hotel?</h2><p className="mt-4 text-sm leading-relaxed text-brand-foreground/80">Replace static paper stickers with co-branded, privacy-protected tags for residents, employees and guests.</p><Button variant="gold" className="mt-6 h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>Request Co-Branded Bulk Quote<ArrowRight /></Button></div></Reveal>
      </div></section>
      <section className="bg-cream px-5 py-20 lg:px-8"><div className="mx-auto max-w-3xl"><Reveal><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">A little more clarity</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your questions, answered.</h2></Reveal><Accordion type="single" collapsible className="mt-6">{CONNECT_FAQS.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`}><AccordionTrigger className="py-5 text-base">{faq.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion><div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl bg-brand p-6 text-brand-foreground"><ShieldCheck className="size-7 text-gold" /><p className="flex-1 text-sm font-medium">Stay reachable. Stay private.</p><Button variant="gold" onClick={() => setKind("individual")}>Get your instaKonnect tag<ArrowRight /></Button></div></div></section>
    </main>
    <SiteFooter />
    <InstaConnectRequest kind={kind} onClose={() => setKind(null)} />
  </div>;
}