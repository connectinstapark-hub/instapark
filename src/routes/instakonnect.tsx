import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Check, X, Car, Building2, Ticket, ScanLine, Luggage, Home, Package } from "lucide-react";
import { SiteNav } from "@/components/instapark/site-nav";
import { SiteFooter } from "@/components/instapark/site-footer";
import { InstaConnectRequest } from "@/components/instapark/instaconnect-request";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { InstaConnectPreview, CONNECT_STEPS } from "@/components/instapark/instaconnect-preview";
import { CONNECT_FAQS, type RequestKind } from "@/lib/instaconnect";

const description = "instaKonnect by InstaPark: privacy-first QR contact tags for cars, bikes, EVs and belongings. Reach owners through secure anonymous calls with no app download. Plate verification protects both numbers; WhatsApp and SMS alerts are coming soon.";
export const Route = createFileRoute("/instakonnect")({
  head: () => ({
    meta: [{ title: "instaKonnect — Privacy QR Contact Tags by InstaPark" }, { name: "description", content: description }, { property: "og:title", content: "instaKonnect — Privacy QR Contact Tags by InstaPark" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://park-instantly-lovely.lovable.app/instakonnect" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: "https://park-instantly-lovely.lovable.app/instakonnect" }],
  }),
  component: InstaConnectPage,
});

const uses = [
  { icon: Car, title: "Vehicles & EV Mobility", items: [["Wrong Parking & Towing Alerts", "Prevent towing and roadside disputes."], ["EV Charging Bay Etiquette", "Let waiting EV drivers ping you politely when your car finishes charging."], ["Helmets & Commercial Fleets", "Instant rider or fleet supervisor contact without exposing personal numbers."]] },
  { icon: Luggage, title: "Personal Belongings (Lost & Found)", items: [["Travel Luggage & Backpacks", "Recover misplaced bags at airports or stations before leaving the terminal."], ["Laptops & Camera Gear", "Discreet interior tags so Good Samaritans can reach you safely."], ["Kids, Seniors & Pet Tags", "Instant guardian/owner contact wristbands and collar tags without engraving personal phone numbers."]] },
  { icon: Home, title: "Homes, Societies & Real Estate", items: [["Smart Video-Less Doorbell", "Place on apartment doors or villa gates so delivery agents scan to call you via masked audio."], ["Gated Society & Office Parking", "Replace static paper windshield stickers with smart resident and visitor tags."], ["“To-Let” & Property Boards", "Receive masked tenant inquiries and switch the tag off with one tap once rented."]] },
  { icon: Ticket, title: "Valet & Events Synergy", items: [["Seamless InstaPark Valet Integration", "Works alongside InstaPark’s valet operations and event badges for ongoing driver safety."]] },
] as const;

function InstaConnectPage() {
  const [kind, setKind] = useState<RequestKind | null>(null);
  return <div className="min-h-screen bg-background">
    <SiteNav solid />
    <main>
      <section className="relative isolate overflow-hidden bg-brand-deep pt-28 text-brand-foreground lg:pt-32">
        <img src="/instaconnect-vehicle.jpg" alt="instaKonnect vehicle QR tag on a car windshield" width={1672} height={941} className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div aria-hidden className="connect-photo-scrim pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pb-12">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-xs font-semibold text-gold"><ShieldCheck className="size-4 shrink-0" />BY INSTAPARK • 100% NUMBER PRIVACY</p>
            <p className="mt-5 font-display text-4xl font-bold text-gold">instaKonnect</p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Let Anyone Reach You — <span className="text-gold">Without Sharing Your Number.</span></h1>
            <p className="mt-5 text-base leading-relaxed text-brand-foreground/85">Stick the smart <strong>instaKonnect</strong> QR tag on your car, bike, EV, or valuables. Anyone can scan it with their phone camera—no app download needed—to reach you via a secure anonymous call, WhatsApp, or SMS while keeping both phone numbers 100% private.</p>
            <p className="mt-3 text-sm text-brand-foreground/75">Secure anonymous calling is live now. WhatsApp and SMS alerts are coming soon.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="gold" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("individual")}>Order instaKonnect Tags<ArrowRight /></Button>
              <Button variant="brandOutline" className="h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>For Societies & Venues (Bulk)</Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold"><ScanLine className="size-5 shrink-0" />Zero app downloads. Scan → Browser → Private call.</p>
          </div>
          <InstaConnectPreview />
        </div>
      </section>
      <section className="border-b border-border bg-cream px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase text-primary">From a scan to a private connection</p><h2 className="mt-3 text-3xl font-bold">Four steps. Both numbers protected.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{CONNECT_STEPS.map((step, index) => <li key={step.title} className="border-t-2 border-gold pt-5"><span className="font-display text-3xl font-bold text-primary">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold">{step.title}{index === 0 ? <span className="mt-2 block text-xs font-semibold text-primary">No App Needed</span> : null}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>{index === 2 ? <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Standard: GJ01AB 1234 → 1234<br />BH: 22 BH 1234 AA → 1234<br />Short plates: 7 or 0007</p> : null}</li>)}</ol>
        </div>
      </section>
      <section className="border-b border-border px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase text-primary">Same contact. More privacy.</p>
          <h2 className="mt-3 text-3xl font-bold">Leave a tag. Not your number.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border-l-2 border-border pl-6"><h3 className="text-xl font-semibold">The old way</h3><p className="mt-1 text-sm text-muted-foreground">Paper slips on the dashboard</p><ul className="mt-5 space-y-4">{["Exposes your personal number to strangers", "Invites spam calls and harassment", "Fades in sunlight", "Only works when someone looks closely"].map((text) => <li key={text} className="flex gap-3 text-sm text-muted-foreground"><X className="size-4 shrink-0" />{text}</li>)}</ul></div>
            <div className="border-l-2 border-gold pl-6"><h3 className="text-xl font-semibold text-primary">The instaKonnect way</h3><p className="mt-1 text-sm text-muted-foreground">Smart, masked QR contact</p><ul className="mt-5 space-y-4">{["100% phone number privacy", "Secure anonymous voice calls — live now", "Opens in a browser from any phone camera", "Weatherproof tags made to last for years"].map((text) => <li key={text} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" />{text}</li>)}</ul></div>
          </div>
        </div>
      </section>
      <section className="px-5 py-14 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase text-primary">Beyond parking</p><h2 className="mt-3 text-3xl font-bold">One Privacy Tag. Endless Everyday Uses.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{uses.map((group, gi) => <article key={group.title} className="rounded-lg border border-border bg-card p-6"><group.icon className="size-7 text-primary" /><h3 className="mt-5 text-lg font-semibold"><span className="text-gold-foreground/60">{gi + 1}.</span> {group.title}</h3><ul className="mt-4 space-y-4">{group.items.map(([t, d]) => <li key={t}><p className="text-sm font-semibold">{t}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p></li>)}</ul></article>)}</div></div></section>
      <section className="px-5 pb-14 lg:px-8"><div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border-2 border-gold bg-cream p-7"><p className="flex items-center gap-2 text-xs font-semibold uppercase text-primary"><Package className="size-4" />Multi-pack</p><h2 className="mt-3 text-2xl font-bold">instaKonnect Family & Mobility Pack</h2><ul className="mt-5 space-y-3">{["Car windshield decal", "Bike / helmet mini decal", "Luggage & keychain tags"].map((t) => <li key={t} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" />{t}</li>)}</ul><Button variant="gold" className="mt-6 h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("individual")}>Order the Family Pack<ArrowRight /></Button></div>
        <div className="rounded-lg bg-brand p-7 text-brand-foreground"><p className="flex items-center gap-2 text-xs font-semibold uppercase text-gold"><Building2 className="size-4" />Your community. Your branding.</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">Deploying for a Residential Society, Corporate Park, or Hotel?</h2><p className="mt-4 text-sm leading-relaxed text-brand-foreground/80">Replace static paper stickers with co-branded, privacy-protected tags for residents, employees and guests.</p><Button variant="gold" className="mt-6 h-auto min-h-11 whitespace-normal px-5 py-3" onClick={() => setKind("bulk")}>Request Co-Branded Bulk Quote<ArrowRight /></Button></div>
      </div></section>
      <section className="px-5 py-14 lg:px-8"><div className="mx-auto max-w-3xl"><p className="text-xs font-semibold uppercase text-primary">A little more clarity</p><h2 className="mt-3 text-3xl font-bold">Your questions, answered.</h2><Accordion type="single" collapsible className="mt-6">{CONNECT_FAQS.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`}><AccordionTrigger className="py-5 text-base">{faq.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion><div className="mt-10 flex flex-wrap items-center gap-4"><ShieldCheck className="size-7 text-primary" /><p className="flex-1 text-sm font-medium">Stay reachable. Stay private.</p><Button variant="gold" onClick={() => setKind("individual")}>Get your instaKonnect tag<ArrowRight /></Button></div></div></section>
    </main>
    <SiteFooter />
    <InstaConnectRequest kind={kind} onClose={() => setKind(null)} />
  </div>;
}